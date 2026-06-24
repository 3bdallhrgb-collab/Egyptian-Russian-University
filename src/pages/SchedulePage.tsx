import { useState, useMemo } from 'react'
import { AppShell } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { SelectBox } from '@/components/ui/SelectBox'
import { PrintLink } from '@/components/ui/PrintLink'
import { PageHeader } from '@/components/ui/PageHeader'
import { ScheduleGrid } from '@/components/portal/ScheduleGrid'
import { mockStudent } from '@/data/mockStudent'
import { mockCourses, periodOptions, type Course } from '@/data/mockCourses'
import { ChevronDown } from 'lucide-react'

const daysOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dayFilterOptions = ['All Days', ...daysOrder]

type SortKey = 'code' | 'title' | 'credits' | 'dayTime'

export default function SchedulePage() {
  const [period, setPeriod] = useState('2025/SPRING')
  const [showCart, setShowCart] = useState(true)
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [sortKey, setSortKey] = useState<SortKey>('dayTime')
  const [dayFilter, setDayFilter] = useState('All Days')

  const filteredCourses = useMemo(() => {
    let list = [...mockCourses]
    if (dayFilter !== 'All Days') {
      list = list.filter((c) => c.days.includes(dayFilter))
    }
    return list.sort((a, b) => {
      if (sortKey === 'code') return a.code.localeCompare(b.code)
      if (sortKey === 'title') return a.title.localeCompare(b.title)
      if (sortKey === 'credits') return a.credits - b.credits
      const dayDiff = daysOrder.indexOf(a.days[0]) - daysOrder.indexOf(b.days[0])
      if (dayDiff !== 0) return dayDiff
      return a.startTime.localeCompare(b.startTime)
    })
  }, [sortKey, dayFilter])

  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeader title="My Schedule" />

        <Card topBorder="orange">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <SelectBox value={period} options={periodOptions} onChange={setPeriod} />
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={showCart}
                  onChange={(e) => setShowCart(e.target.checked)}
                  className="rounded border-slate-300 text-eru-600 focus:ring-eru-500"
                />
                Courses in cart
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={showWaitlist}
                  onChange={(e) => setShowWaitlist(e.target.checked)}
                  className="rounded border-slate-300 text-eru-600 focus:ring-eru-500"
                />
                Waitlist courses
              </label>
            </div>
            <div className="flex items-center gap-4">
              <PrintLink />
              <button className="bg-eru-700 hover:bg-eru-800 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition">
                View Cart
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-slate-500">Year:</span>{' '}
              <span className="font-medium text-slate-800">{mockStudent.year}</span>
            </div>
            <div>
              <span className="text-slate-500">Level:</span>{' '}
              <span className="font-medium text-slate-800">{mockStudent.program}, {mockStudent.degree}</span>
            </div>
            <div>
              <span className="text-slate-500">Advisor(s):</span>{' '}
              <span className="font-medium text-slate-800">{mockStudent.advisor}</span>
            </div>
          </div>
        </Card>

        <Card>
          <ScheduleGrid />
        </Card>

        <Card>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-lg font-semibold text-slate-800">Registered Courses</h2>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <select
                  value={dayFilter}
                  onChange={(e) => setDayFilter(e.target.value)}
                  className="appearance-none border border-slate-300 rounded-lg pl-3 pr-8 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-eru-500 focus:border-eru-500 bg-white"
                >
                  {dayFilterOptions.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  value={sortKey}
                  onChange={(e) => setSortKey(e.target.value as SortKey)}
                  className="appearance-none border border-slate-300 rounded-lg pl-3 pr-8 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-eru-500 focus:border-eru-500 bg-white"
                >
                  <option value="dayTime">Sort by Day & Time</option>
                  <option value="code">Sort by Code</option>
                  <option value="title">Sort by Title</option>
                  <option value="credits">Sort by Credits</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-sm">
                  <th className="py-3 px-4 font-semibold">Code</th>
                  <th className="py-3 px-4 font-semibold">Course</th>
                  <th className="py-3 px-4 font-semibold">Days</th>
                  <th className="py-3 px-4 font-semibold">Time</th>
                  <th className="py-3 px-4 font-semibold">Location</th>
                  <th className="py-3 px-4 font-semibold">Instructor</th>
                  <th className="py-3 px-4 font-semibold">Credits</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course: Course) => (
                  <tr key={course.code} className="border-b border-slate-100 hover:bg-slate-50 text-sm transition">
                    <td className="py-3 px-4 font-semibold text-eru-700">{course.code}</td>
                    <td className="py-3 px-4 text-slate-700 font-medium">{course.title}</td>
                    <td className="py-3 px-4 text-slate-700">{course.days.join(', ')}</td>
                    <td className="py-3 px-4 text-slate-700">{course.startTime} - {course.endTime}</td>
                    <td className="py-3 px-4 text-slate-700">{course.location}</td>
                    <td className="py-3 px-4 text-slate-700">{course.instructor}</td>
                    <td className="py-3 px-4 text-slate-700 font-semibold">{course.credits.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredCourses.length === 0 && (
            <div className="py-8 text-center text-sm text-slate-500">
              No courses on the selected day.
            </div>
          )}
        </Card>

      </div>
    </AppShell>
  )
}
