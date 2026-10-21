export default function GlobalLoading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-pulse space-y-6">
      <div className="h-8 bg-slate-200 rounded w-1/4" />
      <div className="h-4 bg-slate-200 rounded w-1/2 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-64 bg-slate-200 rounded-lg" />
        ))}
      </div>
    </div>
  );
}
