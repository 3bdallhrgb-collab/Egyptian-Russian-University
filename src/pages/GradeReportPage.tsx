import { AppShell } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { SelectBox } from '@/components/ui/SelectBox'
import { PrintLink } from '@/components/ui/PrintLink'
import { gradeReportRows, type GradeRow } from '@/data/mockGrades'
import { periodOptions } from '@/data/mockCourses'
import { mockStudent } from '@/data/mockStudent'
import { useState } from 'react'

const sequenceOptions = ['001', '002', '003']

function GradeRowView({ row }: { row: GradeRow }) {
  return (
    <tr className="border-b border-black text-xs sm:text-sm">
      <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-black">
        <div className="font-semibold text-black">{row.course}</div>
        <div className="text-[10px] sm:text-xs text-slate-600">{row.title}</div>
      </td>
      <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-black text-black">
        {row.status === 'Active' ? 'Active / نشط' : 'Withdrawn / منسحب'}
      </td>
      <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-black text-black font-medium">{row.credits.toFixed(1)}</td>
      <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-black text-black">
        {row.result === 'Pass' ? 'Pass / ناجح' : 'Fail / راسب'}
      </td>
      <td className="py-2 sm:py-3 px-2 sm:px-4 text-black font-semibold">{row.finalGrade}</td>
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black">Grade Report / تقرير الدرجات</h1>
            <p className="text-sm text-slate-600 mt-1">
              {mockStudent.facultyAr} — Academic Year {mockStudent.academicYear} (Spring)
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
                <span className="text-slate-500">Student Name / اسم الطالب:</span>{' '}
                <span className="font-semibold text-black">{mockStudent.fullName}</span>
              </div>
              <div>
                <span className="text-slate-500">Student ID / الرقم الجامعي:</span>{' '}
                <span className="font-semibold text-black">{mockStudent.studentId}</span>
              </div>
              <div>
                <span className="text-slate-500">Faculty / الكلية:</span>{' '}
                <span className="font-semibold text-black">{mockStudent.facultyAr}</span>
              </div>
              <div>
                <span className="text-slate-500">Level / المستوى:</span>{' '}
                <span className="font-semibold text-black">{mockStudent.year}</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-600">Period / الفصل</span>
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
          <div className="bg-white border border-black p-4 sm:p-5 text-center">
            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Term GPA / المعدل الفصلي</div>
            <div className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-black">{termGpa.toFixed(2)}</div>
          </div>
          <div className="bg-white border border-black p-4 sm:p-5 text-center">
            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">CGPA / المعدل التراكمي</div>
            <div className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-black">{overallGpa.toFixed(2)}</div>
          </div>
          <div className="bg-white border border-black p-4 sm:p-5 text-center">
            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Passed CH / الساعات المجتازة</div>
            <div className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-black">{passed.toFixed(1)}</div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border border-black">
            <thead>
              <tr className="bg-slate-100 text-xs sm:text-sm text-black border-b border-black">
                <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold border-r border-black">Course / المقرر</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold border-r border-black">Status / الحالة</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold border-r border-black">Credits / الساعات</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold border-r border-black">Result / النتيجة</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Grade / التقدير</th>
              </tr>
            </thead>
            <tbody>
              {gradeReportRows.map((row) => (
                <GradeRowView key={row.course} row={row} />
              ))}
              <tr className="bg-slate-100 font-semibold text-black text-xs sm:text-sm border-t-2 border-black">
                <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-black" colSpan={2}>Total / الإجمالي</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-black">{totalHours.toFixed(1)}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-black"></td>
                <td className="py-2 sm:py-3 px-2 sm:px-4"></td>
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
