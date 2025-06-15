export const metadata = {
  title: 'Grievance Pack - Employment Rights Toolkit',
  description: 'Page description', 
}

import PacksSidebar from '../grievance-packs-sidebar'
import GrievancePanel from './grievance-panel'

export default function AccountSettings() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

      {/* Page header */}
      <div className="mb-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Grievance Pack</h1>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-8">
        <div className="flex flex-col md:flex-row md:-mr-px">

          <PacksSidebar />
          <GrievancePanel />

        </div>
      </div>

    </div>
  )
}