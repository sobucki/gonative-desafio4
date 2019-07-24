import React, { Component } from 'react';

import { View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

export default class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
    tabBarIcon: TabIcon,
  };

  render() {
    return <View />;
  }
}
