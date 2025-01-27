import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1010;
`;

export const ModalContent = styled.div`
  color: #30333f;
  border-radius: 8px;
  width: 130px;
  height: 73px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  .modal-buttons {
    display: flex;
    flex-direction: column;

    img {
      margin-right: 5px;
    }

    button {
      all: unset;
      padding: 5px;
      color: #30333f;
      cursor: pointer;
      border-radius: 5px;
      font-size: 15px;
      width: 100%;

      &:hover {
        color: #3089e0;
      }
    }
  }
`;
