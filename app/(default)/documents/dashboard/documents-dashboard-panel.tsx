'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import DocumentTable from '@/components/document-list/DocumentTable'
import { Document } from '@/types/Documents'
import { supabase } from '@/lib/supabaseClient'

export default function DocumentDashboardPanel({
  onDocumentClick,
}: {
  onDocumentClick: (document: Document) => void
}) {
  const router = useRouter()
  const [documents, setDocuments] = useState<Document[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)
  const [filterStatus, setFilterStatus] = useState<string | null>(null)
  const [filterStage, setFilterStage] = useState<string | null>(null)

  useEffect(() => {
    const loadDocuments = async () => {
      const { data, error } = await supabase.from('documents').select('*')
      if (error) {
        console.error('Error loading documents:', error)
      } else {
        setDocuments(data as Document[])
      }
    }
    loadDocuments()
  }, [])

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.document_name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus ? doc.status === filterStatus : true
    const matchesStage = filterStage ? doc.stage === filterStage : true
    return matchesSearch && matchesStatus && matchesStage
  })

  return (
    <div className="grow">
      <div className="p-6 space-y-6">

        {/* Top Action Bar */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input
              type="text"
              className="w-64 rounded border border-gray-300 p-2"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="ml-4 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              onClick={() => router.push('/documents/create')}
            >
              Create New Document
            </button>
          </div>

          <div className="flex items-center">
            <button
              className={`rounded border border-gray-300 px-4 py-2 text-sm ${filterOpen ? 'bg-gray-200' : ''}`}
              onClick={() => setFilterOpen(!filterOpen)}
            >
              + Filter Documents
              {(filterStatus || filterStage) && (
                <span className="ml-2 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white w-5 h-5 text-xs">
                  1
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className="mt-2 rounded border border-gray-300 p-4 w-96 bg-white shadow">
            <label className="block mb-4 text-sm font-medium text-gray-700">Filter Documents</label>

            <div className="flex gap-2 mb-4">
              {/* Status Dropdown */}
              <select
                className="flex-1 rounded border border-gray-300 p-2"
                value={filterStatus || ''}
                onChange={(e) => setFilterStatus(e.target.value || null)}
              >
                <option value="">Select Status</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Draft">Draft</option>
              </select>

              {/* Stage Dropdown */}
              <select
                className="flex-1 rounded border border-gray-300 p-2"
                value={filterStage || ''}
                onChange={(e) => setFilterStage(e.target.value || null)}
              >
                <option value="">Select Stage</option>
                <option value="Grievance">Grievance</option>
                <option value="ACAS">ACAS</option>
                <option value="Tribunal Claim">Tribunal Claim</option>
                <option value="Case Management">Case Management</option>
                <option value="Pre-Hearing">Pre-Hearing</option>
                <option value="Final Hearing">Final Hearing</option>
                <option value="Post-Hearing">Post-Hearing</option>
                <option value="Supporting Docs">Supporting Docs</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                className="rounded bg-black text-white px-4 py-2 text-sm"
                onClick={() => setFilterOpen(false)}
              >
                Apply
              </button>
            </div>
          </div>
        )}

        {/* Active Filter Chips */}
        {(filterStatus || filterStage) && (
          <div className="mb-4 flex flex-row flex-wrap gap-2">
            {filterStatus && (
              <span className="inline-flex items-center rounded bg-gray-200 px-3 py-1 text-sm">
                Status: {filterStatus}
                <button className="ml-2 text-gray-600" onClick={() => setFilterStatus(null)}>
                  ✕
                </button>
              </span>
            )}

            {filterStage && (
              <span className="inline-flex items-center rounded bg-gray-200 px-3 py-1 text-sm">
                Stage: {filterStage}
                <button className="ml-2 text-gray-600" onClick={() => setFilterStage(null)}>
                  ✕
                </button>
              </span>
            )}
          </div>
        )}

        {/* Document Table */}
        <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow">
          <main className="p-6">
            <DocumentTable
              documents={filteredDocuments}
              columns={['status', 'document_name', 'description']}
              onRowClick={(document) => {
                console.log('✅ onDocumentClick', document)
                onDocumentClick(document)
              }}
            />
          </main>
        </section>

      </div>
    </div>
  )
}
