import { useState } from 'react';
import { useUnit } from 'effector-react';
import { $projects } from '@/entities/projects/model/store';
import { ProjectsHeader } from '@/entities/projects';
import { ProjectsSearchForm } from '@/entities/projects';
import { ProjectsList } from '@/entities/projects';
import { SearchHistory } from '@/features/project-search/ui/SearchHistory';
import { filterProjects } from '@/features/project-search/lib/filters';
import { Container, Error } from './styled';
import { Project } from '@/entities/projects/model/types';

export const ProjectsSection = () => {
  const allProjects = useUnit($projects);

  const [formData, setFormData] = useState({
    search: '',
    status: '',
    priority: '',
    lead: '',
  });

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchError, setSearchError] = useState(false);

  const handleClear = () => {
    setFormData({
      search: '',
      status: '',
      priority: '',
      lead: '',
    });
    setFilteredProjects(allProjects);
    setSearchError(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const filtered = filterProjects(allProjects, formData);

    if (filtered.length > 0) {
      setFilteredProjects(filtered);
      setSearchError(false);
    } else {
      setSearchError(true);
      setTimeout(() => setSearchError(false), 3000);
      setFilteredProjects([]);
    }

    if (formData.search.trim()) {
      setSearchHistory(prevHistory =>
        prevHistory.includes(formData.search.trim())
          ? prevHistory
          : [...prevHistory, formData.search.trim()]
      );
    }

    setFormData({ ...formData, search: '' });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(e as any);
    }
  };

  return (
    <Container>
      <ProjectsHeader />
      <ProjectsSearchForm
        formData={formData}
        setFormData={setFormData}
        handleClear={handleClear}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
      />

      {searchError && <Error>No such project exists</Error>}

      <SearchHistory
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />

      <ProjectsList projects={filteredProjects.length > 0 ? filteredProjects : []} />
    </Container>
  );
};
