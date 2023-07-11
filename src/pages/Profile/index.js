import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './syles';

import DefaultLayout from '../_layouts/default';

function Profile() {
  const profile = useSelector((state) => state.user.profile);

  const handleSubmit = () => {

  };

  return (
    <DefaultLayout>
      <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome completo" />
          <Input name="email" placeholder="Seu endereço de e-mail" />

          <hr />

          <Input type="password" name="oldpassword" placeholder="Senha atual" />
          <Input type="password" name="password" placeholder="Nova senha" />
          <Input type="password" name="confirmPassword" placeholder="Confirme senha" />

          <button type="submit">Atualizar perfil</button>
        </Form>

        <button type="button">Sair</button>
      </Container>
    </DefaultLayout>
  );
}

export default Profile;
