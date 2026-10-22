'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">Something went wrong</h1>
        <p className="text-slate-500 text-sm">{error.message}</p>
        <button onClick={reset} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition">
          Try again
        </button>
      </div>
    </div>
  );
}
