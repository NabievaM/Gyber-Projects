import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  border: 2.5px solid #30333f;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: white;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  background-color: #30333f;
  color: white;
  padding: 15px;
  font-size: 16px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e5e6ee;
  text-align: center;
`;

export const TableCell = styled.td`
  padding: 10px;
  font-size: 14px;

  img {
    cursor: pointer;
  }
`;

export const EmptyState = styled.div`
  margin-top: 120px;
  margin-bottom: 100px;
  text-align: center;
  font-size: 20px;

  .no-projects {
    color: #fff;
  }

  .go-to-invites {
    color: #65a8ff;
    text-decoration: none;
    font-weight: bold;
  }
`;
