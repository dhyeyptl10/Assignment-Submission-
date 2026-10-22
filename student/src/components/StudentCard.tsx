import Link from 'next/link';
import { Student } from '../types/student';

export default function StudentCard({ student }: { student: Student }) {
  return (
    <Link href={`/students/${student.slug}`} className="block group">
      <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
        {/* Avatar */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold"
          style={{ backgroundColor: student.avatarBg, color: student.avatarColor }}
        >
          {student.initials}
        </div>
        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition">{student.name}</p>
              <p className="text-xs text-slate-500 mt-0.5">{student.department} · {student.year}</p>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
              student.status === 'Active Student' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-slate-50 text-slate-500 border border-slate-200'
            }`}>
              {student.status}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-xs text-slate-400">{student.id}</span>
            <span className="text-xs text-slate-300">·</span>
            <span className="text-xs text-slate-400">{student.specialization}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
