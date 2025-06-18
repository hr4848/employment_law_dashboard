import { Document } from '@/types/Documents'
import { getStatusBadge } from '@/utils/statusBadge'
import { useRouter } from 'next/navigation'

interface DocumentTableRowProps {
  document: Document
  selected: boolean
  selectedDocuments: Document[]
  setSelectedDocuments: React.Dispatch<React.SetStateAction<Document[]>>
  columns: string[]
  onRowClick?: (document: Document) => void
}

export default function DocumentTableRow({
  document,
  selected,
  selectedDocuments,
  setSelectedDocuments,
  columns,
  onRowClick,
}: DocumentTableRowProps) {
  const router = useRouter()

  const formatValue = (key: string): string => {
    const value = document[key as keyof Document]
    return value ? String(value) : '-'
  }

  return (
    <tr
      className={`cursor-pointer hover:bg-gray-50 ${selected ? 'bg-gray-50' : ''}`}
      onClick={() => onRowClick?.(document)}
    >
      {columns.map((col) => (
        <td key={col} className="px-3 py-4 text-sm text-gray-500">
          {col === 'status'
            ? getStatusBadge(document.status)
            : formatValue(col)}
        </td>
      ))}

      <td className="px-3 py-4 text-sm text-right">
        <button
          className="mr-2 rounded bg-indigo-500 text-white px-3 py-1 text-sm"
          onClick={(e) => {
            e.stopPropagation()
            router.push('/documents/create')
          }}
        >
          Create New
        </button>

        <button
          className="rounded bg-gray-300 text-gray-800 px-3 py-1 text-sm"
          onClick={(e) => {
            e.stopPropagation()
            router.push(`/documents/${document.id}`)
          }}
        >
          View
        </button>
      </td>
    </tr>
  )
}
