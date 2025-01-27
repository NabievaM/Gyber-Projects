import styled from "@emotion/styled";

export const SidebarContainer = styled.aside`
  width: 250px;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 25px;
`;

export const SidebarButton = styled.button<{ isActive?: boolean }>`
  width: 190px;
  background-color: ${({ isActive }) => (isActive ? "#434555" : "#e5e6ee")};
  color: ${({ isActive }) => (isActive ? "#e5e6ee" : "#434555")};
  font-weight: 700;
  font-size: 24px;
  border: none;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px 0;
  transition: all 0.3s;
  outline: none;

  &:hover {
    background-color: #434555;
    color: #e5e6ee;
    outline: none;
  }
`;

export const SidebarLink = styled.a<{ isActive?: boolean }>`
  color: ${({ isActive }) => (isActive ? "#fff" : "#aaa")};
  background-color: ${({ isActive }) => (isActive ? "#3c3c4e" : "transparent")};
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #3c3c4e;
    color: #fff;
  }
`;
