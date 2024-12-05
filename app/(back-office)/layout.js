"use client";
import { useState } from "react";
import Navbar from "@/components/backOffice/Navbar";
import Sidebar from "@/components/backOffice/Sidebar";

export default function Layout({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="">
        <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      </div>

      {/* Main Body */}
      <div className="flex-grow bg-slate-100 dark:bg-slate-900">
        {/* Header */}
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

        {/* Main */}
        <main className="p-8 sm:ml-60 mt-16 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
