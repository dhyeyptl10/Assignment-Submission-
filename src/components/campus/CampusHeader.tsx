'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap } from 'lucide-react';

export default function CampusHeader() {
  const pathname = usePathname();

  const isStudents = pathname === '/campus/students' || pathname.startsWith('/campus/students') || pathname === '/students' || pathname.startsWith('/students');
  const isDepartments = pathname === '/campus/departments' || pathname.startsWith('/campus/departments') || pathname === '/departments' || pathname.startsWith('/departments');
  const isAbout = pathname === '/campus/about';

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left Brand and Nav */}
        <div className="flex items-center space-x-10">
          <Link href="/campus/students" className="flex items-center space-x-2 text-slate-900 font-bold text-lg tracking-tight">
            <span className="w-5 h-5 bg-blue-600 rounded text-white flex items-center justify-center font-bold text-xs">
              <GraduationCap className="w-3.5 h-3.5" />
            </span>
            <span>Campus Directory</span>
          </Link>

          <nav className="flex items-center space-x-6 text-sm">
            <Link
              href="/campus/students"
              className={`py-5 transition-colors font-medium ${
                isStudents
                  ? 'text-slate-900 border-b-2 border-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Students
            </Link>
            <Link
              href="/campus/departments"
              className={`py-5 transition-colors font-medium ${
                isDepartments
                  ? 'text-slate-900 border-b-2 border-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Departments
            </Link>
            <Link
              href="/about"
              className={`py-5 transition-colors font-medium ${
                isAbout
                  ? 'text-slate-900 border-b-2 border-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              About
            </Link>
          </nav>
        </div>

        {/* Right Badge */}
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            title="Return to Master Project Showcase"
            className="text-xs font-medium text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-md transition-colors"
          >
            Frontend Practice
          </Link>
        </div>
      </div>
    </header>
  );
}
