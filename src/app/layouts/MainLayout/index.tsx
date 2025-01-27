import { Navbar, Sidebar } from '@/widgets';
import { Outlet } from 'react-router-dom';
import '../../styles/globals.css';

export const MainLayout = () => {
  return (
    <main className="layout">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
