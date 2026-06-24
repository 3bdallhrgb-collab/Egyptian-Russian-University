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
    <div className="bg-white rounded-lg shadow-card border border-slate-100 p-8 md:p-12 max-w-4xl mx-auto print:shadow-none print:p-0 print:border-0">
      <div className="text-center border-b border-slate-300 pb-6 mb-6">
        <h2 className="text-xl font-bold text-eru-900">Unofficial Transcript</h2>
        <h3 className="text-lg font-semibold text-slate-800 mt-1">Egyptian Russian University</h3>
        <p className="text-sm text-slate-600 mt-1">Office of the Registrar</p>
        <p className="text-sm text-slate-600">{mockStudent.address}</p>
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
          <p><span className="font-semibold">Cumulative GPA:</span> {overallGpa.toFixed(4)}</p>
        </div>
      </div>

      {transcriptTerms.map((term) => (
        <div key={term.term} className="mb-8">
          <h4 className="text-base font-bold text-eru-900 mb-3">{term.term}</h4>
          <table className="w-full text-sm border-t border-b border-slate-300">
            <thead>
              <tr className="bg-slate-50 text-left text-slate-700">
                <th className="py-2 px-3 font-semibold border-b border-slate-200">Course</th>
                <th className="py-2 px-3 font-semibold border-b border-slate-200">Title</th>
                <th className="py-2 px-3 font-semibold border-b border-slate-200">Subtype</th>
                <th className="py-2 px-3 font-semibold border-b border-slate-200">Grade</th>
                <th className="py-2 px-3 font-semibold border-b border-slate-200">Credits</th>
                <th className="py-2 px-3 font-semibold border-b border-slate-200">Quality Points</th>
              </tr>
            </thead>
            <tbody>
              {term.courses.map((c) => (
                <tr key={c.course} className="border-b border-slate-100">
                  <td className="py-2 px-3">{c.course}</td>
                  <td className="py-2 px-3">{c.title}</td>
                  <td className="py-2 px-3">Lecture</td>
                  <td className="py-2 px-3">{c.finalGrade}</td>
                  <td className="py-2 px-3">{c.credits.toFixed(2)}</td>
                  <td className="py-2 px-3">{c.qualityPoints.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <table className="w-full border border-slate-200">
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-1.5 px-3 font-semibold bg-slate-50">Term Credits</td>
                  <td className="py-1.5 px-3">{term.termCredits.toFixed(2)}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-1.5 px-3 font-semibold bg-slate-50">Term GPA</td>
                  <td className="py-1.5 px-3">{term.termGpa.toFixed(4)}</td>
                </tr>
                {term.awards && term.awards.length > 0 && (
                  <tr>
                    <td className="py-1.5 px-3 font-semibold bg-slate-50">Awards</td>
                    <td className="py-1.5 px-3">{term.awards.join(', ')}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div className="mt-8 border-t border-slate-300 pt-4">
        <h4 className="text-base font-bold text-eru-900 mb-2">Overall Summary</h4>
        <table className="w-full text-sm border border-slate-200">
          <tbody>
            <tr className="border-b border-slate-200">
              <td className="py-1.5 px-3 font-semibold bg-slate-50">Total Credits</td>
              <td className="py-1.5 px-3">{overallCredits.toFixed(2)}</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-1.5 px-3 font-semibold bg-slate-50">Total Quality Points</td>
              <td className="py-1.5 px-3">{overall.qualityPoints.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="py-1.5 px-3 font-semibold bg-slate-50">Cumulative GPA</td>
              <td className="py-1.5 px-3">{overallGpa.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
