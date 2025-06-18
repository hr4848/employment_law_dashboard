'use client'

import { useState } from 'react'
import DocumentDashboardPanel from './documents-dashboard-panel'
import DocumentDrawer from '@/components/document-list/DocumentDrawer'
import { Document } from '@/types/Documents'

export default function DocumentDashboardClient() {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-8">
        <div className="flex flex-col md:flex-row md:-mr-px">
          <DocumentDashboardPanel
            onDocumentClick={(document) => {
              console.log('✅ setSelectedDocument', document)
              setSelectedDocument(document)
            }}
          />
        </div>
      </div>

      <DocumentDrawer
        document={selectedDocument}
        onClose={() => {
          console.log('✅ Drawer closed')
          setSelectedDocument(null)
        }}
      />
    </div>
  )
}
