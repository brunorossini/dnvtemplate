// import { useRoute } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';

import { Container, Title, Info } from './styles';

const Menu = () => {
  // const route = useRoute();
  // const { item: company } = route.params;
  const { item: company } = {
    item: {
      id: '00',
      name: 'LaVerde Saladeria',
      description: 'Delivery de Salada, Bolos e Marmitas Fitness',
      deliveryTime: '20 - 40',
      evaluation: 4.8,
    },
  };

  return (
    <Container>
      <Title>{company.name}</Title>
      <Info>{company.description}</Info>
      <Info>
        <Icon name="clock" />
        &nbsp;&nbsp;
        {company.deliveryTime} minutos
      </Info>
      <Info>
        <Icon name="star" />
        &nbsp;&nbsp;
        {company.evaluation}
      </Info>
    </Container>
  );
};

export default Menu;
