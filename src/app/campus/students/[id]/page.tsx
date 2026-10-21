import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STUDENTS } from '@/data/students';
import { ArrowLeft } from 'lucide-react';

interface StudentProfilePageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return STUDENTS.map((s) => ({
    id: s.slug,
  }));
}

export default function StudentProfilePage({ params }: StudentProfilePageProps) {
  const student = STUDENTS.find(
    (s) =>
      s.slug.toLowerCase() === params.id.toLowerCase() ||
      s.id.toLowerCase() === params.id.toLowerCase()
  );

  if (!student) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Breadcrumb & Back */}
      <div className="mb-6">
        <div className="text-xs text-slate-500 font-mono mb-2">
          <Link href="/campus/students" className="hover:text-slate-800 transition-colors">
            Students
          </Link>{' '}
          / <span className="text-slate-800 font-semibold">{student.name}</span>
        </div>

        <Link
          href="/campus/students"
          className="inline-flex items-center space-x-1 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to students</span>
        </Link>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-8 mb-6 shadow-xs">
        {/* Header with Avatar and ID */}
        <div className="flex items-center space-x-5 pb-6 border-b border-slate-200 mb-6">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl"
            style={{
              backgroundColor: student.avatarBg || '#dbeafe',
              color: student.avatarColor || '#1e40af',
            }}
          >
            {student.initials}
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1.5">
              {student.name}
            </h1>
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-mono bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded font-medium">
                {student.id}
              </span>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded font-medium">
                {student.status}
              </span>
            </div>
          </div>
        </div>

        {/* 4-Field Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-200 mb-6 text-xs">
          <div>
            <div className="font-mono text-[10px] text-slate-400 uppercase font-semibold mb-1 tracking-wider">
              Department
            </div>
            <Link
              href={`/campus/departments/${student.departmentSlug}/${student.specializationSlug}`}
              className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              {student.department}
            </Link>
          </div>

          <div>
            <div className="font-mono text-[10px] text-slate-400 uppercase font-semibold mb-1 tracking-wider">
              Study Year
            </div>
            <div className="text-sm font-bold text-slate-900">{student.year}</div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-slate-400 uppercase font-semibold mb-1 tracking-wider">
              Email
            </div>
            <a
              href={`mailto:${student.email}`}
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              {student.email}
            </a>
          </div>

          <div>
            <div className="font-mono text-[10px] text-slate-400 uppercase font-semibold mb-1 tracking-wider">
              Enrolled
            </div>
            <div className="text-sm font-bold text-slate-900">{student.enrolled}</div>
          </div>
        </div>

        {/* About Section */}
        <div className="pb-6 border-b border-slate-200 mb-6">
          <h2 className="text-sm font-bold text-slate-900 mb-2">About</h2>
          <p className="text-xs text-slate-600 leading-relaxed">{student.about}</p>
        </div>

        {/* Academic Details & Enrolled Subjects */}
        <div>
          <h2 className="text-sm font-bold text-slate-900 mb-4">Academic Details</h2>

          <div className="space-y-2 mb-5 text-xs">
            <div className="flex justify-between py-1.5 border-b border-slate-50 text-slate-500">
              <span>Department</span>
              <span className="font-semibold text-slate-900">{student.department}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-50 text-slate-500">
              <span>Current Academic Standing</span>
              <span className="font-semibold text-slate-900">{student.academicStanding}</span>
            </div>
          </div>

          <div className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-2">
            Enrolled Subjects
          </div>

          <div className="border border-slate-200 rounded divide-y divide-slate-100 text-xs">
            {student.enrolledSubjects.map((subject) => (
              <div key={subject.code} className="p-3 flex items-center justify-between">
                <span className="font-medium text-slate-800">
                  {subject.code}: {subject.name}
                </span>
                <span className="font-mono text-slate-500">{subject.credits.toFixed(1)} Credits</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer System Record */}
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-2">
        <div>System Record ID: 0948-{student.initials}</div>
        <div>Last validated: Oct 24, 2024</div>
      </div>
    </div>
  );
}
