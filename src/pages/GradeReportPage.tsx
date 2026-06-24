import { AppShell } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { SelectBox } from '@/components/ui/SelectBox'
import { PrintLink } from '@/components/ui/PrintLink'
import { gradeReportRows, type GradeRow } from '@/data/mockGrades'
import { periodOptions } from '@/data/mockCourses'
import { mockStudent } from '@/data/mockStudent'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const sequenceOptions = ['001', '002', '003']

function gradeBadgeClass(grade: string) {
  if (grade.startsWith('A')) return 'bg-emerald-100 text-emerald-800 border-emerald-200'
  if (grade.startsWith('B')) return 'bg-cyan-100 text-cyan-800 border-cyan-200'
  if (grade.startsWith('C')) return 'bg-amber-100 text-amber-800 border-amber-200'
  if (grade.startsWith('D')) return 'bg-orange-100 text-orange-800 border-orange-200'
  return 'bg-red-100 text-red-800 border-red-200'
}

function resultBadgeClass(result: string) {
  return result === 'Pass' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-red-100 text-red-800 border-red-200'
}

function statusBadgeClass(status: string) {
  return status === 'Active' ? 'bg-slate-100 text-slate-700 border-slate-200' : 'bg-red-100 text-red-700 border-red-200'
}

function GradeRowView({ row }: { row: GradeRow }) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition text-xs sm:text-sm">
      <td className="py-2 sm:py-3 px-2 sm:px-4">
        <div className="font-semibold text-slate-800">{row.course}</div>
        <div className="text-[10px] sm:text-xs text-slate-500">{row.title}</div>
      </td>
      <td className="py-2 sm:py-3 px-2 sm:px-4">
        <span className={cn('inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded border text-[10px] sm:text-xs font-semibold', statusBadgeClass(row.status ?? 'Active'))}>
          {row.status === 'Active' ? 'نشط' : 'منسحب'}
        </span>
      </td>
      <td className="py-2 sm:py-3 px-2 sm:px-4 text-slate-700 font-medium">{row.credits.toFixed(1)}</td>
      <td className="py-2 sm:py-3 px-2 sm:px-4">
        <span className={cn('inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded border text-[10px] sm:text-xs font-semibold', resultBadgeClass(row.result ?? 'Pass'))}>
          {row.result === 'Pass' ? 'ناجح' : 'راسب'}
        </span>
      </td>
      <td className="py-2 sm:py-3 px-2 sm:px-4">
        <span className={cn('inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded border text-[10px] sm:text-xs font-semibold', gradeBadgeClass(row.finalGrade))}>
          {row.finalGrade}
        </span>
      </td>
    </tr>
  )
}

export default function GradeReportPage() {
  const [period, setPeriod] = useState(mockStudent.period)
  const [sequence, setSequence] = useState('001')

  const passed = mockStudent.passedCredits
  const termGpa = mockStudent.gpa.term
  const overallGpa = mockStudent.gpa.overall
  const totalHours = gradeReportRows.reduce((acc, r) => acc + r.credits, 0)

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-eru-900 tracking-tight">نتائج الفصل الدراسي</h1>
            <p className="text-sm text-slate-600 mt-1">
              {mockStudent.facultyAr} — العام الدراسي {mockStudent.academicYear} (فصل الربيع)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <PrintLink />
          </div>
        </div>

        <Card>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm leading-relaxed">
              <div>
                <span className="text-slate-500">الطالب:</span>{' '}
                <span className="font-semibold text-slate-800">{mockStudent.fullName}</span>
              </div>
              <div>
                <span className="text-slate-500">Student ID:</span>{' '}
                <span className="font-semibold text-slate-800">{mockStudent.studentId}</span>
              </div>
              <div>
                <span className="text-slate-500">الكلية:</span>{' '}
                <span className="font-semibold text-slate-800">{mockStudent.facultyAr}</span>
              </div>
              <div>
                <span className="text-slate-500">المستوى:</span>{' '}
                <span className="font-semibold text-slate-800">{mockStudent.year}</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-600">الفصل</span>
                <SelectBox value={period} options={periodOptions} onChange={setPeriod} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-600">Sequence</span>
                <SelectBox value={sequence} options={sequenceOptions} onChange={setSequence} />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white rounded-md border-t-4 border-eru-600 shadow-sm p-4 sm:p-5 text-center">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">المعدل الفصلي GPA</div>
            <div className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-slate-800">{termGpa.toFixed(2)}</div>
          </div>
          <div className="bg-white rounded-md border-t-4 border-eru-500 shadow-sm p-4 sm:p-5 text-center">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">المعدل التراكمي CGPA</div>
            <div className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-slate-800">{overallGpa.toFixed(2)}</div>
          </div>
          <div className="bg-white rounded-md border-t-4 border-gold shadow-sm p-4 sm:p-5 text-center">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">الساعات المجتازة Passed CH</div>
            <div className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-slate-800">{passed.toFixed(1)}</div>
          </div>
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-eru-50 text-xs sm:text-sm text-eru-900 border-b border-eru-100">
                  <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Course</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Status</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold">CH</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Result</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Grade</th>
                </tr>
              </thead>
              <tbody>
                {gradeReportRows.map((row) => (
                  <GradeRowView key={row.course} row={row} />
                ))}
                <tr className="bg-slate-50 font-semibold text-slate-800 text-xs sm:text-sm">
                  <td className="py-2 sm:py-3 px-2 sm:px-4" colSpan={2}>Total CH</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">{totalHours.toFixed(1)}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4" colSpan={2}></td>
                </tr>
              </tbody>
            </table>
          </div>
          {gradeReportRows.length === 0 && (
            <div className="py-8 text-center text-sm text-slate-500">
              لا توجد نتائج للفصل المحدد.
            </div>
          )}
        </Card>

      </div>
    </AppShell>
  )
}
