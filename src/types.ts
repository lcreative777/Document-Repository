export type DocumentType = 'Research' | 'Faculty' | 'Taxonomy' | 'Institutional';

export interface Submission {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  type: DocumentType;
  modified: string;
  status?: 'Pending' | 'Archived' | 'Active';
}

export interface RepositoryItem {
  id: string;
  title: string;
  major: string;
  level: 'Graduate' | 'Undergrad' | 'Institutional';
  year: string;
  filesCount: number;
  uploadedBy: string;
  authorAvatar: string;
  date: string;
  fileType: 'PDF' | 'DOC' | 'XLS' | 'PPT';
}
