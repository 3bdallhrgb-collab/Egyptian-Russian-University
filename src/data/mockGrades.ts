export interface GradeRow {
  course: string
  title: string
  credits: number
  qualityPoints: number
  projectedGrade: string
  finalGrade: string
  status?: string
  result?: string
}

export interface TermRecord {
  term: string
  courses: GradeRow[]
  termGpa: number
  termCredits: number
  termAttempted: number
  termEarned: number
  termQualityPoints: number
  awards?: string[]
}

export const gradeReportRows: GradeRow[] = [
  {
    course: 'MD202',
    title: 'Anatomy & Histology',
    credits: 2.0,
    qualityPoints: 2.0,
    projectedGrade: 'C',
    finalGrade: 'C',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'MD203',
    title: 'Psychology',
    credits: 4.0,
    qualityPoints: 4.0,
    projectedGrade: 'D',
    finalGrade: 'D',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'PB201',
    title: 'Cell Biology',
    credits: 4.0,
    qualityPoints: 4.0,
    projectedGrade: 'D+',
    finalGrade: 'D+',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'PC101',
    title: 'Pharmaceutical Analytical Chemistry I',
    credits: 1.0,
    qualityPoints: 1.0,
    projectedGrade: 'B',
    finalGrade: 'B',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'PC102',
    title: 'Pharmaceutical Organic Chemistry I',
    credits: 2.0,
    qualityPoints: 2.0,
    projectedGrade: 'C',
    finalGrade: 'C',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'PG101',
    title: 'Medicinal Plants',
    credits: 3.0,
    qualityPoints: 3.0,
    projectedGrade: 'C',
    finalGrade: 'C',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'PT202',
    title: 'Physical Pharmacy',
    credits: 2.0,
    qualityPoints: 0.0,
    projectedGrade: 'FW',
    finalGrade: 'FW',
    status: 'Withdrawn',
    result: 'Fail',
  },
]

export const transcriptTerms: TermRecord[] = [
  {
    term: '2025 Spring',
    courses: [
      { course: 'MD202', title: 'Anatomy & Histology', credits: 2, qualityPoints: 2, projectedGrade: 'C', finalGrade: 'C', status: 'Active', result: 'Pass' },
      { course: 'MD203', title: 'Psychology', credits: 4, qualityPoints: 4, projectedGrade: 'D', finalGrade: 'D', status: 'Active', result: 'Pass' },
      { course: 'PB201', title: 'Cell Biology', credits: 4, qualityPoints: 4, projectedGrade: 'D+', finalGrade: 'D+', status: 'Active', result: 'Pass' },
      { course: 'PC101', title: 'Pharmaceutical Analytical Chemistry I', credits: 1, qualityPoints: 1, projectedGrade: 'B', finalGrade: 'B', status: 'Active', result: 'Pass' },
      { course: 'PC102', title: 'Pharmaceutical Organic Chemistry I', credits: 2, qualityPoints: 2, projectedGrade: 'C', finalGrade: 'C', status: 'Active', result: 'Pass' },
      { course: 'PG101', title: 'Medicinal Plants', credits: 3, qualityPoints: 3, projectedGrade: 'C', finalGrade: 'C', status: 'Active', result: 'Pass' },
      { course: 'PT202', title: 'Physical Pharmacy', credits: 2, qualityPoints: 0, projectedGrade: 'FW', finalGrade: 'FW', status: 'Withdrawn', result: 'Fail' },
    ],
    termGpa: 1.67,
    termCredits: 18,
    termAttempted: 18,
    termEarned: 18,
    termQualityPoints: 30.06,
    awards: [],
  },
]
