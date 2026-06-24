import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, ShoppingCart, User, ChevronDown, X } from 'lucide-react'
import { FullMenuOverlay } from './FullMenuOverlay'
import { GradesDropdown } from './GradesDropdown'
import { mockStudent } from '@/data/mockStudent'
import { cn } from '@/lib/utils'

interface TopNavProps {
  variant?: 'login' | 'portal'
  pageLabel?: string
}

const navItems = [
  { label: 'Registration', to: '/registration/schedule', hasDropdown: false },
  { label: 'Grades', to: '/grades/report', hasDropdown: true },
  { label: 'Finances', to: '/finances/balance', hasDropdown: false },
  { label: 'Search', to: '#', hasDropdown: false },
]

export function TopNav({ variant = 'portal', pageLabel }: TopNavProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [gradesOpen, setGradesOpen] = useState(false)

  const isLogin = variant === 'login'

  return (
    <>
      <header className="h-16 bg-white text-slate-800 flex items-center justify-between px-4 lg:px-6 shadow-sm border-b border-slate-200 relative z-40">
        <div className="flex items-center gap-3">
          <Link to={isLogin ? '/login' : '/dashboard'} className="flex items-center gap-3">
            <img
              src="/eru-logo.png"
              alt="Egyptian Russian University"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center">
          {!isLogin && (
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.to !== '#' && location.pathname.startsWith(item.to.replace(/#.*/, ''))
                return (
                  <div key={item.label} className="relative group">
                    {item.hasDropdown ? (
                      <button
                        onClick={() => setGradesOpen((v) => !v)}
                        className={cn(
                          'flex items-center px-4 py-5 text-sm font-semibold hover:bg-slate-50 transition border-b-4 border-transparent text-slate-600',
                          gradesOpen ? 'bg-slate-50 border-eru-600 text-eru-700' : isActive && 'border-eru-600 text-eru-700'
                        )}
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                    ) : (
                      <Link
                        to={item.to}
                        className={cn(
                          'block px-4 py-5 text-sm font-semibold hover:bg-slate-50 transition border-b-4 border-transparent text-slate-600',
                          isActive && 'border-eru-600 text-eru-700'
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                )
              })}
            </nav>
          )}
          {pageLabel && (
            <div className="text-sm font-semibold tracking-widest text-slate-600 lg:hidden">
              {pageLabel}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {!isLogin && (
            <>
              <button className="hidden sm:flex p-2 hover:bg-slate-100 rounded-full transition text-slate-600">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="hidden sm:flex p-2 hover:bg-slate-100 rounded-full transition text-slate-600">
                <User className="w-5 h-5" />
              </button>
              <span className="hidden md:inline text-sm font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                {mockStudent.name}
              </span>
            </>
          )}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 hover:bg-slate-100 rounded-full transition text-slate-700"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {gradesOpen && !menuOpen && (
        <GradesDropdown
          onClose={() => setGradesOpen(false)}
          onNavigate={(path: string) => {
            setGradesOpen(false)
            navigate(path)
          }}
        />
      )}

      {menuOpen && <FullMenuOverlay onClose={() => setMenuOpen(false)} />}
    </>
  )
}
