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
    term: '2024 Fall',
    courses: [
      { course: 'MATH 101', title: 'Calculus I', credits: 3, qualityPoints: 6, projectedGrade: 'C', finalGrade: 'C' },
      { course: 'CSAI 101', title: 'Introduction to Computer Science', credits: 3, qualityPoints: 0, projectedGrade: 'F', finalGrade: 'F' },
      { course: 'DSAI 101', title: 'Introduction to Artificial Intelligence', credits: 3, qualityPoints: 6, projectedGrade: 'C', finalGrade: 'C' },
      { course: 'ENG 101', title: 'English I', credits: 2, qualityPoints: 8, projectedGrade: 'B', finalGrade: 'B' },
    ],
    termGpa: 1.64,
    termCredits: 11,
    termAttempted: 11,
    termEarned: 8,
    termQualityPoints: 20,
    awards: ['Probation'],
  },
  {
    term: '2025 Spring',
    courses: [
      { course: 'MATH 102', title: 'Calculus II', credits: 3, qualityPoints: 3, projectedGrade: 'D', finalGrade: 'D' },
      { course: 'CSAI 102', title: 'Programming Fundamentals', credits: 3, qualityPoints: 6, projectedGrade: 'C', finalGrade: 'C' },
      { course: 'DSAI 102', title: 'Machine Learning Basics', credits: 3, qualityPoints: 0, projectedGrade: 'F', finalGrade: 'F' },
      { course: 'ENG 102', title: 'English II', credits: 2, qualityPoints: 6, projectedGrade: 'C', finalGrade: 'C' },
    ],
    termGpa: 0.82,
    termCredits: 11,
    termAttempted: 11,
    termEarned: 8,
    termQualityPoints: 15,
  },
]
