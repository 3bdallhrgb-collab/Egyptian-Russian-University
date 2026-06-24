import { useState } from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import { AppShell } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/ui/PageHeader'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const june2026 = Array.from({ length: 30 }, (_, i) => i + 1)

export default function DashboardPage() {
  const selectedDate = 24
  const [month] = useState('June 2026')

  const firstDay = 0 // June 1, 2026 is Monday

  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeader title="Today's Overview" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card topBorder="blue">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-800">Your Calendar</h2>
              <div className="text-sm text-slate-600">{month}</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {days.map((d) => (
                <div key={d} className="py-2 font-semibold text-slate-600">
                  {d}
                </div>
              ))}
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {june2026.map((date) => {
                const isSelected = date === selectedDate
                return (
                  <div
                    key={date}
                    className={`py-2 rounded-full cursor-pointer ${isSelected
                      ? 'bg-eru-700 text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                      }`}
                  >
                    {date}
                  </div>
                )
              })}
            </div>
            <div className="mt-6 flex flex-col items-center justify-center py-8 text-slate-500">
              <CalendarIcon className="w-12 h-12 mb-2 text-slate-400" />
              <p className="text-sm">No events for June 24, 2026</p>
            </div>
          </Card>

          <Card topBorder="cyan">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Announcements</h2>
            <div className="flex flex-col items-center justify-center py-16 text-slate-500">
              <p className="text-sm">No announcements at this time.</p>
            </div>
          </Card>
        </div>

      </div>
    </AppShell>
  )
}
