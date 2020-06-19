import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
// import { useSelector } from 'react-redux';

import Companies from '~/pages/Companies';
import Dashboard from '~/pages/Dashboard';
import Menu from '~/pages/Menu';

const Stack = createStackNavigator();

// const stackOptions = {
//   headerShown: false,
// };

function Routes() {
  // const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {/* {signed ? ( */}
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Estabelecimentos" component={Companies} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
      {/* ) : (
        <Stack.Navigator screenOptions={stackOptions}>
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )} */}
    </NavigationContainer>
  );
}

export default Routes;
