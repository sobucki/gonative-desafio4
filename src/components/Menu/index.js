import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CatalogAction from '~/store/ducks/catalog';

import {
  ScrollMenu, MenuList, ButtonMenu, TextButton,
} from './styles';

class Menu extends Component {
  static propTypes = {
    loadCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { loadCategoriesRequest } = this.props;

    loadCategoriesRequest();
  }

  render() {
    const { categories, selectedCategory } = this.props;
    return (
      <ScrollMenu>
        <MenuList
          data={categories}
          keyExtractor={category => String(category.id)}
          renderItem={({ item }) => (
            <ButtonMenu selected={selectedCategory && selectedCategory === item.id}>
              <TextButton>{String(item.title).toUpperCase()}</TextButton>
            </ButtonMenu>
          )}
        />
      </ScrollMenu>
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
