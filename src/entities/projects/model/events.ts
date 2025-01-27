import { createEvent } from 'effector';
import { Project } from './types';

export const addProject = createEvent<Project>();
export const updateProject = createEvent<Project>();
export const removeProject = createEvent<number>();
