import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import Main from '~/pages/Main';
import Cart from '~/pages/Cart';
import { colors } from '~/styles';

const MainStack = createStackNavigator(
  {
    Main,
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTintColor: colors.primary,
    },
  },
);

const CartStack = createStackNavigator(
  {
    Cart,
  },
  {
    headerLayoutPreset: 'center',
    // defaultNavigationOptions: {
    //   headerTintColor: colors.primary,
    // },
  },
);

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Main: { screen: MainStack },

      Cart: { screen: CartStack },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Main') {
            iconName = 'home';
          } else if (routeName === 'Cart') {
            iconName = 'shopping-cart';
          }
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.regular,
      },
    },
  ),
);

export default Routes;
