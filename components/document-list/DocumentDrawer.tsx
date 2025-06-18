'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Document } from '@/types/Documents'

interface DocumentDrawerProps {
  document: Document | null
  onClose: () => void
}

export default function DocumentDrawer({ document, onClose }: DocumentDrawerProps) {
  if (!document) return null

  const formatDate = (date: string | null | undefined) =>
    date ? new Date(date).toLocaleDateString('en-GB') : '-'

  const getStatusBadge = (status: string | null | undefined) => {
    const base = 'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium'
    switch (status) {
      case 'Not Started':
        return <span className={`${base} bg-gray-100 text-gray-600`}>{status}</span>
      case 'In Progress':
        return <span className={`${base} bg-blue-100 text-blue-700`}>{status}</span>
      case 'Completed':
        return <span className={`${base} bg-green-100 text-green-700`}>{status}</span>
      case 'Blocked':
        return <span className={`${base} bg-red-100 text-red-700`}>{status}</span>
      default:
        return <span className={`${base} bg-yellow-100 text-yellow-800`}>{status || 'Unknown'}</span>
    }
  }

  return (
    <Dialog open={!!document} onClose={onClose} className="fixed inset-0 z-[9999]">
      <div className="fixed inset-0 z-[9999] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel className="pointer-events-auto w-screen max-w-4xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700">
              <form className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div className="flex-1">
                  {/* Header */}
                  <div className="bg-gray-50 px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between space-x-3">
                      <div className="space-y-1">
                        <DialogTitle className="text-base font-semibold text-gray-900">
                          {document.document_name || 'Untitled Document'}
                        </DialogTitle>
                        <p className="text-sm text-gray-500">Document details and supporting information.</p>
                      </div>
                      <div className="flex h-7 items-center">
                        <button
                          type="button"
                          onClick={onClose}
                          className="relative text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Info sections */}
                  <div className="space-y-6 py-6 sm:divide-y sm:divide-gray-200">
                    {/* Status */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                      <label className="block text-sm font-medium text-gray-900 sm:mt-1.5">Status</label>
                      <div className="sm:col-span-2">{getStatusBadge(document.status)}</div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                      <label className="block text-sm font-medium text-gray-900 sm:mt-1.5">Description</label>
                      <div className="sm:col-span-2">
                        <p className="text-sm text-gray-700 whitespace-pre-wrap">
                          {document.description || 'No description provided.'}
                        </p>
                      </div>
                    </div>

                    {/* Additional Info */}
                    {[
                      ['Category', document.category],
                      ['Task Number', document.task_number],
                      // ['Start Date', formatDate(document.start_date)],
                      // ['Due Date', formatDate(document.due_date)],
                      // ['Links', document.links?.join(', ')],
                    ].map(([label, value], index) => (
                      <div
                        key={index}
                        className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5"
                      >
                        <label className="block text-sm font-medium text-gray-900 sm:mt-1.5">{label}</label>
                        <div className="sm:col-span-2">
                          <p className="text-sm text-gray-700 whitespace-pre-wrap">
                            {typeof value === 'string' ? value : value || '-'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
