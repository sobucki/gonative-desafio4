import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartAction from '~/store/ducks/cart';

import {
  Container,
  DetailItem,
  Name,
  Brand,
  Price,
  AddToCart,
  TextButton,
  ImageProduct,
  OverallView,
  InfoView,
  PriceView,
} from './styles';

class Details extends Component {
  static navigationOptions = () => ({
    title: 'Detalhe do produto',
  });

  addProduct(product) {
    const { addProductToCart } = this.props;
    addProductToCart(product);
  }

  render() {
    const { navigation } = this.props;
    const product = navigation.getParam('product');
    return (
      <Container>
        <DetailItem>
          <ImageProduct source={{ uri: product.image }} />
          <OverallView>
            <InfoView>
              <Name>{product.name}</Name>
              <Brand>{product.brand}</Brand>
            </InfoView>
            <PriceView>
              <Price>{`R$${product.price}`}</Price>
            </PriceView>
          </OverallView>
          <AddToCart onPress={() => this.addProduct(product)}>
            <TextButton>Adicionar ao carrinho</TextButton>
          </AddToCart>
        </DetailItem>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(Details);
