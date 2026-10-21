import Link from 'next/link';
import { DEPARTMENTS } from '@/data/students';
import { Terminal, PenTool, TrendingUp, Layers, Users, ArrowRight } from 'lucide-react';

export default function DepartmentsListingPage() {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'computer-science':
        return <Terminal className="w-4 h-4 text-blue-600" />;
      case 'design':
        return <PenTool className="w-4 h-4 text-indigo-600" />;
      case 'business':
        return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      default:
        return <Terminal className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-baseline justify-between mb-6 pb-6 border-b border-slate-200 gap-2">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
            Departments
          </h1>
          <p className="text-xs text-slate-500">
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>

        <div className="inline-flex items-center space-x-1.5 font-mono text-xs text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span>3 Active Academic Faculties</span>
        </div>
      </div>

      {/* Department Cards List */}
      <div className="space-y-4 mb-10">
        {DEPARTMENTS.map((dept) => (
          <div
            key={dept.id}
            className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-slate-300 hover:shadow-xs transition-all group"
          >
            <div className="max-w-2xl">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center bg-slate-50">
                  {getIcon(dept.slug)}
                </div>
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {dept.name}
                </h2>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {dept.description}
              </p>

              <div className="flex items-center space-x-6 text-xs text-slate-500 font-mono">
                <div className="flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                  <span>{dept.specializationsCount} Specializations</span>
                </div>
                <span>·</span>
                <div className="flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>{dept.enrolledStudentsCount} Enrolled Students</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex items-center">
              <Link
                href={`/campus/departments/${dept.slug}/${dept.specializations[0]?.slug || 'web-development'}`}
                className="text-xs font-semibold text-slate-900 hover:text-blue-600 flex items-center space-x-1 group-hover:translate-x-1 transition-all"
              >
                <span>View students</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer info */}
      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div>Curriculum Year 2024–2025</div>
        <div>Updated daily via Campus Records API</div>
      </div>
    </div>
  );
}
