import { Download, Search, Trash2 } from 'lucide-react';

export default function TableActions() {
    return (
      <div className="flex py-4 px-12 justify-between items-center gap-8 bg-white shadow-sm dark:bg-slate-700 rounded-lg">
        <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
          <Download />
          <span>Export</span>
        </button>

        <div className="flex-grow">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block w-full py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>

        <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-3">
          <Trash2 />
          <span>Bulk Delete</span>
        </button>
      </div>
    );
}
