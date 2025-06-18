import { Task } from '@/types/Task'
import { getStatusBadge } from '@/utils/statusBadge'

interface TaskTableRowProps {
  task: Task
  selected: boolean
  selectedTasks: Task[]
  setSelectedTasks: React.Dispatch<React.SetStateAction<Task[]>>
  columns: string[]
  onRowClick?: (task: Task) => void
}

// const toggle = (e: React.ChangeEvent<HTMLInputElement>) => {  -//TODO - to add
//   e.stopPropagation() // prevent row click when toggling checkbox
//   if (e.target.checked) {
//     setSelectedTasks([...selectedTasks, task])
//   } else {
//     setSelectedTasks(selectedTasks.filter((t) => t.id !== task.id))
//   }
// }
export default function TaskTableRow({
  task,
  selected,
  selectedTasks,
  setSelectedTasks,
  columns,
  onRowClick,
}: TaskTableRowProps) {
  // const toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.stopPropagation()
  //   setSelectedTasks(
  //     e.target.checked
  //       ? [...selectedTasks, task]
  //       : selectedTasks.filter((t) => t !== task)
  //   )
  // }

  const formatValue = (key: string): string => {
    const value = task[key as keyof Task]

    if (key === 'start_date' || key === 'due_date') {
      return value ? new Date(value as string).toLocaleDateString('en-GB') : '-'
    }

    return value ? String(value) : '-'
  }

  return (
    <tr
      className={`cursor-pointer hover:bg-gray-50 ${selected ? 'bg-gray-50' : ''}`}
      onClick={() => {
        console.log('✅ Task clicked', task)
        onRowClick?.(task)
      }}
    >
      {/* <td className="px-7 sm:px-6">
        <input
          type="checkbox"
          checked={selected}
          onChange={toggle}
          className="rounded-sm border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
      </td> */}
      {columns.map((col) => (
        <td key={col} className="px-3 py-4 text-sm text-gray-500">
          {col === 'status'
            ? getStatusBadge(task.status)
            : formatValue(col)}
        </td>
      ))}
    </tr>
  )
}
