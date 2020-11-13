import { connect } from 'react-redux';

import Dashboard from './dashboard';
import {addRootCategory, addSUBCategory, deleteCategory} from './../actions/index'

const container = connect(
  state=>
      {
        return  {category:[...state.category]}
      }
  , {
      addRootCategory,
      addSUBCategory,
      deleteCategory
  }
)(Dashboard);

export default container;