import { NavLink, useNavigate } from 'react-router-dom';
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
      <NavLink to="/">
        {({ isActive }) => <SidebarLink isActive={isActive}>Projects</SidebarLink>}
      </NavLink>
      <NavLink to="/invites">
        {({ isActive }) => <SidebarLink isActive={isActive}>Invites</SidebarLink>}
      </NavLink>
      <NavLink to="/users">
        {({ isActive }) => <SidebarLink isActive={isActive}>Users</SidebarLink>}
      </NavLink>
      <NavLink to="/teams">
        {({ isActive }) => <SidebarLink isActive={isActive}>Teams</SidebarLink>}
      </NavLink>
    </SidebarContainer>
  );
};
