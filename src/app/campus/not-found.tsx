import Link from 'next/link';
import CampusHeader from '@/components/campus/CampusHeader';
import CampusFooter from '@/components/campus/CampusFooter';
import { ArrowRight, Landmark } from 'lucide-react';

export default function CampusNotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <CampusHeader />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full flex flex-col justify-center">
        {/* Breadcrumb */}
        <div className="font-mono text-xs text-slate-400 mb-6 text-center">
          Directory / <span className="text-blue-600 font-semibold">Not Found</span>
        </div>

        {/* Center 404 Box */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 font-mono text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>404 · ROUTE NOT FOUND</span>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Student or department not found
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed mb-6">
            The requested directory entry or path could not be located. It may have moved or the identifier might be invalid.
          </p>

          <div className="flex items-center justify-center space-x-3">
            <Link
              href="/campus/students"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded transition-colors shadow-xs"
            >
              Return to Students Directory
            </Link>

            <Link
              href="/campus/departments"
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded transition-colors"
            >
              Browse All Departments
            </Link>
          </div>
        </div>

        {/* Suggested starting points table */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-2xs max-w-2xl mx-auto w-full">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            <span>Suggested Starting Points</span>
            <span>Internal Routes</span>
          </div>

          <div className="divide-y divide-slate-100 text-xs font-mono">
            <Link
              href="/campus/departments/computer-science/web-development"
              className="p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors group"
            >
              <div className="flex items-center space-x-2.5 font-sans font-bold text-slate-800 group-hover:text-blue-600">
                <Landmark className="w-4 h-4 text-slate-400" />
                <span>Computer Science Department</span>
              </div>
              <span className="text-slate-400 group-hover:text-slate-700 flex items-center space-x-2">
                <span>/departments/computer-science</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/campus/departments/design/interaction-design"
              className="p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors group"
            >
              <div className="flex items-center space-x-2.5 font-sans font-bold text-slate-800 group-hover:text-blue-600">
                <Landmark className="w-4 h-4 text-slate-400" />
                <span>Design Department</span>
              </div>
              <span className="text-slate-400 group-hover:text-slate-700 flex items-center space-x-2">
                <span>/departments/design</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/campus/students"
              className="p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors group"
            >
              <div className="flex items-center space-x-2.5 font-sans font-bold text-slate-800 group-hover:text-blue-600">
                <Landmark className="w-4 h-4 text-slate-400" />
                <span>All Enrolled Students</span>
              </div>
              <span className="text-slate-400 group-hover:text-slate-700 flex items-center space-x-2">
                <span>/students</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </main>

      <CampusFooter />
    </div>
  );
}
