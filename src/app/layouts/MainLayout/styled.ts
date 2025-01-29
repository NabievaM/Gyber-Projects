import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainContent = styled.main`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  overflow: hidden;
`;

export const SidebarContainer = styled.aside`
  grid-column: 1 / 2;
  background-color: #30333f;
  color: white;
  padding: 20px;
  overflow-y: auto;
`;

export const PageContent = styled.section`
  grid-column: 2 / 3;
  padding: 20px;
  background-color: #434555;
  overflow-y: auto;
`;
