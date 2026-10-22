import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-5">
        <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mx-auto">
          <span className="text-blue-400 text-2xl font-bold">?</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Not found in directory</h1>
          <p className="text-slate-500 text-sm mt-2">The student or department you're looking for doesn't exist in the campus directory.</p>
        </div>
        <div className="flex gap-3 justify-center">
          <Link href="/students" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition">
            Browse Students
          </Link>
          <Link href="/departments" className="px-4 py-2 border border-slate-200 hover:border-blue-300 text-slate-600 text-sm rounded transition">
            View Departments
          </Link>
        </div>
      </div>
    </div>
  );
}
