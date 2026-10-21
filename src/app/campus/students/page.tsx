'use client';

import { useState } from 'react';
import { STUDENTS } from '@/data/students';
import StudentCard from '@/components/campus/StudentCard';
import { Search } from 'lucide-react';

export default function StudentsListingPage() {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All departments');

  const filtered = STUDENTS.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase());
    const matchesDept =
      department === 'All departments' || s.department === department;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
          Students
        </h1>
        <p className="text-xs text-slate-500">
          Browse students and view their profiles.
        </p>
      </div>

      {/* Filter and Search Box */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative flex-1 w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search students"
            className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-blue-500 bg-white"
          />
        </div>

        {/* Department select */}
        <div className="flex items-center space-x-2 text-xs w-full sm:w-auto">
          <span className="text-slate-500 shrink-0">Department:</span>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="px-3 py-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:border-blue-500 bg-white text-slate-800"
          >
            <option value="All departments">All departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>

      {/* Grid of 8 Student Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {filtered.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      {/* Bottom Pagination & Counts */}
      <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
        <div>
          Showing <span className="font-semibold text-slate-800">{filtered.length}</span> of{' '}
          <span className="font-semibold text-slate-800">{STUDENTS.length}</span> students
        </div>

        <div className="flex items-center space-x-2">
          <button
            disabled
            className="px-3 py-1.5 border border-slate-200 rounded text-slate-400 bg-white cursor-not-allowed"
          >
            Previous
          </button>
          <button
            disabled
            className="px-3 py-1.5 border border-slate-200 rounded text-slate-400 bg-white cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
