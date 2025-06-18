import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

interface DocumentTableHeaderProps {
  columns: string[]
  sortColumn: string | null
  sortDirection: 'asc' | 'desc'
  onSort: (column: string) => void
}

export default function DocumentTableHeader({
  columns,
  sortColumn,
  sortDirection,
  onSort,
}: DocumentTableHeaderProps) {
  const columnLabels: Record<string, string> = {
    document_name: 'Document',
    description: 'Description',
    status: 'Status',
    // Add more mappings if needed
  }

  return (
    <thead>
      <tr>
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
