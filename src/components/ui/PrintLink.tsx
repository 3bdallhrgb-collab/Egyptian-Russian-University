import { Printer } from 'lucide-react'

interface PrintLinkProps {
  onClick?: () => void
  className?: string
}

export function PrintLink({ onClick, className }: PrintLinkProps) {
  return (
    <button
      onClick={onClick || (() => window.print())}
      className={`inline-flex items-center text-sm font-medium text-eru-700 hover:text-eru-900 hover:underline ${className}`}
    >
      <Printer className="w-4 h-4 mr-1.5" />
      Print
    </button>
  )
}
