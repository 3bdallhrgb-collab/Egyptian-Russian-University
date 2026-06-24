import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'

export default function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === '256323@eru.edu.eg' && password === '1234') {
      setError('')
      navigate('/dashboard')
    } else {
      setError('Invalid username or password.')
    }
  }

  return (
    <AppShell variant="login" pageLabel="ADMISSIONS" hideFooter>
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-md shadow-card border border-slate-200 p-6 sm:p-8">
            <div className="flex flex-col items-center mb-8">
              <img
                src="/eru-logo.png"
                alt="Egyptian Russian University"
                className="h-20 w-auto object-contain mb-4"
              />
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800 text-center">
                Egyptian Russian University
              </h1>
              <p className="text-sm text-slate-500 text-center mt-1">
                الجامعة المصرية الروسية
              </p>
              <p className="text-sm text-slate-600 text-center mt-3 font-medium">
                Student Self-Service Portal
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">
                  Email / Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                    setError('')
                  }}
                  placeholder="256323@eru.edu.eg"
                  className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-eru-600 focus:border-eru-600 bg-slate-50"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                  }}
                  placeholder="Enter your password"
                  className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-eru-600 focus:border-eru-600 bg-slate-50"
                />
              </div>
              {error && (
                <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-eru-700 hover:bg-eru-800 text-white font-semibold py-2.5 rounded-md transition shadow-sm"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
              <p>Authorized access only. All activity is monitored.</p>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-slate-500">
            <p>Egyptian Russian University Self-Service Portal</p>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
