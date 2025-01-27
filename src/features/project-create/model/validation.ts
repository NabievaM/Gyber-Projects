import { ProjectFormData } from './formdata';

export const validateFormData = (formData: ProjectFormData) => {
  const errors: Record<string, string> = {};

  if (!formData.title.trim()) {
    errors.title = 'Title is required.';
  }
  if (!formData.description.trim()) {
    errors.description = 'Description is required.';
  }

  return errors;
};
