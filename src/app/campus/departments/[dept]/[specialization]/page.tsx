import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DEPARTMENTS, STUDENTS } from '@/data/students';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NestedDepartmentPageProps {
  params: {
    dept: string;
    specialization: string;
  };
}

export function generateStaticParams() {
  const paths: { dept: string; specialization: string }[] = [];
  DEPARTMENTS.forEach((d) => {
    d.specializations.forEach((s) => {
      paths.push({
        dept: d.slug,
        specialization: s.slug,
      });
    });
  });
  return paths;
}

export default function NestedDepartmentPage({ params }: NestedDepartmentPageProps) {
  const department = DEPARTMENTS.find((d) => d.slug.toLowerCase() === params.dept.toLowerCase());
  if (!department) notFound();

  const specialization = department.specializations.find(
    (s) => s.slug.toLowerCase() === params.specialization.toLowerCase()
  );
  if (!specialization) notFound();

  const enrolledStudents = STUDENTS.filter(
    (s) =>
      s.departmentSlug === department.slug &&
      s.specializationSlug === specialization.slug
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumbs & Navigation */}
      <div className="flex flex-col sm:flex-row items-baseline justify-between mb-4 pb-4 border-b border-slate-200 gap-2 text-xs">
        <div className="font-mono text-slate-500">
          <Link href="/campus/departments" className="hover:text-slate-800 transition-colors">
            Departments
          </Link>{' '}
          / {department.name} /{' '}
          <span className="text-slate-900 font-bold">{specialization.name}</span>
        </div>

        <Link
          href="/campus/students"
          className="font-semibold text-slate-700 hover:text-blue-600 flex items-center space-x-1"
        >
          <span>View all students</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="mb-6">
        <Link
          href="/campus/departments"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to {department.name} Department</span>
        </Link>
      </div>

      {/* Specialization Detail Box */}
      <div className="bg-white border border-slate-200 rounded-lg p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 mb-4 gap-2">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {specialization.name}
            </h1>
            <span className="text-xs bg-slate-100 text-slate-700 font-medium px-2.5 py-0.5 rounded border border-slate-200">
              Specialization under {department.name}
            </span>
          </div>

          <div>
            <div className="font-mono text-[9px] text-slate-400 uppercase font-bold tracking-wider">
              Department Track
            </div>
            <div className="font-mono text-xs font-bold text-slate-800 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
              {specialization.code}
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed mb-6 max-w-3xl">
          {specialization.description}
        </p>

        {/* 4-Field Metadata */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-slate-100 text-xs">
          <div>
            <div className="font-mono text-[10px] text-slate-400 uppercase font-semibold mb-1">
              Academic Lead
            </div>
            <div className="font-bold text-slate-900">{specialization.academicLead}</div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-slate-400 uppercase font-semibold mb-1">
              Primary Core Lab
            </div>
            <div className="font-bold text-slate-900">{specialization.primaryLab}</div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-slate-400 uppercase font-semibold mb-1">
              Total Enrollment
            </div>
            <div className="font-bold text-slate-900">
              {enrolledStudents.length} Active Enrollees
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-slate-400 uppercase font-semibold mb-1">
              Curriculum Cycle
            </div>
            <div className="font-bold text-slate-900">{specialization.curriculumCycle}</div>
          </div>
        </div>
      </div>

      {/* Students in this specialization list */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <span>Students in this Specialization</span>
            <span className="font-mono text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 font-bold">
              {enrolledStudents.length}
            </span>
          </h2>

          <div className="font-mono text-xs text-slate-500">
            Filtered by Track:{' '}
            <span className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              {specialization.name}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enrolledStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs"
                      style={{
                        backgroundColor: student.avatarBg || '#dbeafe',
                        color: student.avatarColor || '#1e40af',
                      }}
                    >
                      {student.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{student.name}</h3>
                      <div className="font-mono text-xs text-slate-400">{student.id}</div>
                    </div>
                  </div>

                  <span className="font-mono text-xs bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-slate-600">
                    {student.year.split(' ')[0]} {student.year.split(' ')[1]}
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-4">{student.about.slice(0, 75)}...</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Active Research Track</span>
                <Link
                  href={`/campus/students/${student.slug}`}
                  className="font-semibold text-slate-800 hover:text-blue-600 flex items-center space-x-1 transition-colors"
                >
                  <span>View profile</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
