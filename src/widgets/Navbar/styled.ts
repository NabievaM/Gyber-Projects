import styled from '@emotion/styled';

export const StyledNavbar = styled.nav`
  background-color: #2a2c35;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 35px;
    height: 35px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const NavbarProjects = styled.p`
  margin-right: 250px;
`;

export const Input = styled.input`
  height: 35px;
  width: 405px;
  background: #30333f;
  border-radius: 10px;
  border: none;
  padding: 0 15px;
  font-size: 15px;
  color: white;
  outline: none;

  ::placeholder {
    color: white;
  }
`;

export const IconButtons = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 55px;
`;

export const ProfileIcon = styled.img`
  width: 39px !important;
  height: 40px !important;
`;
