import TaskTable from '@/components/tasks/TaskTable'
import { Task } from '@/types/Task'

export default function GrievanceTaskPanel({
  onTaskClick,
}: {
  onTaskClick: (task: Task) => void
}) {
  return (
    <div className="grow">
      <div className="p-6 space-y-6">
        {/* About section */}
        <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow">
          <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-3">Step-by-Step Actions</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This pack is your structured companion through a complex and often overwhelming process.
          </p>
        </section>

        {/* Task Table */}
        <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow">
          <main className="p-6">
            <TaskTable
              stageId={1}
              columns={['status', 'task_name', 'description']}
              onRowClick={(task) => {
                console.log('✅ onTaskClick', task)
                onTaskClick(task)
              }}
            />
          </main>
        </section>
      </div>
    </div>
  )
}
