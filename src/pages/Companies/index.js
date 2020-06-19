import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { useDispatch } from 'react-redux';

import BK from '~/assets/img/bk.png';
import { Creators as CompaniesActions } from '~/store/modules/companies/duck';

import { Item, Logo, Name, ItemInfo, Description, Stats } from './styles';

const Companies = ({ navigation }) => {
  const dispatch = useDispatch();

  // const companies = useSelector((state) => state.companies.companies);

  const companiess = [
    {
      id: '00',
      name: 'Hunger Steakhouse',
      description: 'Porçoes, Lanches Artesanais',
      deliveryTime: '20 - 40',
      evaluation: 4.8,
    },
    {
      id: '01',
      name: 'Gula Nordestina',
      description: 'Pratos especiais, Tapioca e Salgados',
      deliveryTime: '15 - 40',
      evaluation: 4.9,
    },
    {
      id: '02',
      name: '40 Sabores - Domingos Martins',
      description: 'Açaí, Sorvete',
      deliveryTime: '30 - 90',
      evaluation: 4.5,
    },
    {
      id: '03',
      name: `Lex's Burgers`,
      description: 'Lanches, Porções, Caldos e Bebidas',
      deliveryTime: '30 - 70',
      evaluation: 4.5,
    },
  ];

  useEffect(() => {
    dispatch(CompaniesActions.companiesRequest());
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={companiess}
        renderItem={({ item }) => (
          <Item onPress={() => navigation.navigate('Menu', { item })}>
            <Logo source={BK} />
            <ItemInfo>
              <Name>{item.name}</Name>
              <Description>{item.description}</Description>
              <Stats>
                <Icon name="clock" />
                &nbsp;&nbsp;{item.deliveryTime} minutos
              </Stats>
              <Stats>
                <Icon name="star" />
                &nbsp;&nbsp;{item.evaluation}
              </Stats>
            </ItemInfo>
          </Item>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default Companies;
