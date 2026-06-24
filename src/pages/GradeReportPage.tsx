import { AppShell } from '@/components/layout/AppShell'
import { SelectBox } from '@/components/ui/SelectBox'
import { PrintLink } from '@/components/ui/PrintLink'
import { gradeReportRows, type GradeRow } from '@/data/mockGrades'
import { periodOptions } from '@/data/mockCourses'
import { mockStudent } from '@/data/mockStudent'
import { useState } from 'react'

const sequenceOptions = ['001', '002', '003']

function GradeRowView({ row, index }: { row: GradeRow; index: number }) {
  return (
    <tr className={`border-b border-slate-100 text-xs sm:text-sm ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
      <td className="py-2.5 px-3 sm:px-4 align-top">
        <div className="font-semibold text-slate-900 text-[11px] sm:text-sm">{row.course}</div>
        <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">{row.title}</div>
      </td>
      <td className="py-2.5 px-3 sm:px-4 text-slate-700 align-top whitespace-nowrap">
        <span className={`text-[10px] sm:text-xs font-medium ${row.status === 'Active' ? 'text-emerald-700' : 'text-slate-500'}`}>
          {row.status === 'Active' ? 'Active / نشط' : 'Withdrawn / منسحب'}
        </span>
      </td>
      <td className="py-2.5 px-3 sm:px-4 text-slate-700 font-semibold align-top text-center">{row.credits.toFixed(1)}</td>
      <td className="py-2.5 px-3 sm:px-4 text-slate-700 align-top whitespace-nowrap">
        <span className={`text-[10px] sm:text-xs font-medium ${row.result === 'Pass' ? 'text-emerald-700' : 'text-red-600'}`}>
          {row.result === 'Pass' ? 'Pass / ناجح' : 'Fail / راسب'}
        </span>
      </td>
      <td className="py-2.5 px-3 sm:px-4 text-slate-900 font-bold align-top text-center">{row.finalGrade}</td>
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
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200">
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900">Grade Report / تقرير الدرجات</h1>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              {mockStudent.facultyAr} — {mockStudent.academicYear} (Spring)
            </p>
          </div>
          <div className="flex items-center gap-2 print:hidden">
            <PrintLink />
          </div>
        </div>

        {/* Student Info Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-md p-3 sm:p-4 mb-4 text-[11px] sm:text-sm">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-1 gap-x-6">
            <div><span className="text-slate-500">Name:</span> <span className="font-semibold text-slate-900">{mockStudent.fullName}</span></div>
            <div><span className="text-slate-500">ID:</span> <span className="font-semibold text-slate-900">{mockStudent.studentId}</span></div>
            <div><span className="text-slate-500">Faculty:</span> <span className="font-semibold text-slate-900">{mockStudent.facultyAr}</span></div>
            <div><span className="text-slate-500">Level:</span> <span className="font-semibold text-slate-900">{mockStudent.year}</span></div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-2 pt-2 border-t border-slate-200 print:hidden">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Period:</span>
              <SelectBox value={period} options={periodOptions} onChange={setPeriod} />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Seq:</span>
              <SelectBox value={sequence} options={sequenceOptions} onChange={setSequence} />
            </div>
          </div>
        </div>

        {/* Compact Stats */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded px-3 py-1.5">
            <span className="text-slate-500">Term GPA / المعدل الفصلي:</span>
            <span className="font-bold text-slate-900">{termGpa.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded px-3 py-1.5">
            <span className="text-slate-500">CGPA / التراكمي:</span>
            <span className="font-bold text-slate-900">{overallGpa.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded px-3 py-1.5">
            <span className="text-slate-500">Passed CH / الساعات:</span>
            <span className="font-bold text-slate-900">{passed.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded px-3 py-1.5">
            <span className="text-slate-500">Total CH / إجمالي الساعات:</span>
            <span className="font-bold text-slate-900">{totalHours.toFixed(1)}</span>
          </div>
        </div>

        {/* Grades Table */}
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <th className="py-2.5 px-3 sm:px-4 font-semibold text-[10px] sm:text-xs">Course / المقرر</th>
                <th className="py-2.5 px-3 sm:px-4 font-semibold text-[10px] sm:text-xs">Status / الحالة</th>
                <th className="py-2.5 px-3 sm:px-4 font-semibold text-[10px] sm:text-xs text-center">CH / الساعات</th>
                <th className="py-2.5 px-3 sm:px-4 font-semibold text-[10px] sm:text-xs">Result / النتيجة</th>
                <th className="py-2.5 px-3 sm:px-4 font-semibold text-[10px] sm:text-xs text-center">Grade / التقدير</th>
              </tr>
            </thead>
            <tbody>
              {gradeReportRows.map((row, i) => (
                <GradeRowView key={row.course} row={row} index={i} />
              ))}
              <tr className="bg-slate-100 font-bold text-slate-900 border-t border-slate-300">
                <td className="py-2.5 px-3 sm:px-4" colSpan={2}>Total / الإجمالي</td>
                <td className="py-2.5 px-3 sm:px-4 text-center">{totalHours.toFixed(1)}</td>
                <td className="py-2.5 px-3 sm:px-4"></td>
                <td className="py-2.5 px-3 sm:px-4"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {gradeReportRows.length === 0 && (
          <div className="py-8 text-center text-sm text-slate-500">
            No grades found for the selected period.
          </div>
        )}
      </div>
    </AppShell>
  )
}
