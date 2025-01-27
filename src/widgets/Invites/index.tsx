import React, { useState } from 'react';
import { InvitesHeader, InvitesSearchForm, InvitesList } from '@/entities';

export const InvitesSection = () => {
  const [formData, setFormData] = useState({
    search: '',
    status: '',
    priority: '',
    lead: '',
    reporter: '',
  });

  const handleClear = () => {
    setFormData({
      search: '',
      status: '',
      priority: '',
      lead: '',
      reporter: '',
    });
  };

  const handleApply = () => {};

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(e as unknown as React.FormEvent);
    }
  };

  return (
    <>
      <InvitesHeader />
      <InvitesSearchForm
        formData={formData}
        setFormData={setFormData}
        handleClear={handleClear}
        handleApply={handleApply}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
      />
      <InvitesList />
    </>
  );
};
