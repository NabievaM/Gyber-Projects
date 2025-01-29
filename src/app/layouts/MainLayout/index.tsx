import { Navbar, Sidebar } from '@/widgets';
import { Outlet } from 'react-router-dom';
import '../../styles/globals.css';
import { Layout, MainContent, SidebarContainer, PageContent } from './styled';

export const MainLayout = () => {
  return (
    <Layout>
      <Navbar />
      <MainContent>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <PageContent>
          <Outlet />
        </PageContent>
      </MainContent>
    </Layout>
  );
};
