import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  topBorder?: 'blue' | 'orange' | 'cyan' | 'none'
  noPadding?: boolean
}

const borderColor = {
  blue: 'border-t-4 border-t-eru-600',
  orange: 'border-t-4 border-t-eru-orange',
  cyan: 'border-t-4 border-t-eru-cyan',
  none: '',
}

export function Card({ children, className, topBorder = 'none', noPadding = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-md shadow-sm border border-slate-200',
        borderColor[topBorder],
        !noPadding && 'p-6',
        className
      )}
    >
      {children}
    </div>
  )
}
