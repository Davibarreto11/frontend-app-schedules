import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import AuthLayout from '../_layouts/auth';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function Signup() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <img src={logo} alt="Gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar contar</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </AuthLayout>
  );
}

export default Signup;
