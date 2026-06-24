export const mockStudent = {
  name: 'Tasnem',
  fullName: 'Tasnem Mohamed Rafat Ahmed Mohamed',
  email: '256323@eru.edu.eg',
  university: 'Egyptian Russian University',
  universityAr: 'الجامعة المصرية الروسية',
  faculty: 'Clinical Pharmacy',
  facultyAr: 'كلية الصيدلة الإكلينيكية',
  program: 'Clinical Pharmacy',
  degree: 'Bachelor of Pharmacy',
  curriculum: 'Bachelor of Pharmacy',
  year: 'Year One',
  studentId: '256323',
  period: '2025/SPRING',
  academicYear: '2025/2026',
  advisor: 'Ahmed Abdelsamea',
  gpa: {
    term: 1.67,
    overall: 1.67,
  },
  passedCredits: 18.0,
  degreeAwarded: 'Not yet granted',
  dateGranted: 'Not yet granted',
  address: 'Cairo, Arab Republic of Egypt',
}

export type Student = typeof mockStudent
