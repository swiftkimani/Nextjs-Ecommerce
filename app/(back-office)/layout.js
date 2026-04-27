"use client";
import { useState } from "react";
import Navbar from "@/components/backOffice/Navbar";
import Sidebar from "@/components/backOffice/Sidebar";

export default function Layout({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(244,238,228,0.92)_32%,_#ebe4d7_100%)]">
      <div>
        <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      </div>
      <div className="min-h-screen sm:pl-72">
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <main className="px-4 pb-10 pt-28 md:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
