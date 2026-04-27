"use client";
import { useState } from "react";
import Navbar from "@/components/backOffice/Navbar";
import Sidebar from "@/components/backOffice/Sidebar";

export default function Layout({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.96),_rgba(243,238,229,0.94)_30%,_#e8e0d1_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(38,35,34,0.98),_rgba(17,17,19,0.98)_36%,_#09090b_100%)]">
      {showSideBar ? (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={() => setShowSideBar(false)}
          className="fixed inset-0 z-40 bg-stone-950/45 backdrop-blur-[2px] lg:hidden"
        />
      ) : null}
      <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <div className="min-h-screen lg:pl-72">
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <main className="px-4 pb-8 pt-28 md:px-6 xl:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
