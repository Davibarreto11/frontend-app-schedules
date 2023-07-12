import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '../../store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './syles';

import DefaultLayout from '../_layouts/default';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const handleSubmit = (data) => {
    dispatch(updateProfileRequest(data));
  };

  return (
    <DefaultLayout>
      <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <AvatarInput name="avatar_id" />

          <Input name="name" placeholder="Nome completo" />
          <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

          <hr />

          <Input type="password" name="oldPassword" placeholder="Senha atual" />
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
