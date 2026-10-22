import { notFound } from 'next/navigation';
import Link from 'next/link';
import { STUDENTS } from '@/data/students';

export async function generateStaticParams() {
  return STUDENTS.map((s) => ({ id: s.slug }));
}

export default function StudentProfilePage({ params }: { params: { id: string } }) {
  const student = STUDENTS.find((s) => s.slug === params.id);
  if (!student) notFound();

  const totalCredits = student.enrolledSubjects.reduce((sum, s) => sum + s.credits, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/students" className="hover:text-blue-600 transition">Students</Link>
        <span>/</span>
        <span className="text-slate-600">{student.name}</span>
      </nav>

      {/* Profile header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-5">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shrink-0"
          style={{ backgroundColor: student.avatarBg, color: student.avatarColor }}
        >
          {student.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{student.name}</h1>
              <p className="text-slate-500 text-sm mt-0.5">{student.department} · {student.year}</p>
            </div>
            <span className={`text-xs px-3 py-1 rounded-full border ${
              student.status === 'Active Student'
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'bg-slate-50 text-slate-500 border-slate-200'
            }`}>
              {student.status}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
            <span>{student.id}</span>
            <span>·</span>
            <a href={`mailto:${student.email}`} className="hover:text-blue-600 transition">{student.email}</a>
            <span>·</span>
            <span>Enrolled {student.enrolled}</span>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
        <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">About</h2>
        <p className="text-slate-600 text-sm leading-relaxed">{student.about}</p>
      </div>

      {/* Academic standing */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
        <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Academic Standing</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-slate-400 mb-1">Standing</p>
            <p className="text-sm font-medium text-slate-800">{student.academicStanding}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Specialization</p>
            <Link
              href={`/departments/${student.departmentSlug}/${student.specializationSlug}`}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition"
            >
              {student.specialization}
            </Link>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Track Code</p>
            <p className="text-sm font-medium text-slate-800 font-mono">{student.specializationTrack}</p>
          </div>
        </div>
      </div>

      {/* Enrolled subjects */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Enrolled Subjects</h2>
          <span className="text-xs text-slate-400">{totalCredits.toFixed(1)} total credits</span>
        </div>
        <div className="divide-y divide-slate-100">
          {student.enrolledSubjects.map((subject) => (
            <div key={subject.code} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-slate-800">{subject.name}</p>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">{subject.code}</p>
              </div>
              <span className="text-sm font-semibold text-slate-600 shrink-0 ml-4">
                {subject.credits} cr
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
