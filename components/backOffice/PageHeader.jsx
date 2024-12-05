import React from 'react'
import Heading from './Heading';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function PageHeader({heading, linkTitle,href}) {
  return (
    <div className="flex justify-between py-8">
      <Heading title={heading} />
      <Link
        type="button"
        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center "
        href={href}>
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}
