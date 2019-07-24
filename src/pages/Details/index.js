import React, { Component } from 'react';

import { View, Image, Text } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  DetailItem,
  Name,
  Brand,
  Price,
  AddToCart,
  TextButton,
  ImageProduct,
} from './styles';

export default class Details extends Component {
  static navigationOptions = () => ({
    title: 'Detalhe do produto',
  });

  render() {
    const { navigation } = this.props;
    const product = navigation.getParam('product');
    console.tron.log(product);
    return (
      <Container>
        <DetailItem>
          <ImageProduct source={{ uri: product.image }} />
          <Name>{product.name}</Name>
          <Brand>{product.brand}</Brand>
          <Price>{product.price}</Price>
          <AddToCart>
            <TextButton>Adicionar ao carrinho</TextButton>
          </AddToCart>
        </DetailItem>
      </Container>
    );
  }
}
