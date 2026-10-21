import Link from 'next/link';
import { Student } from '@/types/student';

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all group">
      <div>
        {/* Top Avatar & Student ID */}
        <div className="flex items-center justify-between mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs"
            style={{
              backgroundColor: student.avatarBg || '#dbeafe',
              color: student.avatarColor || '#1e40af',
            }}
          >
            {student.initials}
          </div>

          <span className="font-mono text-xs text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
            {student.id}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
          {student.name}
        </h3>

        {/* Department & Year Tags */}
        <div className="flex items-center space-x-2 text-xs mb-4">
          <span className="bg-blue-50 text-blue-700 font-medium px-2 py-0.5 rounded border border-blue-100">
            {student.department}
          </span>
          <span className="text-slate-500">{student.year}</span>
        </div>
      </div>

      {/* Footer link */}
      <div className="pt-3 border-t border-slate-100">
        <Link
          href={`/campus/students/${student.slug}`}
          className="text-xs font-semibold text-slate-800 hover:text-blue-600 flex items-center space-x-1 transition-colors"
        >
          <span>View profile</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
