'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Task } from '@/types/Task'
import TaskTableHeader from './TaskTableHeader'
import TaskTableRow from './TaskTableRow'
import BulkActionsBar from './BulkActionsBar'

export default function TaskTable({
  stageId,
  columns = ['status', 'task_name', 'description'],
  onRowClick,
}: {
  stageId: number | number[];
  columns?: string[]
  onRowClick?: (task: Task) => void
}) {
  const checkbox = useRef<HTMLInputElement>(null)
  const [tasks, setTasks] = useState<Task[]>([])
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([])
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  useEffect(() => {
    const loadTasks = async () => {
      let query = supabase.from('tasks').select('*')

      if (Array.isArray(stageId)) {
        query = query.in('stage_id', stageId)
      } else {
        query = query.eq('stage_id', stageId)
      }

      const { data, error } = await query

      if (error) {
        console.error('❌ Failed to load tasks:', error.message)
      } else {
        setTasks(data as Task[])
      }
    }

    loadTasks()
  }, [stageId])

  const sortedTasks = [...tasks].sort((a, b) => {
    if (!sortColumn) return 0

    const aValue = a[sortColumn as keyof Task]
    const bValue = b[sortColumn as keyof Task]

    if (aValue == null) return 1
    if (bValue == null) return -1

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    }

    return 0
  })

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedTasks.length > 0 && selectedTasks.length < tasks.length

    setChecked(selectedTasks.length === tasks.length)
    setIndeterminate(isIndeterminate)

    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate
    }
  }, [selectedTasks, tasks])

  const toggleAll = () => {
    setSelectedTasks(checked || indeterminate ? [] : tasks)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

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
    <div className="px-4 sm:px-6 lg:px-8">
      {selectedTasks.length > 0 && <BulkActionsBar />}
      <table className="min-w-full divide-y divide-gray-300">
        <TaskTableHeader
          // checkboxRef={checkbox}
          // checked={checked}
          // toggleAll={toggleAll}
          columns={columns}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSort={handleSort}
        />

        <tbody className="divide-y divide-gray-200 bg-white">
          {sortedTasks.map((task) => (
            <TaskTableRow
              key={task.id}
              task={task}
              selected={selectedTasks.includes(task)}
              setSelectedTasks={setSelectedTasks}
              selectedTasks={selectedTasks}
              columns={columns}
              onRowClick={onRowClick}
              // getStatusBadge={getStatusBadge}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
