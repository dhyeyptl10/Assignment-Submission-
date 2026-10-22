'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center">
      <div className="text-center space-y-4">
        <p className="font-mono text-xs text-red-400 tracking-widest">ROUTE ERROR — SPATIAL EXCEPTION</p>
        <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
        <p className="text-slate-400 text-sm">{error.message}</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-sm rounded transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
