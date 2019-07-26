import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import CartAction from '~/store/ducks/cart';

import {
  Container,
  CartList,
  ItemView,
  ProductView,
  ImageView,
  ProductImage,
  ProductInfoView,
  QuantityView,
  NameProduct,
  BrandProduct,
  PriceProduct,
  QuantityInput,
  RemoveItem,
  TotalView,
  SubTotal,
  TotalValue,
} from './styles';

class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  render() {
    const { listOfProducts, updateQuantityProduct, removeProductInCart } = this.props;
    return (
      <Container>
        <CartList
          data={listOfProducts}
          keyExtractor={item => String(item.product.id)}
          renderItem={({ item }) => (
            <ItemView>
              <ProductView>
                <ImageView>
                  <ProductImage source={{ uri: item.product.image }} />
                </ImageView>
                <ProductInfoView>
                  <NameProduct>{item.product.name}</NameProduct>
                  <BrandProduct>{item.product.brand}</BrandProduct>
                  <PriceProduct>{`R$${item.product.price}`}</PriceProduct>
                </ProductInfoView>
              </ProductView>

              <QuantityView>
                <QuantityInput
                  value={String(item.quantity)}
                  onChangeText={(typedText) => {
                    updateQuantityProduct(item.product, typedText);
                  }}
                />
                <RemoveItem
                  onPress={() => {
                    removeProductInCart(item.product);
                  }}
                >
                  <Icon name="remove" size={25} />
                </RemoveItem>
              </QuantityView>
            </ItemView>
          )}
        />

        <TotalView>
          <SubTotal>Subtotal</SubTotal>
          <TotalValue>R$100,00</TotalValue>
        </TotalView>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  listOfProducts: state.cart.listOfProducts,
});
const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
