// ✅ NO 'use client' here
import PacksSidebar from '../grievance-packs-sidebar'
import GrievanceTasksClient from './grievance-tasks-client'

export const metadata = {
  title: 'Grievance Pack - Employment Rights Toolkit',
  description: 'Simple step by step actions for you to take to ensure you best represent yourself during the grievance stage',
}

export default function GrievanceTasksPage() {
  return (
    <GrievanceTasksClient />
  )
}
