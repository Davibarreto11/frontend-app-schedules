import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo-purple.svg';
import avatar from '../../../assets/avatar.jpg';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Davi Artur</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src={avatar} alt="Davi Artur" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
