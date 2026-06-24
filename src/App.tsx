import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import SchedulePage from './pages/SchedulePage'
import GradeReportPage from './pages/GradeReportPage'
import TranscriptPage from './pages/TranscriptPage'
import BalancePage from './pages/BalancePage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/registration/schedule" element={<SchedulePage />} />
      <Route path="/grades/report" element={<GradeReportPage />} />
      <Route path="/grades/transcript" element={<TranscriptPage />} />
      <Route path="/finances/balance" element={<BalancePage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
