import { combineReducers } from 'redux';

import { reducer as catalog } from './catalog';
import { reducer as cart } from './cart';

export default combineReducers({ catalog, cart });
