import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function FormHeader({ title }) {
    const router = useRouter()
    return (
      <div>
        <div className="flex items-center justify-between py-6 px-12 bg-white text-slate-700 dark:text-slate-50 dark:bg-slate-600 shadow rounded-lg mb-12">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={()=>router.back()} className="">
            <X />
          </button>
        </div>
      </div>
    );
}
