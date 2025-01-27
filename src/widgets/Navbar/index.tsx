import {
  StyledNavbar,
  NavbarLogo,
  NavbarProjects,
  Input,
  IconButtons,
  IconsContainer,
  ProfileIcon,
} from './styled';
import Logo from './assets/Logo.svg';
import NotificationIcon from './assets/Notifications.svg';
import SettingIcon from './assets/Settings.svg';
import UserIcon from './assets/User.svg';

const LogoSection = () => (
  <NavbarLogo>
    <img
      src={Logo}
      alt="logo"
    />
    <p>Gyber Planning</p>
  </NavbarLogo>
);

const IconsSection = () => (
  <IconsContainer>
    <div style={{ display: 'flex', gap: '10px' }}>
      <IconButtons>
        <img
          src={NotificationIcon}
          alt="Notification Icon"
        />
      </IconButtons>
      <IconButtons>
        <img
          src={SettingIcon}
          alt="Setting Icon"
        />
      </IconButtons>
    </div>
    <IconButtons>
      <ProfileIcon
        src={UserIcon}
        alt="User Icon"
      />
    </IconButtons>
  </IconsContainer>
);

export const Navbar = () => (
  <StyledNavbar>
    <LogoSection />
    <NavbarProjects>Projects</NavbarProjects>
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Input
        type="text"
        placeholder="Search"
      />
      <IconsSection />
    </div>
  </StyledNavbar>
);
