export interface ProjectFormData {
  id: number;
  targetDate: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  lead: string;
  labels: string;
}

export interface Project extends ProjectFormData {
  id: number;
}

export const initialFormData: ProjectFormData = {
  id: 0,
  targetDate: '',
  title: '',
  description: '',
  status: 'new',
  priority: 'low',
  lead: '',
  labels: '',
};
