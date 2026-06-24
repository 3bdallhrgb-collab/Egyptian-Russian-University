interface PageHeaderProps {
  title: string
  action?: React.ReactNode
}

export function PageHeader({ title, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
      <h1 className="text-xl sm:text-2xl font-bold text-slate-800">{title}</h1>
      {action && <div>{action}</div>}
    </div>
  )
}
