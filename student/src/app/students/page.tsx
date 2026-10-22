'use client';

import { useState } from 'react';
import { STUDENTS, DEPARTMENTS } from '@/data/students';
import StudentCard from '@/components/StudentCard';

export default function StudentsPage() {
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('All');

  const filtered = STUDENTS.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.specialization.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === 'All' || s.department === dept;
    return matchSearch && matchDept;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Page header */}
      <div>
        <p className="text-xs text-blue-500 font-medium tracking-wider uppercase mb-1">Campus Directory</p>
        <h1 className="text-3xl font-bold text-slate-800">Students</h1>
        <p className="text-slate-500 text-sm mt-1">{STUDENTS.length} enrolled students across {DEPARTMENTS.length} departments</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search by name or specialization..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition"
        />
        <select
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-slate-700 transition"
        >
          <option value="All">All Departments</option>
          {DEPARTMENTS.map((d) => (
            <option key={d.id} value={d.name}>{d.name}</option>
          ))}
        </select>
      </div>

      {/* Results */}
      <div className="space-y-1">
        <p className="text-xs text-slate-400">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-3">
          {filtered.map((s) => <StudentCard key={s.id} student={s} />)}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-slate-400 text-sm">No students match your search.</p>
        </div>
      )}
    </div>
  );
}
