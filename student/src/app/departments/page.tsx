import Link from 'next/link';
import { DEPARTMENTS } from '@/data/students';

export default function DepartmentsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Page header */}
      <div>
        <p className="text-xs text-blue-500 font-medium tracking-wider uppercase mb-1">Campus Directory</p>
        <h1 className="text-3xl font-bold text-slate-800">Departments</h1>
        <p className="text-slate-500 text-sm mt-1">
          {DEPARTMENTS.length} faculties ·{' '}
          {DEPARTMENTS.reduce((acc, d) => acc + d.specializationsCount, 0)} specialization tracks ·{' '}
          {DEPARTMENTS.reduce((acc, d) => acc + d.enrolledStudentsCount, 0)} enrolled students
        </p>
      </div>

      {/* Departments grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {DEPARTMENTS.map((dept) => (
          <div key={dept.id} className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 hover:border-blue-200 hover:shadow-sm transition-all">
            <div>
              <h2 className="text-lg font-bold text-slate-800">{dept.name}</h2>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">{dept.description}</p>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
              <span>{dept.enrolledStudentsCount} students</span>
              <span>{dept.specializationsCount} tracks</span>
            </div>
            <div className="space-y-1">
              {dept.specializations.map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/departments/${dept.slug}/${spec.slug}`}
                  className="flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-blue-50 group transition"
                >
                  <span className="text-sm text-slate-700 group-hover:text-blue-600 transition">{spec.name}</span>
                  <span className="text-xs text-slate-400">{spec.totalEnrollment} enrolled</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
