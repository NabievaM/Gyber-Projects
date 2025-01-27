import { HomePage, InvitesPage, CreateProjectPage, NotFoundPage } from '@/pages';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('@/app/layouts').then(module => ({ default: module.MainLayout })));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Layout />
              </Suspense>
            }
          >
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/invites"
              element={<InvitesPage />}
            />
            <Route
              path="/create-project"
              element={<CreateProjectPage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
