import { connect } from 'react-redux';
import Dashboard from './dashboard';
import {addRootCategory, addSUBCategory, deleteCategory, editCategory, expandCategory, expandAllCategory} from './actions/index'

const container = connect(
  state=>
      {
        return  {...state}
      }
  , {
      addRootCategory,
      addSUBCategory,
      deleteCategory,
      editCategory,
      expandCategory,
      expandAllCategory
  }
)(Dashboard);

export default container;