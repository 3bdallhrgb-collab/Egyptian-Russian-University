import { TopNav } from './TopNav'
import { PageBackground } from '@/components/ui/PageBackground'
import { Footer } from '@/components/portal/Footer'

interface AppShellProps {
  children: React.ReactNode
  pageLabel?: string
  variant?: 'login' | 'portal'
  hideFooter?: boolean
}

export function AppShell({ children, pageLabel, variant = 'portal', hideFooter = false }: AppShellProps) {
  return (
    <PageBackground>
      <TopNav variant={variant} pageLabel={pageLabel} />
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
        {children}
        {!hideFooter && <Footer />}
      </main>
    </PageBackground>
  )
}
