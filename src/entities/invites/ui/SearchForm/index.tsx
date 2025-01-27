import React from 'react';
import { StyledForm, FormRow } from './styled';
import { Input, Button, Select } from '@/shared/ui';

type SearchFormProps = {
  formData: {
    search: string;
    status: string;
    priority: string;
    lead: string;
    reporter: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      search: string;
      status: string;
      priority: string;
      lead: string;
      reporter: string;
    }>
  >;
  handleClear: () => void;
  handleApply: () => void;
  handleSearch: (e: React.FormEvent) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({
  formData,
  setFormData,
  handleClear,
  handleApply,
  handleSearch,
  handleKeyDown,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <StyledForm onSubmit={handleSearch}>
      <FormRow>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Input
            type="text"
            placeholder="Search"
            name="search"
            value={formData.search}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <Button>Me</Button>
          <Select
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={[
              { value: '', label: 'Status' },
              { value: 'new', label: 'New' },
              { value: 'in-progress', label: 'In Progress' },
              { value: 'completed', label: 'Completed' },
              { value: 'to-do', label: 'To Do' },
              { value: 'on-hold', label: 'On Hold' },
              { value: 'cancelled', label: 'Cancelled' },
            ]}
          />
          <Select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: '', label: 'Priority' },
              { value: 'low', label: 'Low' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' },
            ]}
          />
          <Select
            name="lead"
            value={formData.lead}
            onChange={handleChange}
            options={[
              { value: '', label: 'Lead' },
              { value: 'lead1', label: 'Lead 1' },
              { value: 'lead2', label: 'Lead 2' },
              { value: 'lead3', label: 'Lead 3' },
            ]}
          />

          <Select
            name="reporter"
            value={formData.reporter}
            onChange={handleChange}
            options={[
              { value: '', label: 'Reporter' },
              { value: 'Reporter1', label: 'Reporter 1' },
              { value: 'Reporter2', label: 'Reporter 2' },
              { value: 'Reporter3', label: 'Reporter 3' },
            ]}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            onClick={handleClear}
            variant="secondary"
          >
            Clear
          </Button>
          <Button
            onClick={handleApply}
            variant="primary"
          >
            Apply
          </Button>
        </div>
      </FormRow>
    </StyledForm>
  );
};
