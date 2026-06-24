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
  const [period, setPeriod] = useState('2026/SPRING')
  const [view, setView] = useState('balance')

  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeader title="Balance" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">Balance Due By Term</h2>
            <p className="text-sm text-slate-600 mb-4">
              Summary of charges, credits, and remaining balance for the selected period.
            </p>

            <div className="bg-eru-50 rounded-lg p-4 flex items-center justify-between mb-4 border border-eru-100">
              <span className="text-sm font-semibold text-slate-700">Total Balance</span>
              <span className="text-2xl font-bold text-eru-900">
                {balanceSummary.total.toFixed(2)} ج.م
              </span>
            </div>

            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3">Tuition</td>
                  <td className="py-2 px-3 text-right">{balanceSummary.tuition.toFixed(2)} ج.م</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3">EXTRA REPEAT</td>
                  <td className="py-2 px-3 text-right">{balanceSummary.extraRepeat.toFixed(2)} ج.م</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3">Discount</td>
                  <td className="py-2 px-3 text-right text-red-600">−{balanceSummary.discount.toFixed(2)} ج.م</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3">Payment</td>
                  <td className="py-2 px-3 text-right text-red-600">−{balanceSummary.payment.toFixed(2)} ج.م</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-3">Activities</td>
                  <td className="py-2 px-3 text-right">{balanceSummary.activities.toFixed(2)} ج.م</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Options</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-600 mb-1">Period</label>
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
