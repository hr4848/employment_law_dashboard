'use client'

import React, { useState } from 'react'

export default function PaginationNumeric02() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9

  const goPrev = () => {
    setCurrentPage((page) => Math.max(1, page - 1))
  }

  const goNext = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1))
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  // For simplicity, just show first 3 pages + ellipsis + last page
  // You can improve this logic if needed
  const pageNumbers = [1, 2, 3, '...', totalPages]

  return (
    <nav className="flex justify-between" role="navigation" aria-label="Navigation">
      <div className="flex-1 mr-2">
        <button
          onClick={goPrev}
          disabled={currentPage === 1}
          className={`btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 text-gray-300 dark:text-gray-600 ${
            currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:border-gray-300 dark:hover:border-gray-600 hover:text-violet-500'
          }`}
        >
          &lt;-<span className="hidden sm:inline">&nbsp;Previous</span>
        </button>
      </div>

      <div className="grow text-center">
        <ul className="inline-flex text-sm font-medium -space-x-px">
          {pageNumbers.map((page, i) =>
            page === '...' ? (
              <li key={i}>
                <span className="inline-flex items-center justify-center leading-5 px-2 py-2 text-gray-400 dark:text-gray-500">…</span>
              </li>
            ) : (
              <li key={i}>
                <button
                  onClick={() => goToPage(page as number)}
                  className={`inline-flex items-center justify-center leading-5 px-2 py-2 border ${
                    currentPage === page
                      ? 'rounded-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 text-violet-500 shadow-sm'
                      : 'border-transparent text-gray-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-500'
                  }`}
                >
                  <span className="w-5">{page}</span>
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="flex-1 text-right ml-2">
        <button
          onClick={goNext}
          disabled={currentPage === totalPages}
          className={`btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 text-gray-800 dark:text-gray-300 ${
            currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:border-gray-300 dark:hover:border-gray-600 hover:text-violet-500'
          }`}
        >
          <span className="hidden sm:inline">Next&nbsp;</span>-&gt;
        </button>
      </div>
    </nav>
  )
}
