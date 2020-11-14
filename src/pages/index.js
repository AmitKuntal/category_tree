import { connect } from 'react-redux';

import Dashboard from './dashboard';
import {addRootCategory, addSUBCategory, deleteCategory, editCategory} from './../actions/index'

const container = connect(
  state=>
      {
        return  {category:[...state.category]}
      }
  , {
      addRootCategory,
      addSUBCategory,
      deleteCategory,
      editCategory
  }
)(Dashboard);

export default container;