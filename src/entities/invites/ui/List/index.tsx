import { useUnit } from 'effector-react';
import { $invites } from '../../model/store';
import {
  TableWrapper,
  TableContainer,
  TableHeader,
  TableRow,
  TableCell,
  EmptyState,
  AcceptButton,
  RejectButton
} from './styled';

export const InvitesList = () => {
  const invites = useUnit($invites);

  return (
    <TableWrapper>
      <TableContainer>
        <thead>
          <TableRow>
            <TableHeader>Title</TableHeader>
            <TableHeader>Lead</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {invites.length > 0 ? (
            invites.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.lead}</TableCell>
                <TableCell>
                  <AcceptButton>Accept</AcceptButton>
                  <RejectButton>Reject</RejectButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <tr>
              <td colSpan={6}>
                <EmptyState>
                  <span className="no-invites">You have no invites yet. Please wait.</span>
                </EmptyState>
              </td>
            </tr>
          )}
        </tbody>
      </TableContainer>
    </TableWrapper>
  );
};
