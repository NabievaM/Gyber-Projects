import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@/shared/ui';
import {
  PRIORITY_OPTIONS,
  ProjectFormData,
  STATUS_OPTIONS,
  initialFormData,
  validateFormData,
} from '../../model';
import {
  Form,
  Label,
  TextArea,
  Select,
  BtnContainer,
  Breadcrumb,
  BreadcrumbLink,
  Heading,
  ErrorText,
} from './styled';
import { addProject } from '@/entities/projects/model/events';
import { Project } from '@/entities/projects/model/types';

export const ProjectCreate: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleClear = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const projectData: Project = {
      ...formData,
      id: Date.now(),
    };

    addProject(projectData);
    navigate('/');
    handleClear();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Breadcrumb>
        <BreadcrumbLink href="/">Projects</BreadcrumbLink>/ Create Project
      </Breadcrumb>
      <Heading>Create Project</Heading>

      <Label htmlFor="targetDate">Target Date</Label>
      <Input
        type="text"
        placeholder="Target Date"
        id="targetDate"
        name="targetDate"
        value={formData.targetDate}
        onChange={handleChange}
      />

      <Label htmlFor="title">Title *</Label>
      <Input
        type="text"
        placeholder="Title"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      {errors.title && <ErrorText>{errors.title}</ErrorText>}

      <Label htmlFor="description">Description *</Label>
      <TextArea
        id="description"
        name="description"
        placeholder="Write description..."
        value={formData.description}
        onChange={handleChange}
        rows={4}
        required
      />
      {errors.description && <ErrorText>{errors.description}</ErrorText>}

      <Label htmlFor="status">Status *</Label>
      <Select
        id="status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        required
      >
        {STATUS_OPTIONS.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </Select>

      <Label htmlFor="priority">Priority *</Label>
      <Select
        id="priority"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        required
      >
        {PRIORITY_OPTIONS.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </Select>

      <Label htmlFor="lead">Lead</Label>
      <Input
        type="text"
        placeholder="Search assignee"
        id="lead"
        name="lead"
        value={formData.lead}
        onChange={handleChange}
      />

      <Label htmlFor="labels">Labels</Label>
      <Input
        type="text"
        placeholder="Labels"
        id="labels"
        name="labels"
        value={formData.labels}
        onChange={handleChange}
      />

      <BtnContainer>
        <Button
          variant="secondary"
          onClick={handleClear}
        >
          Clear
        </Button>
        <Button variant="primary">Ok</Button>
      </BtnContainer>
    </Form>
  );
};
