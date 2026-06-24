import { cn } from '@/lib/utils'

export function PageBackground({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('min-h-screen bg-white', className)}>
      {children}
    </div>
  )
}
