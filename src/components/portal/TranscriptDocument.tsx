import { transcriptTerms } from '@/data/mockGrades'
import { mockStudent } from '@/data/mockStudent'

export function TranscriptDocument() {
  const overall = transcriptTerms.reduce(
    (acc, term) => {
      acc.qualityPoints += term.termQualityPoints
      return acc
    },
    { qualityPoints: 0 }
  )

  const overallCredits = transcriptTerms.reduce((acc, t) => acc + t.termCredits, 0)
  const overallGpa = overallCredits > 0 ? overall.qualityPoints / overallCredits : 0

  return (
    <div className="bg-white rounded-none shadow-none border border-black p-5 sm:p-8 md:p-10 max-w-4xl mx-auto print:shadow-none print:p-0 print:border-0">
      <div className="text-center border-b-2 border-black pb-5 mb-5">
        <img src="/eru-logo.png" alt="ERU" className="h-14 sm:h-16 w-auto mx-auto mb-3 object-contain" />
        <h2 className="text-lg sm:text-xl font-bold text-black uppercase tracking-wide">Unofficial Transcript</h2>
        <h3 className="text-base sm:text-lg font-semibold text-black mt-1">Egyptian Russian University / الجامعة المصرية الروسية</h3>
        <p className="text-xs sm:text-sm text-black mt-1">Office of the Registrar / مكتب الشؤون الأكاديمية</p>
        <p className="text-xs sm:text-sm text-black">{mockStudent.address}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mb-6 sm:mb-8 text-black">
        <div className="space-y-1">
          <p><span className="font-semibold">Student Name / اسم الطالب:</span> {mockStudent.fullName}</p>
          <p><span className="font-semibold">Student ID / الرقم الجامعي:</span> {mockStudent.studentId}</p>
          <p><span className="font-semibold">Program / البرنامج:</span> {mockStudent.program}</p>
        </div>
        <div className="space-y-1">
          <p><span className="font-semibold">Degree / الدرجة:</span> {mockStudent.degree}</p>
          <p><span className="font-semibold">Faculty / الكلية:</span> {mockStudent.faculty}</p>
          <p><span className="font-semibold">Cumulative GPA / المعدل التراكمي:</span> {overallGpa.toFixed(2)}</p>
        </div>
      </div>

      {transcriptTerms.map((term) => (
        <div key={term.term} className="mb-8">
          <h4 className="text-base font-bold text-black mb-3 pb-2 border-b border-black">Academic Term / الفصل الدراسي: {term.term}</h4>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-black">
              <thead>
                <tr className="bg-slate-100 text-left text-black border-b border-black">
                  <th className="py-2 px-3 font-semibold border-r border-black">Course / المقرر</th>
                  <th className="py-2 px-3 font-semibold border-r border-black">Title / اسم المقرر</th>
                  <th className="py-2 px-3 font-semibold border-r border-black">Grade / التقدير</th>
                  <th className="py-2 px-3 font-semibold border-r border-black">Credits / الساعات</th>
                  <th className="py-2 px-3 font-semibold">Points / النقاط</th>
                </tr>
              </thead>
              <tbody>
                {term.courses.map((c) => (
                  <tr key={c.course} className="border-b border-black">
                    <td className="py-2 px-3 border-r border-black font-medium">{c.course}</td>
                    <td className="py-2 px-3 border-r border-black">{c.title}</td>
                    <td className="py-2 px-3 border-r border-black">{c.finalGrade}</td>
                    <td className="py-2 px-3 border-r border-black">{c.credits.toFixed(2)}</td>
                    <td className="py-2 px-3">{c.qualityPoints.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm">
            <div className="border border-black p-2 sm:p-3">
              <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Term Credits<br />ساعات الفصل</div>
              <div className="font-bold text-black mt-0.5">{term.termCredits.toFixed(2)}</div>
            </div>
            <div className="border border-black p-2 sm:p-3">
              <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Term GPA<br />المعدل الفصلي</div>
              <div className="font-bold text-black mt-0.5">{term.termGpa.toFixed(2)}</div>
            </div>
            <div className="border border-black p-2 sm:p-3">
              <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Earned Credits<br />الساعات المكتسبة</div>
              <div className="font-bold text-black mt-0.5">{term.termEarned.toFixed(2)}</div>
            </div>
            <div className="border border-black p-2 sm:p-3">
              <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Quality Points<br />نقاط الجودة</div>
              <div className="font-bold text-black mt-0.5">{term.termQualityPoints.toFixed(2)}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-6 sm:mt-8 border-t-2 border-black pt-4">
        <h4 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">Overall Summary / المجموع العام</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
          <div className="border border-black p-2 sm:p-3">
            <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Total Credits<br />إجمالي الساعات</div>
            <div className="font-bold text-black mt-0.5">{overallCredits.toFixed(2)}</div>
          </div>
          <div className="border border-black p-2 sm:p-3">
            <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Total Quality Points<br />إجمالي النقاط</div>
            <div className="font-bold text-black mt-0.5">{overall.qualityPoints.toFixed(2)}</div>
          </div>
          <div className="border border-black p-2 sm:p-3">
            <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Cumulative GPA<br />المعدل التراكمي</div>
            <div className="font-bold text-black mt-0.5">{overallGpa.toFixed(2)}</div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-black">
        <p>This is an unofficial transcript issued for student reference only.</p>
        <p>هذه نسخة غير رسمية من السجل الأكاديمي للاطلاع الطالب فقط.</p>
      </div>
    </div>
  )
}
