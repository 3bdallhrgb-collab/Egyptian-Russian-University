import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: React.ReactNode
  subtext?: React.ReactNode
  className?: string
}

export function StatCard({ title, value, subtext, className }: StatCardProps) {
  return (
    <div className={cn('bg-white rounded-lg shadow-card border border-slate-100 p-5', className)}>
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{title}</div>
      <div className="mt-2 text-2xl font-bold text-eru-900">{value}</div>
      {subtext && <div className="mt-1 text-sm text-slate-600">{subtext}</div>}
    </div>
  )
}
