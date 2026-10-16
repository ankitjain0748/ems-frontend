'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  // Mock State (ise aap Prisma/API ke data se replace kar sakte hain)
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [punchTime, setPunchTime] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Punch in/out action
  const handlePunchToggle = () => {
    if (!isPunchedIn) {
      setIsPunchedIn(true);
      setPunchTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } else {
      setIsPunchedIn(false);
      alert('Aap punch out ho chuke hain!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-white transform transition-transform duration-200 ease-in-out md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:static md:block`}
      >
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
              HR
            </div>
            <span className="text-xl font-bold tracking-tight">StaffPortal</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 space-y-1.5 text-sm font-medium">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-blue-600 text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </Link>

          <Link
            href="/attendance"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Attendance
          </Link>

          <Link
            href="/leaves"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Leaves & Holidays
          </Link>

          <Link
            href="/tasks"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Assigned Tasks
          </Link>

          <Link
            href="/payroll"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Payslips & Salary
          </Link>
        </nav>

        {/* User Card Bottom */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center font-semibold text-white">
                RS
              </div>
              <div className="text-left text-xs">
                <p className="font-semibold text-white">Rahul Sharma</p>
                <p className="text-slate-400">EMP-1001</p>
              </div>
            </div>
            <button
              onClick={() => (window.location.href = '/login')}
              title="Logout"
              className="text-slate-400 hover:text-red-400"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-bold text-gray-800">Employee Portal</h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              Status: Active
            </span>
            <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-600 text-sm">
              RS
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Welcome & Punch In Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <h2 className="text-2xl font-bold">Namaste, Rahul Sharma! 👋</h2>
              <p className="text-blue-100 text-sm mt-1">
                Designation: Software Engineer | Dept: Engineering
              </p>
              {isPunchedIn && (
                <p className="text-xs mt-2 bg-blue-800/60 inline-block px-2.5 py-1 rounded">
                  Punched in at: <span className="font-semibold">{punchTime}</span>
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePunchToggle}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all duration-200 ${
                  isPunchedIn
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-white hover:bg-gray-100 text-blue-600'
                }`}
              >
                {isPunchedIn ? 'Punch Out' : 'Punch In Now'}
              </button>
            </div>
          </div>

          {/* Metrics / Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Attendance */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold uppercase text-gray-500">Monthly Attendance</p>
              <div className="flex items-baseline justify-between mt-2">
                <p className="text-2xl font-bold text-gray-800">92%</p>
                <span className="text-xs text-green-600 font-medium">21 / 23 Days</span>
              </div>
            </div>

            {/* Card 2: Leaves */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold uppercase text-gray-500">Leave Balance</p>
              <div className="flex items-baseline justify-between mt-2">
                <p className="text-2xl font-bold text-gray-800">12 Days</p>
                <Link href="/leaves" className="text-xs text-blue-600 font-semibold hover:underline">
                  Apply Leave
                </Link>
              </div>
            </div>

            {/* Card 3: Tasks */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold uppercase text-gray-500">Pending Tasks</p>
              <div className="flex items-baseline justify-between mt-2">
                <p className="text-2xl font-bold text-gray-800">4 Active</p>
                <span className="text-xs text-amber-600 font-medium">1 High Priority</span>
              </div>
            </div>

            {/* Card 4: Shift */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold uppercase text-gray-500">Shift Schedule</p>
              <div className="flex items-baseline justify-between mt-2">
                <p className="text-lg font-bold text-gray-800">09:30 AM - 06:30 PM</p>
                <span className="text-xs text-gray-500">Regular</span>
              </div>
            </div>
          </div>

          {/* Lower Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Cols: Assigned Tasks */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800 text-lg">Current Tasks</h3>
                <Link href="/tasks" className="text-sm text-blue-600 hover:underline">
                  View All
                </Link>
              </div>

              <div className="divide-y divide-gray-100">
                <div className="py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">API Authentication Bug Fix</p>
                    <p className="text-xs text-gray-400">Due: Tomorrow</p>
                  </div>
                  <span className="px-2.5 py-1 text-xs rounded-full font-medium bg-red-100 text-red-700">
                    High
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Build Login & Register UI</p>
                    <p className="text-xs text-gray-400">Due: In 3 days</p>
                  </div>
                  <span className="px-2.5 py-1 text-xs rounded-full font-medium bg-blue-100 text-blue-700">
                    In Progress
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Monthly Code Review</p>
                    <p className="text-xs text-gray-400">Due: 28th of this month</p>
                  </div>
                  <span className="px-2.5 py-1 text-xs rounded-full font-medium bg-gray-100 text-gray-700">
                    Pending
                  </span>
                </div>
              </div>
            </div>

            {/* Right 1 Col: Quick Info */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
              <h3 className="font-bold text-gray-800 text-lg">Employee Details</h3>
              
              <div className="text-sm space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span className="text-gray-400">Code:</span>
                  <span className="font-medium text-gray-800">EMP-1001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="font-medium text-gray-800">rahul@company.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone:</span>
                  <span className="font-medium text-gray-800">+91 9876543210</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Role:</span>
                  <span className="font-medium text-gray-800">Employee</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <button className="p-2 border rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
                    Download Payslip
                  </button>
                  <button className="p-2 border rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
                    Correction Req.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
