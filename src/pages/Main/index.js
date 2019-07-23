import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

class Main extends Component {
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

  render() {
    const { products } = this.props;
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
  products: state.catalog.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(CatalogAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
