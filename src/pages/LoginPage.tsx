import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { mockStudent } from '@/data/mockStudent'

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
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-card border border-slate-100 p-8">
            <h1 className="text-2xl font-bold text-eru-900 mb-6">Sign In</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                    setError('')
                  }}
                  placeholder="Enter your username"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-eru-500 focus:border-eru-500"
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
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-eru-500 focus:border-eru-500"
                />
              </div>
              {error && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-eru-800 to-eru-700 hover:from-eru-900 hover:to-eru-800 text-white font-semibold py-2.5 rounded-lg transition shadow"
              >
                NEXT
              </button>
            </form>
          </div>
          <div className="mt-8 text-center text-sm text-slate-600">
            <p>Egyptian Russian University Self-Service Portal</p>
            <p className="mt-1 text-xs">{mockStudent.university} | {mockStudent.universityAr}</p>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
