import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DEPARTMENTS, STUDENTS } from '@/data/students';

export async function generateStaticParams() {
  const paths: { dept: string; specialization: string }[] = [];
  DEPARTMENTS.forEach((dept) => {
    dept.specializations.forEach((spec) => {
      paths.push({ dept: dept.slug, specialization: spec.slug });
    });
  });
  return paths;
}

export default function SpecializationPage({
  params,
}: {
  params: { dept: string; specialization: string };
}) {
  const department = DEPARTMENTS.find((d) => d.slug === params.dept);
  if (!department) notFound();

  const specialization = department.specializations.find((s) => s.slug === params.specialization);
  if (!specialization) notFound();

  const enrolledStudents = STUDENTS.filter((s) =>
    specialization.studentIds.includes(s.id)
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <Link href="/departments" className="hover:text-blue-600 transition">Departments</Link>
        <span>/</span>
        <Link href={`/departments`} className="hover:text-blue-600 transition capitalize">{department.name}</Link>
        <span>/</span>
        <span className="text-slate-600">{specialization.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <p className="text-xs text-blue-500 font-medium tracking-wider uppercase">{department.name}</p>
            <h1 className="text-2xl font-bold text-slate-800 mt-1">{specialization.name}</h1>
          </div>
          <span className="font-mono text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">{specialization.code}</span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">{specialization.description}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-100">
          <div>
            <p className="text-xs text-slate-400 mb-1">Academic Lead</p>
            <p className="text-sm font-medium text-slate-700">{specialization.academicLead}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Primary Lab</p>
            <p className="text-sm font-medium text-slate-700">{specialization.primaryLab}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Curriculum Cycle</p>
            <p className="text-sm font-medium text-slate-700">{specialization.curriculumCycle}</p>
          </div>
        </div>
      </div>

      {/* Enrollment */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Enrolled Students</h2>
          <span className="text-xs text-slate-400">{specialization.totalEnrollment} total</span>
        </div>
        {enrolledStudents.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {enrolledStudents.map((student) => (
              <Link
                key={student.id}
                href={`/students/${student.slug}`}
                className="flex items-center gap-3 py-3 hover:bg-slate-50 -mx-2 px-2 rounded transition group"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                  style={{ backgroundColor: student.avatarBg, color: student.avatarColor }}
                >
                  {student.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition">{student.name}</p>
                  <p className="text-xs text-slate-400">{student.year} · {student.id}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full border shrink-0 ${
                  student.status === 'Active Student'
                    ? 'bg-green-50 text-green-700 border-green-200'
                    : 'bg-slate-50 text-slate-500 border-slate-200'
                }`}>
                  {student.status}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-slate-400 text-sm">No students currently enrolled in this specialization track.</p>
        )}
      </div>

      {/* Route info */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
        <p className="text-xs text-slate-400">
          Nested dynamic route:{' '}
          <code className="font-mono text-blue-500">/departments/[dept]/[specialization]</code>
          {' '}→{' '}
          <code className="font-mono text-slate-600">/{params.dept}/{params.specialization}</code>
        </p>
      </div>
    </div>
  );
}
