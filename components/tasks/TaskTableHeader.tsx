import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
// import { RefObject } from 'react'

interface TaskTableHeaderProps {
  // checkboxRef: RefObject<HTMLInputElement | null>
  // checked: boolean
  // toggleAll: () => void
  columns: string[]
  sortColumn: string | null
  sortDirection: 'asc' | 'desc'
  onSort: (column: string) => void
}

export default function TaskTableHeader({
  // checkboxRef,
  // checked,
  // toggleAll,
  columns,
  sortColumn,
  sortDirection,
  onSort,
}: TaskTableHeaderProps) {
  const columnLabels: Record<string, string> = {
    task_name: 'Task',
    description: 'Description',
    status: 'Status',
    // Add more mappings here if needed later
  }

  return (
    <thead>
      <tr>
        {/* <th className="relative px-7 sm:w-12 sm:px-6"> */}
          {/* Checkbox removed:
          <input
            type="checkbox"
            ref={checkboxRef}
            checked={checked}
            onChange={toggleAll}
            className="rounded-sm border-gray-300 text-indigo-600 focus:ring-indigo-500"
          /> */}
        {/* </th> */}
        {columns.map((col) => (
          <th
            key={col}
            onClick={() => onSort(col)}
            className="cursor-pointer select-none px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            <div className="inline-flex items-center">
              {columnLabels[col] || col}
              {sortColumn === col ? (
                sortDirection === 'asc' ? (
                  <ChevronUpIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                ) : (
                  <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                )
              ) : (
                <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-300" aria-hidden="true" />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}
