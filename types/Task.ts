export interface Task {
  id: string
  stage: string
  stage_id: Int32Array
  task_name: string
  description: string
  context: string
  keywords_explained: string
  start_date: string | null
  due_date: string | null
  estimated_time: string
  priority: string
  status: string
  linked_resources: string | null
  notes: string | null
  dependencies: string | null
}
