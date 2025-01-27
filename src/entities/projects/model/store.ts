import { createStore } from 'effector';
import { Project } from './types';
import { addProject, removeProject, updateProject } from './events';

export const $projects = createStore<Project[]>([
  {
    id: 1,
    title: 'Project 1',
    status: 'In Progress',
    priority: 'High',
    lead: 'Egor',
    targetDate: '2025-02-01',
  },
  {
    id: 2,
    title: 'Project 2',
    status: 'Done',
    priority: 'Medium',
    lead: 'Alina',
    targetDate: '2025-01-15',
  },
  {
    id: 3,
    title: 'Project 3',
    status: 'Not Started',
    priority: 'Low',
    lead: 'Karim',
    targetDate: '2025-03-10',
  },
  {
    id: 4,
    title: 'Project 4',
    status: 'In Progress',
    priority: 'High',
    lead: 'Aleksandr',
    targetDate: '2025-04-20',
  },
  {
    id: 5,
    title: 'Project 5',
    status: 'On Hold',
    priority: 'Medium',
    lead: 'Lead 1',
    targetDate: '2025-05-30',
  },
]);

$projects
  .on(addProject, (state, project) => [...state, project])
  .on(updateProject, (state, updatedProject) =>
    state.map(project =>
      project.id === updatedProject.id ? { ...project, ...updatedProject } : project
    )
  )
  .on(removeProject, (state, projectId) => state.filter(project => project.id !== projectId));
