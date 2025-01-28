import { useNavigate } from 'react-router-dom';
import { SidebarContainer, SidebarButton, SidebarLink } from './styled';

export const Sidebar = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  const handleCreateProject = () => {
    navigate('/create-project');
  };

  return (
    <SidebarContainer>
      <SidebarButton
        onClick={handleCreateProject}
        isActive={currentPath === '/create-project'}
      >
        Create
      </SidebarButton>
      <SidebarLink
        to="/"
        className={currentPath === '/' ? 'active' : ''}
      >
        Projects
      </SidebarLink>
      <SidebarLink
        to="/invites"
        className={currentPath === '/invites' ? 'active' : ''}
      >
        Invites
      </SidebarLink>
      <SidebarLink
        to="/users"
        className={currentPath === '/users' ? 'active' : ''}
      >
        Users
      </SidebarLink>
      <SidebarLink
        to="/teams"
        className={currentPath === '/teams' ? 'active' : ''}
      >
        Teams
      </SidebarLink>
    </SidebarContainer>
  );
};
