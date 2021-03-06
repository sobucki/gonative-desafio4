import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CatalogAction from '~/store/ducks/catalog';

import {
  Container, ScrollMenu, MenuList, ButtonMenu, TextButton,
} from './styles';

class Menu extends Component {
  static propTypes = {
    loadCategoriesRequest: PropTypes.func.isRequired,
    loadProductsRequest: PropTypes.func.isRequired,
    selectedCategory: PropTypes.number,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    ).isRequired,
  };

  static defaultProps = {
    selectedCategory: 0,
  };

  componentDidMount() {
    const { loadCategoriesRequest } = this.props;

    loadCategoriesRequest();
  }

  loadProductsByCategory(categoryId) {
    const { loadProductsRequest } = this.props;

    loadProductsRequest(categoryId);
  }

  render() {
    const { categories, selectedCategory } = this.props;
    return (
      <Container>
        <ScrollMenu>
          <MenuList
            data={categories}
            keyExtractor={category => String(category.id)}
            renderItem={({ item }) => (
              <ButtonMenu
                onPress={() => this.loadProductsByCategory(item.id)}
                selected={selectedCategory && selectedCategory === item.id}
              >
                <TextButton>{String(item.title).toUpperCase()}</TextButton>
              </ButtonMenu>
            )}
          />
        </ScrollMenu>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.catalog.categories,
  selectedCategory: state.catalog.selectedCategory,
});

const mapDispatchToProps = dispatch => bindActionCreators(CatalogAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
