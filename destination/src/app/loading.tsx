export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-400 font-mono text-sm tracking-wider">LOADING SPATIAL DATA...</p>
      </div>
    </div>
  );
}
