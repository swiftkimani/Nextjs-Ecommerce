import { Sun, Bell, User, AlignJustify } from "lucide-react";

export default function Navbar() {
  return (
    <div
      className="flex items-cneter justify-between bg-slate-800    
    text-slate-50 h-16  px-8 py-4 fixed top-0 w-screen left-60 "
    >
      {/* Icons */}

      <button>
        <AlignJustify />
      </button>

      {/* 3Icons */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>

        <button>
          <Bell />
        </button>

        <button>
          <User />
        </button>
      </div>
    </div>
  );
}
