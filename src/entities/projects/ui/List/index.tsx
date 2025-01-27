import React, { useState } from 'react';
import MenuIcon from '@/shared/assets/menu.svg';
import {
  TableWrapper,
  TableContainer,
  TableHeader,
  TableRow,
  TableCell,
  EmptyState,
} from './styled';
import Modal from '../Modal.tsx';
import { Project } from '@/entities/projects/model/types';

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects: initialProjects }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const handleMenuClick = (projectId: number) => {
    setActiveProjectId(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveProjectId(null);
  };

  const handleDeleteProject = () => {
    if (activeProjectId !== null) {
      const updatedProjects = projects.filter(project => project.id !== activeProjectId);
      setProjects(updatedProjects);
    }
    handleCloseModal();
  };

  return (
    <>
      <TableWrapper>
        <TableContainer>
          <thead>
            <TableRow>
              <TableHeader>Title</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Priority</TableHeader>
              <TableHeader>Lead</TableHeader>
              <TableHeader>Target Date</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.priority}</TableCell>
                  <TableCell>{item.lead}</TableCell>
                  <TableCell>{item.targetDate}</TableCell>
                  <TableCell>
                    <img
                      src={MenuIcon}
                      alt="Menu Icon"
                      onClick={() => handleMenuClick(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <tr>
                <td colSpan={6}>
                  <EmptyState>
                    <span className="no-projects">No such project exists</span>
                  </EmptyState>
                </td>
              </tr>
            )}
          </tbody>
        </TableContainer>
      </TableWrapper>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onDelete={handleDeleteProject}
        />
      )}
    </>
  );
};
