export interface Subject {
  code: string;
  name: string;
  credits: number;
}

export interface Student {
  id: string;           // STU-1042
  slug: string;         // aarav-mehta
  name: string;
  initials: string;
  avatarBg?: string;
  avatarColor?: string;
  department: string;
  departmentSlug: string;
  year: string;
  status: 'Active Student' | 'Graduated' | 'On Leave';
  email: string;
  enrolled: string;
  about: string;
  academicStanding: string;
  specialization: string;
  specializationSlug: string;
  specializationTrack: string;
  enrolledSubjects: Subject[];
}

export interface Specialization {
  name: string;
  slug: string;
  code: string;
  description: string;
  academicLead: string;
  primaryLab: string;
  totalEnrollment: number;
  curriculumCycle: string;
  studentIds: string[];
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  description: string;
  specializationsCount: number;
  enrolledStudentsCount: number;
  specializations: Specialization[];
}
