import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 10px;
  color: #fff;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #ffffff;
  margin-top: 10px;
  font-weight: bold;
`;

export const TextArea = styled.textarea`
  font-size: 14px;
  padding: 8px;
  border-radius: 15px;
  background-color: #30333f;
  outline: none;
  border: none;
  color: white;
  resize: vertical;
  margin-top: 5px;
`;

export const Select = styled.select`
  font-size: 14px;
  padding: 8px;
  border-radius: 15px;
  background-color: #30333f;
  outline: none;
  border: none;
  color: white;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Breadcrumb = styled.div`
  display: flex;
  font: italic 20px sans-serif;
`;

export const BreadcrumbLink = styled.a`
  color: #65a8ff;
  text-decoration: none;
  margin-right: 5px;
`;

export const Heading = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin: 5px 0;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
