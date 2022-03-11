import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text } from "react-native"
import { Link } from '@react-navigation/native';

import { Container, TitleText, AdminAcess, AdminAcessButton } from './styles';

export function SignIn() {

  return(
    <Container>
      <AdminAcess>
        <Link to={{ screen: 'admin-signin'}}>
          <AdminAcessButton>Sou administrador</AdminAcessButton>  
        </Link>
      </AdminAcess>

      <TitleText>Entrar</TitleText>
    </Container>
  );
}