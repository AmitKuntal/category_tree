import { connect } from 'react-redux';

import Dashboard from './dashboard';
import {addRootCategory, addSUBCategory, deleteCategory, editCategory, expandCategory} from './../actions/index'

const container = connect(
  state=>
      {
        return  {category:[...state.category]}
      }
  , {
      addRootCategory,
      addSUBCategory,
      deleteCategory,
      editCategory,
      expandCategory
  }
)(Dashboard);

export default container;