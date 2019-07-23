import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Menu from '~/components/Menu';

import CatalogAction from '~/store/ducks/catalog';

import {
  Container,
  Header,
  HeaderTitle,
  ItemList,
  ItemFolder,
  ImageItem,
  ItemName,
  ItemBrand,
  ItemPrice,
} from './styles';

const products = [
  {
    id: 1,
    name: 'Camiseta Hyperas Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
    price: 49.99,
  },
  {
    id: 2,
    name: 'Camiseta Double Tap Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
    price: 59.99,
  },
  {
    id: 3,
    name: 'Camiseta Logo Azul',
    brand: 'Red Bull',
    image:
      'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
    price: 54.99,
  },
  {
    id: 4,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
  {
    id: 5,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
  {
    id: 6,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
  {
    id: 7,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
  {
    id: 8,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
  {
    id: 9,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
  {
    id: 10,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
  {
    id: 11,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
];

class Main extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Header>
          <HeaderTitle>GoCommerce</HeaderTitle>
        </Header>

        <Menu />

        <ItemList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ItemFolder>
              <ImageItem source={{ uri: item.image }} />
              <ItemName>{item.brand}</ItemName>
              <ItemBrand>{item.name}</ItemBrand>
              <ItemPrice>{item.price}</ItemPrice>
            </ItemFolder>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  catalog: state.catalog,
});

const mapDispatchToProps = dispatch => bindActionCreators(CatalogAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
