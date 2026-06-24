import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SelectBoxProps {
  value: string
  options: string[]
  onChange?: (value: string) => void
  className?: string
}

export function SelectBox({ value, options, onChange, className }: SelectBoxProps) {
  return (
    <div className={cn('relative inline-block', className)}>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="appearance-none bg-white border border-slate-300 rounded-md px-3 py-1.5 pr-8 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-eru-600 focus:border-eru-600"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
    </div>
  )
}
