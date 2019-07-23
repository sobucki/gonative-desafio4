import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoriesAction from '~/store/ducks/categories';

import {
  ScrollMenu, MenuList, ButtonMenu, TextButton,
} from './styles';

class Menu extends Component {
  static propTypes = {
    loadRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: PropTypes.arrayOf({
        id: PropTypes.string,
        title: PropTypes.string,
      }),
    }).isRequired,
  };

  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { categories } = this.props;
    return (
      <ScrollMenu>
        <MenuList
          data={categories.data}
          keyExtractor={category => String(category.id)}
          renderItem={({ item }) => (
            <ButtonMenu>
              <TextButton>{String(item.title).toUpperCase()}</TextButton>
            </ButtonMenu>
          )}
        />
      </ScrollMenu>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
