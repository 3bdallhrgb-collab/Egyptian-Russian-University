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
    <div className="bg-white rounded-md shadow-sm border border-slate-200 p-6 sm:p-8 md:p-10 max-w-4xl mx-auto print:shadow-none print:p-0 print:border-0">
      <div className="text-center border-b border-slate-200 pb-6 mb-6">
        <img src="/eru-logo.png" alt="ERU" className="h-16 w-auto mx-auto mb-3 object-contain" />
        <h2 className="text-xl font-bold text-slate-800">Unofficial Transcript</h2>
        <h3 className="text-lg font-semibold text-slate-700 mt-1">Egyptian Russian University</h3>
        <p className="text-sm text-slate-500 mt-1">Office of the Registrar</p>
        <p className="text-sm text-slate-500">{mockStudent.address}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-8 text-slate-700">
        <div>
          <p><span className="font-semibold">Name:</span> {mockStudent.fullName}</p>
          <p><span className="font-semibold">Student ID:</span> {mockStudent.studentId}</p>
          <p><span className="font-semibold">Program:</span> {mockStudent.program}</p>
        </div>
        <div>
          <p><span className="font-semibold">Degree:</span> {mockStudent.degree}</p>
          <p><span className="font-semibold">Curriculum:</span> {mockStudent.curriculum}</p>
          <p><span className="font-semibold">Cumulative GPA:</span> {overallGpa.toFixed(2)}</p>
        </div>
      </div>

      {transcriptTerms.map((term) => (
        <div key={term.term} className="mb-8">
          <h4 className="text-base font-bold text-slate-800 mb-3 pb-2 border-b border-slate-200">{term.term}</h4>
          <div className="overflow-x-auto rounded-md border border-slate-200 mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left text-slate-700 border-b border-slate-200">
                  <th className="py-2 px-3 font-semibold">Course</th>
                  <th className="py-2 px-3 font-semibold">Title</th>
                  <th className="py-2 px-3 font-semibold">Grade</th>
                  <th className="py-2 px-3 font-semibold">Credits</th>
                  <th className="py-2 px-3 font-semibold">Points</th>
                </tr>
              </thead>
              <tbody>
                {term.courses.map((c) => (
                  <tr key={c.course} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-2 px-3 font-medium">{c.course}</td>
                    <td className="py-2 px-3">{c.title}</td>
                    <td className="py-2 px-3">{c.finalGrade}</td>
                    <td className="py-2 px-3">{c.credits.toFixed(2)}</td>
                    <td className="py-2 px-3">{c.qualityPoints.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
              <div className="text-xs text-slate-500">Term Credits</div>
              <div className="font-semibold text-slate-800">{term.termCredits.toFixed(2)}</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
              <div className="text-xs text-slate-500">Term GPA</div>
              <div className="font-semibold text-slate-800">{term.termGpa.toFixed(2)}</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
              <div className="text-xs text-slate-500">Earned Credits</div>
              <div className="font-semibold text-slate-800">{term.termEarned.toFixed(2)}</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
              <div className="text-xs text-slate-500">Quality Points</div>
              <div className="font-semibold text-slate-800">{term.termQualityPoints.toFixed(2)}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-8 border-t border-slate-200 pt-4">
        <h4 className="text-base font-bold text-slate-800 mb-3">Overall Summary</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
            <div className="text-xs text-slate-500">Total Credits</div>
            <div className="font-semibold text-slate-800">{overallCredits.toFixed(2)}</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
            <div className="text-xs text-slate-500">Total Quality Points</div>
            <div className="font-semibold text-slate-800">{overall.qualityPoints.toFixed(2)}</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-md p-3">
            <div className="text-xs text-slate-500">Cumulative GPA</div>
            <div className="font-semibold text-slate-800">{overallGpa.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
