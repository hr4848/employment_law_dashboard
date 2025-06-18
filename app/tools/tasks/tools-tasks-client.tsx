'use client'

import { useState } from 'react'
// import PacksSidebar from '../grievance-packs-sidebar'
import ToolTaskPanel from './tool-tasks-panel'
import TaskDrawer from '@/components/tasks/TaskDrawer'
import { Task } from '@/types/Task'

export default function ToolTasksClient() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Grievance Pack</h1>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-8">
        <div className="flex flex-col md:flex-row md:-mr-px">
          {/* <PacksSidebar /> */}
            <ToolTaskPanel
            onTaskClick={(task) => {
                console.log('✅ setSelectedTask', task)
                setSelectedTask(task)
            }}
            />

        </div>
      </div>

        <TaskDrawer
        task={selectedTask}
        onClose={() => {
            console.log('✅ Drawer closed')
            setSelectedTask(null)
        }}
        />
    </div>
  )
}
