import { connect } from 'react-redux';

import Dashboard from './dashboard';
import {addRootCategory, addSUBCategory} from './../actions/index'

const container = connect(
  state=>
      {
        return  {category:[...state.category]}
      }
  , {
      addRootCategory,
      addSUBCategory
  }
)(Dashboard);

export default container;