import React from 'react'

export function getStatusBadge(status: string | null | undefined) {
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
