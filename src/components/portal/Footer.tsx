import { mockStudent } from '@/data/mockStudent'

export function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-slate-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm text-slate-500">
        <div>
          <p className="font-medium text-slate-700">Egyptian Russian University Self-Service Portal</p>
          <p className="mt-0.5 text-xs">{mockStudent.universityAr}</p>
        </div>
        <p className="text-xs">
          {mockStudent.fullName} <span className="mx-1">|</span> {mockStudent.studentId}
        </p>
      </div>
    </footer>
  )
}
