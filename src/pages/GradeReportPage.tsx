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
      <td className="py-2 sm:py-2.5 px-2 sm:px-3 border-r border-black align-top">
        <div className="font-bold text-black leading-tight">{row.course}</div>
        <div className="text-[10px] sm:text-[11px] text-slate-600 leading-tight mt-0.5">{row.title}</div>
      </td>
      <td className="py-2 sm:py-2.5 px-2 sm:px-3 border-r border-black text-black align-top whitespace-nowrap">
        {row.status === 'Active' ? 'Active / نشط' : 'Withdrawn / منسحب'}
      </td>
      <td className="py-2 sm:py-2.5 px-2 sm:px-3 border-r border-black text-black font-semibold align-top text-center">{row.credits.toFixed(1)}</td>
      <td className="py-2 sm:py-2.5 px-2 sm:px-3 border-r border-black text-black align-top whitespace-nowrap">
        {row.result === 'Pass' ? 'Pass / ناجح' : 'Fail / راسب'}
      </td>
      <td className="py-2 sm:py-2.5 px-2 sm:px-3 text-black font-bold align-top text-center">{row.finalGrade}</td>
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
      <div className="space-y-5 print:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-200 print:border-b-2 print:border-black">
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-black">Grade Report / تقرير الدرجات</h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {mockStudent.facultyAr} — Academic Year {mockStudent.academicYear} (Spring / ربيع)
            </p>
          </div>
          <div className="flex items-center gap-2 print:hidden">
            <PrintLink />
          </div>
        </div>

        <Card>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm leading-relaxed">
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
            <div className="flex flex-wrap items-center gap-3 print:hidden">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-medium text-slate-600">Period / الفصل</span>
                <SelectBox value={period} options={periodOptions} onChange={setPeriod} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-medium text-slate-600">Sequence</span>
                <SelectBox value={sequence} options={sequenceOptions} onChange={setSequence} />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-white border border-black p-3 sm:p-4 text-center">
            <div className="text-[10px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wide leading-tight">Term GPA<br /><span className="normal-case">المعدل الفصلي</span></div>
            <div className="mt-1 text-xl sm:text-2xl font-bold text-black">{termGpa.toFixed(2)}</div>
          </div>
          <div className="bg-white border border-black p-3 sm:p-4 text-center">
            <div className="text-[10px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wide leading-tight">CGPA<br /><span className="normal-case">المعدل التراكمي</span></div>
            <div className="mt-1 text-xl sm:text-2xl font-bold text-black">{overallGpa.toFixed(2)}</div>
          </div>
          <div className="bg-white border border-black p-3 sm:p-4 text-center">
            <div className="text-[10px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wide leading-tight">Passed CH<br /><span className="normal-case">الساعات المجتازة</span></div>
            <div className="mt-1 text-xl sm:text-2xl font-bold text-black">{passed.toFixed(1)}</div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border border-black text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 text-black border-b border-black">
                <th className="py-2 sm:py-2.5 px-2 sm:px-3 font-bold border-r border-black">Course<br /><span className="font-normal text-slate-600">المقرر</span></th>
                <th className="py-2 sm:py-2.5 px-2 sm:px-3 font-bold border-r border-black">Status<br /><span className="font-normal text-slate-600">الحالة</span></th>
                <th className="py-2 sm:py-2.5 px-2 sm:px-3 font-bold border-r border-black text-center">Credits<br /><span className="font-normal text-slate-600">الساعات</span></th>
                <th className="py-2 sm:py-2.5 px-2 sm:px-3 font-bold border-r border-black">Result<br /><span className="font-normal text-slate-600">النتيجة</span></th>
                <th className="py-2 sm:py-2.5 px-2 sm:px-3 font-bold text-center">Grade<br /><span className="font-normal text-slate-600">التقدير</span></th>
              </tr>
            </thead>
            <tbody>
              {gradeReportRows.map((row) => (
                <GradeRowView key={row.course} row={row} />
              ))}
              <tr className="bg-slate-100 font-bold text-black border-t-2 border-black">
                <td className="py-2 sm:py-2.5 px-2 sm:px-3 border-r border-black" colSpan={2}>Total / الإجمالي</td>
                <td className="py-2 sm:py-2.5 px-2 sm:px-3 border-r border-black text-center">{totalHours.toFixed(1)}</td>
                <td className="py-2 sm:py-2.5 px-2 sm:px-3 border-r border-black"></td>
                <td className="py-2 sm:py-2.5 px-2 sm:px-3"></td>
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
