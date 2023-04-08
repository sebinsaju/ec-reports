import { Link } from 'react-router-dom';
// import { ReactComponent as LogoDark } from 'src/assets/images/logos/dark-logo.svg';
import { styled } from '@mui/material';
import logo from "../../../../assets/images/logos/logo.png";

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <img src={logo} style={{width:"100%",margin:"auto"}}/>
    </LinkStyled>
  )
};

export default Logo;
