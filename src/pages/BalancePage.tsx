import { useState } from 'react'
import { AppShell } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { SelectBox } from '@/components/ui/SelectBox'
import { PageHeader } from '@/components/ui/PageHeader'
import { balanceSummary } from '@/data/mockFinances'
import { periodOptions } from '@/data/mockCourses'

const radioOptions = [
  { label: 'Detail by Charges / Credits', value: 'charges' },
  { label: 'Detail by Summary Type', value: 'summary' },
  { label: 'Balance Summary', value: 'balance' },
]

export default function BalancePage() {
  const [period, setPeriod] = useState('2025/SPRING')
  const [view, setView] = useState('balance')

  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeader title="Balance / الرصيد" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-black mb-2">Balance Due By Term / الرصيد المستحق</h2>
            <p className="text-sm text-slate-600 mb-4">
              Summary of charges, credits, and remaining balance for the selected period.
            </p>

            <div className="bg-slate-100 border border-black p-4 flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-black">Total Balance / الرصيد الإجمالي</span>
              <span className="text-2xl font-bold text-black">
                {balanceSummary.total.toFixed(2)} ج.م
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-black">
                <tbody>
                  <tr className="border-b border-black">
                    <td className="py-2 px-3 border-r border-black">Tuition / الرسوم الدراسية</td>
                    <td className="py-2 px-3 text-right">{balanceSummary.tuition.toFixed(2)} ج.م</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="py-2 px-3 border-r border-black">Extra Repeat / إعادة إضافية</td>
                    <td className="py-2 px-3 text-right">{balanceSummary.extraRepeat.toFixed(2)} ج.م</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="py-2 px-3 border-r border-black">Discount / الخصم</td>
                    <td className="py-2 px-3 text-right">−{balanceSummary.discount.toFixed(2)} ج.م</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="py-2 px-3 border-r border-black">Payment / الدفع</td>
                    <td className="py-2 px-3 text-right">−{balanceSummary.payment.toFixed(2)} ج.م</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-r border-black">Activities / الأنشطة</td>
                    <td className="py-2 px-3 text-right">{balanceSummary.activities.toFixed(2)} ج.م</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-black mb-4">Options / الخيارات</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-600 mb-1">Period / الفصل</label>
              <SelectBox value={period} options={periodOptions} onChange={setPeriod} className="w-full" />
            </div>
            <div className="space-y-3">
              {radioOptions.map((opt) => (
                <label key={opt.value} className="flex items-start gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="balance-view"
                    value={opt.value}
                    checked={view === opt.value}
                    onChange={() => setView(opt.value)}
                    className="mt-1"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </Card>
        </div>

      </div>
    </AppShell>
  )
}
