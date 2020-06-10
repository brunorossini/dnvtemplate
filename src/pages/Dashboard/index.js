import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, H1, H1Eina } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Icon name="comments" size={30} color="#000" />
      <H1Eina>Hello World</H1Eina>
      <H1>Hello World</H1>
    </Container>
  );
};

export default Dashboard;
