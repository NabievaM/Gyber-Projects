import styled from '@emotion/styled';

export const SearchHistoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;

export const SearchHistoryItem = styled.li`
  display: inline-flex;
  align-items: center;
  background: #e5e6ee;
  padding: 5px 10px;
  border-radius: 4px;
  gap: 5px;
`;

export const DeleteIcon = styled.img`
  cursor: pointer;
`;
