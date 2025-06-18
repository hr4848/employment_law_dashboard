// ✅ NO 'use client' here
// import PacksSidebar from '../grievance-packs-sidebar'
import DocumentTasksClient from './documents-dashboard-client'
import GlobalSidebar from '@/components/ui/Sidebar/sidebar'

export const metadata = {
  title: 'Tasks - Employment Rights Toolkit',
  description: 'Simple step by step actions for you to take to ensure you best represent yourself during the all stages of your dispute management.',
}

export default function DocumentsTasksPage() {
  return (
    <DocumentTasksClient />
  )
}
