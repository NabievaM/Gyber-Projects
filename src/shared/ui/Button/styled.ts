import styled from '@emotion/styled';

export const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  background-color: #d6d9dd;
  color: #30333f;

  ${({ variant }) =>
    variant === 'primary' &&
    `
      background-color: #E5E6EE;
      color: #30333F;
      border: none;
      transition: all 0.3s ease;

      &:hover {
        background-color: #7ea4c0;
        transform: scale(1.05);
        color: #fff;
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
      background-color: #30333F;
      color: #E5E6EE;
      border: 1px solid #E5E6EE;
      transition: all 0.3s ease;

      &:hover {
        border: 1px solid #E5E6EE;
        background-color: #4f5461;
        color: #fff;
        transform: scale(1.05);
      }
    `}
`;
