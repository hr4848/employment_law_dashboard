export type DocumentStatus = 'Not Started' | 'Draft Created' | 'Completed';

export interface Document {
  id: number;
  category: string;
  stage: string;
  stage_id: number;
  task_number: number;
  document_name: string;
  description: string;
  status: DocumentStatus;
  links: string | null;  // if links is nullable
}
