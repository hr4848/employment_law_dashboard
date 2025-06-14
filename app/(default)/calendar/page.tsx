'use client'


import { useState } from 'react'
import { CalendarProvider } from './calendar-context'
import CalendarNavigation from './calendar-navigation'
import CalendarTable from './calendar-table'
import CalendarTitle from './title'

export default function Calendar() {
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month')

  const events = [
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 1, 10),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 1, 11),
      eventName: 'Meeting w/ Patrick Lin',
      eventColor: 'sky'
    }
  ]

  return (
    <CalendarProvider>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

        {/* Page header */}
        <div className="sm:flex sm:justify-between sm:items-center mb-4">
          <CalendarTitle />
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            <CalendarNavigation />
            <hr className="w-px h-full bg-gray-200 dark:bg-gray-700/60 border-none mx-1" />
            <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
              Create Event
            </button>
          </div>
        </div>

        {/* Filters and view buttons */}
        <div className="sm:flex sm:justify-between sm:items-center mb-4">

          {/* Filters */}
          <div className="mb-4 sm:mb-0 mr-2">
            <ul className="flex flex-wrap items-center -m-1">
              <li className="m-1">
                <button className="btn-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-500 dark:text-gray-400">
                  <div className="w-1 h-3.5 bg-sky-500 shrink-0"></div>
                  <span className="ml-1.5">Acme Inc.</span>
                </button>
              </li>
              <li className="m-1">
                <button className="btn-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-500 dark:text-gray-400">
                  <div className="w-1 h-3.5 bg-green-500 shrink-0"></div>
                  <span className="ml-1.5">Life & Family</span>
                </button>
              </li>
              <li className="m-1">
                <button className="btn-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-500 dark:text-gray-400">
                  <div className="w-1 h-3.5 bg-violet-500 shrink-0"></div>
                  <span className="ml-1.5">Reservations</span>
                </button>
              </li>
              <li className="m-1">
                <button className="btn-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-500 dark:text-gray-400">
                  <div className="w-1 h-3.5 bg-red-500 shrink-0"></div>
                  <span className="ml-1.5">Events</span>
                </button>
              </li>
              <li className="m-1">
                <button className="btn-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-500 dark:text-gray-400">
                  <div className="w-1 h-3.5 bg-yellow-500 shrink-0"></div>
                  <span className="ml-1.5">Misc</span>
                </button>
              </li>
              <li className="m-1">
                <button className="btn-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-violet-500">+Add New</button>
              </li>
            </ul>
          </div>

          {/* View toggle buttons */}
          <div className="flex flex-nowrap -space-x-px">
            <button
              className={`btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 rounded-none first:rounded-l-lg last:rounded-r-lg ${viewMode === 'month' ? 'text-violet-500' : 'text-gray-600 dark:text-gray-300'}`}
              onClick={() => setViewMode('month')}
            >
              Month
            </button>
            <button
              className={`btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 rounded-none first:rounded-l-lg last:rounded-r-lg ${viewMode === 'week' ? 'text-violet-500' : 'text-gray-600 dark:text-gray-300'}`}
              onClick={() => setViewMode('week')}
            >
              Week
            </button>
            <button
              className={`btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 rounded-none first:rounded-l-lg last:rounded-r-lg ${viewMode === 'day' ? 'text-violet-500' : 'text-gray-600 dark:text-gray-300'}`}
              onClick={() => setViewMode('day')}
            >
              Day
            </button>
          </div>
        </div>

        {/* Conditional rendering for each view */}
        {viewMode === 'month' && <CalendarTable events={events} />}
        {viewMode === 'week' && (
          <div className="text-center py-20 text-gray-500">
            🚧 Week View Coming Soon
          </div>
        )}
        {viewMode === 'day' && (
          <div className="text-center py-20 text-gray-500">
            🚧 Day View Coming Soon
          </div>
        )}

      </div>
    </CalendarProvider>
  )
}
