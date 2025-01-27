import { Project } from '@/entities/projects/model/types';

export const filterProjects = (
  projects: Project[],
  formData: { search: string; status: string; priority: string; lead: string }
) => {
  const searchLower = formData.search.toLowerCase();

  return projects.filter(project => {
    const titleMatch = project.title.toLowerCase().includes(searchLower);
    const statusMatch =
      !formData.status || project.status.toLowerCase() === formData.status.toLowerCase();
    const priorityMatch =
      !formData.priority || project.priority.toLowerCase() === formData.priority.toLowerCase();
    const leadMatch = !formData.lead || project.lead.toLowerCase() === formData.lead.toLowerCase();

    return titleMatch && statusMatch && priorityMatch && leadMatch;
  });
};
