import Navbar from "@/components/backOffice/Navbar";
import Sidebar from "@/components/backOffice/Sidebar";

export default function layout({ children }) {
  return (
    <div className="flex">
      {/* sideBar */}
      <Sidebar />

      {/* Main Body */}
      <div className="w-full">
        {/* Header */}
        <Navbar />

        {/* Main */}
        <main className="p-8 mt-16 ml-60 bg-slate-900 text-slate-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
