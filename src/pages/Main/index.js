import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from '~/components/Menu';

import CatalogAction from '~/store/ducks/catalog';

import {
  Container,
  ItemList,
  ItemFolder,
  ImageItem,
  ItemName,
  ItemBrand,
  ItemPrice,
} from './styles';

class Main extends Component {
  static navigationOptions = () => ({
    title: 'GoCommerce',
    showIcon: true,
  });

  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        brand: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
      }),
    ).isRequired,
  };

  componentDidMount() {}

  openProductDetails(product) {
    const { navigation } = this.props;
    navigation.navigate('Details', { product });
  }

  render() {
    const { products, navigation } = this.props;
    return (
      <Container>
        <Menu />

        <ItemList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ItemFolder onPress={() => this.openProductDetails(item)}>
              <ImageItem source={{ uri: item.image }} />
              <ItemName>{item.brand}</ItemName>
              <ItemBrand>{item.name}</ItemBrand>
              <ItemPrice>{`R$${item.price}`}</ItemPrice>
            </ItemFolder>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.catalog.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(CatalogAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
