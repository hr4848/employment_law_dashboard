'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { Document } from '@/types/Documents'
import DocumentTableHeader from './DocumentTableHeader'
import DocumentTableRow from './DocumentTableRow'
import BulkActionsBar from './BulkActionsBar'

interface DocumentTableProps {
  documents: Document[]
  columns?: string[]
  onRowClick?: (document: Document) => void
}

export default function DocumentTable({
  documents,
  columns = ['status', 'document_name', 'description'],
  onRowClick,
}: DocumentTableProps) {
  const checkbox = useRef<HTMLInputElement>(null)
  const [selectedDocuments, setSelectedDocuments] = useState<Document[]>([])
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const sortedDocuments = [...documents].sort((a, b) => {
    if (!sortColumn) return 0

    const aValue = a[sortColumn as keyof Document]
    const bValue = b[sortColumn as keyof Document]

    if (aValue == null) return 1
    if (bValue == null) return -1

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    }

    return 0
  })

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedDocuments.length > 0 && selectedDocuments.length < documents.length

    setChecked(selectedDocuments.length === documents.length)
    setIndeterminate(isIndeterminate)

    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate
    }
  }, [selectedDocuments, documents])

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {selectedDocuments.length > 0 && <BulkActionsBar />}
      <table className="min-w-full divide-y divide-gray-300">
        <DocumentTableHeader
          columns={columns}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSort={handleSort}
        />
        <tbody className="divide-y divide-gray-200 bg-white">
          {sortedDocuments.map((document) => (
            <DocumentTableRow
              key={document.id}
              document={document}
              selected={selectedDocuments.includes(document)}
              setSelectedDocuments={setSelectedDocuments}
              selectedDocuments={selectedDocuments}
              columns={columns}
              onRowClick={onRowClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
