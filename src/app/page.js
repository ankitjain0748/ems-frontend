"use client";

import React, { useState } from "react";
import {
  Users,
  Clock,
  CreditCard,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  BarChart3,
  CheckSquare,
  FileText,
  ArrowRight,
  Lock,
  Laptop
} from "lucide-react";

export default function Home() {
  const [activeRole, setActiveRole] = useState("hr");
  const [submitted, setSubmitted] = useState(false);

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const features = [
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Employee Directory & Lifecycle",
      desc: "Onboarding se offboarding tak — documents, profiles, reporting manager mapping aur designations ek jagah centralized."
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: "Smart Attendance & Shifts",
      desc: "One-click check-in/out, shift timing rules, late-coming grace periods, aur real-time correction request workflows."
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      title: "Automated Leave System",
      desc: "Leave balance calculation, holiday calendars, half-day/full-day leaves, aur multi-level manager approvals."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-amber-600" />,
      title: "1-Click Accurate Payroll",
      desc: "Attendance aur approved leaves se auto-synced salary slips, customized allowances, deductions aur PDF export."
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-blue-600" />,
      title: "Task & Daily Productivity",
      desc: "Managers team ko daily/weekly tasks assign kar sakte hain, priority aur status real-time monitor kar sakte hain."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-rose-600" />,
      title: "Management Reports & Analytics",
      desc: "Headcount trends, attendance reports, overtime calculation aur payroll compliance data instantly export karein."
    }
  ];

  const roleBenefits = {
    hr: {
      title: "HR & People Ops ke liye",
      points: [
        "Zero paperwork onboarding aur organized digital document storage",
        "Month-end attendance sheet ek click me verify karein",
        "Company policies aur holiday calendar centrally manage karein"
      ]
    },
    payroll: {
      title: "Payroll & Finance Managers ke liye",
      points: [
        "Automatic unpaid leave (LWP) deduction aur allowances",
        "Single click me company-wide payslip generation",
        "Audit-ready payment records aur financial export formats"
      ]
    },
    manager: {
      title: "Team Leads & Managers ke liye",
      points: [
        "Direct reporting team ki attendance aur live status dekhein",
        "Pending leave requests ko mobile/web se turant approve karein",
        "Tasks assign karein aur team bottlenecks jaldi pakdein"
      ]
    },
    employee: {
      title: "Employees ke liye (Self-Service Portal)",
      points: [
        "Kahi se bhi hassle-free attendance punch aur history check",
        "Apne bache hue leaves check karein aur application dalein",
        "Har mahine ki payslip bina HR ko mail kiye direct download karein"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
              H
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Nexus<span className="text-indigo-600">HRMS</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition">Features</a>
            <a href="#roles" className="hover:text-indigo-600 transition">For Every Role</a>
            <a href="#security" className="hover:text-indigo-600 transition">Enterprise Security</a>
            <a href="#architecture" className="hover:text-indigo-600 transition">Tech Stack</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#demo"
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-14 pb-16 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            Modern HR, Attendance & Payroll Suite
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Stop Managing Spreadsheets. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Run Your Entire Workforce on Autopilot.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Employee directory, attendance, multi-level leaves, task management, aur error-free payroll calculation — sab ek secure platform me.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demo"
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 flex items-center justify-center gap-2 transition"
            >
              Schedule Live Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 hover:bg-slate-50 transition"
            >
              Explore Modules
            </a>
          </div>

          {/* Metrics */}
          <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
            <div>
              <div className="text-3xl font-extrabold text-indigo-600">99.9%</div>
              <p className="text-xs text-slate-500 font-medium mt-1">Payroll Accuracy</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-indigo-600">80%</div>
              <p className="text-xs text-slate-500 font-medium mt-1">Faster HR Operations</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-indigo-600">100%</div>
              <p className="text-xs text-slate-500 font-medium mt-1">Role-Based Security</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-indigo-600">0</div>
              <p className="text-xs text-slate-500 font-medium mt-1">Excel Mess</p>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
            <div className="rounded-xl bg-slate-900 p-4 text-white">
              {/* Fake Dashboard Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="ml-2 font-mono text-slate-300">app.yourcompany-hrms.com/dashboard</span>
                </div>
                <span className="text-emerald-400 font-medium">● System Online</span>
              </div>

              {/* Fake Dashboard Content */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-slate-900">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-xs text-slate-500">Active Staff</div>
                  <div className="text-2xl font-bold mt-1">142</div>
                  <span className="text-xs text-emerald-600 font-medium">↑ 100% Present Today</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-xs text-slate-500">On Time Arrival</div>
                  <div className="text-2xl font-bold mt-1">94.2%</div>
                  <span className="text-xs text-slate-500">Grace applied</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-xs text-slate-500">Pending Leaves</div>
                  <div className="text-2xl font-bold mt-1 text-amber-600">3 Requests</div>
                  <span className="text-xs text-slate-500">Requires manager action</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-xs text-slate-500">Current Month Payroll</div>
                  <div className="text-2xl font-bold mt-1 text-indigo-600">Ready</div>
                  <span className="text-xs text-emerald-600 font-medium">Attendance Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Features Section */}
      <section id="features" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Complete Module Suite</h2>
            <p className="mt-2 text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
              Har HR Problem Ka Ek Integrated Solution
            </p>
            <p className="mt-3 text-slate-600">
              Kisi aur third-party tool par depend hone ki zarurat nahi. Ye modules aapas me fully connected hain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{feat.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Role-Based Access Spotlight */}
      <section id="roles" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Designed for Every Stakeholder</h2>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              Role-Based Access: Sabke Liye Unka Dedicated Portal
            </p>
          </div>

          {/* Role Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: "hr", label: "HR Admin" },
              { id: "payroll", label: "Payroll Admin" },
              { id: "manager", label: "Managers & Leads" },
              { id: "employee", label: "Employees" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveRole(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                  activeRole === tab.id
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Role Tab Content Box */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">{roleBenefits[activeRole].title}</h3>
            <ul className="space-y-3">
              {roleBenefits[activeRole].points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Enterprise Security & Architecture */}
      <section id="security" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-semibold mb-4">
                <ShieldCheck className="w-4 h-4" /> Bank-Grade Security
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Aapka Company Data 100% Safe, Compliant aur Private
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                HR aur salary details confidential hoti hain. Is system me database-level constraints, backend JWT/RBAC session authorization aur immutable audit trails integrated hain.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-sm text-slate-300">Database constraints & automated transactions (PostgreSQL)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-sm text-slate-300">Strict server-side permissions (No client-side security leaks)</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-sm text-slate-300">Complete immutable audit trail for sensitive payroll changes</span>
                </div>
              </div>
            </div>

            <div id="architecture" className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 backdrop-blur">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-indigo-400" /> Production-Grade Architecture
              </h3>
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex justify-between">
                  <span>Backend Core:</span>
                  <span className="text-emerald-400">Node.js + Express REST API</span>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex justify-between">
                  <span>Database & ORM:</span>
                  <span className="text-emerald-400">PostgreSQL + Prisma</span>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex justify-between">
                  <span>Frontend Experience:</span>
                  <span className="text-emerald-400">Next.js / React + Tailwind</span>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex justify-between">
                  <span>Validation & Auth:</span>
                  <span className="text-emerald-400">Zod schemas + JWT sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call To Action (Lead Capture / Demo Form) */}
      <section id="demo" className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Apni Company ke HR Operations Ko Simplify Karein
          </h2>
          <p className="mt-4 text-indigo-100 text-lg">
            Hum aapki organization ke liye personalized live demo arrange karenge. Details fill karein aur hum 24 ghante ke andar connect karenge.
          </p>

          {submitted ? (
            <div className="mt-8 max-w-md mx-auto bg-white p-8 rounded-2xl text-slate-900 shadow-2xl text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold">Demo Request Received!</h4>
              <p className="text-sm text-slate-600 mt-2">
                Shukriya! Hamari team jald hi demo schedule karne ke liye aapse contact karegi.
              </p>
            </div>
          ) : (
            <form onSubmit={handleDemoSubmit} className="mt-8 max-w-md mx-auto bg-white p-6 rounded-2xl text-slate-900 shadow-2xl text-left space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Technologies"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Work Email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Team Size (Employees)</label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>10 - 50 Employees</option>
                  <option>51 - 200 Employees</option>
                  <option>201 - 500 Employees</option>
                  <option>500+ Employees</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-sm shadow transition"
              >
                Request Free Live Demo
              </button>
              <p className="text-center text-[11px] text-slate-400">
                No credit card required • Instant product walkthrough
              </p>
            </form>
          )}
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">H</div>
            <span className="text-white font-bold tracking-tight">NexusHRMS</span>
          </div>
          <p>© 2026 NexusHRMS. Built for modern, high-performing teams.</p>
        </div>
      </footer>
    </div>
  );
}