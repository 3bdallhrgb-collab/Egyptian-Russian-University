import { Printer } from 'lucide-react'

interface PrintLinkProps {
  onClick?: () => void
  className?: string
}

export function PrintLink({ onClick, className }: PrintLinkProps) {
  return (
    <button
      onClick={onClick || (() => window.print())}
      className={`inline-flex items-center text-sm font-medium px-3 py-1.5 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 hover:text-eru-700 transition ${className}`}
    >
      <Printer className="w-4 h-4 mr-1.5" />
      Print
    </button>
  )
}
