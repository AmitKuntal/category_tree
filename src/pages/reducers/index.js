import {cloneDeep} from 'lodash'
import {addSubCategory, deleteCategory, updateCategory, expendCategory, expendAllCategory} from './helper'
const iState = {
    category:[],
    expendAll:false
} 


const reducer = (state = iState, action) =>{
    console.log(action)
    if(action.type === 'ADD_ROOT_CATEGORY'){
        let updateState = cloneDeep(state)
        updateState.category.push(action.payload)
        return updateState
    }

    if(action.type === 'ADD_SUB_CATEGORY'){
        let updateState = cloneDeep(state)
        addSubCategory(action.payload, action.address, 0,updateState.category)
        return updateState
    }

    if(action.type === 'DELETE_CATEGORY'){
        let updateState = cloneDeep(state)
        deleteCategory(action.address, 0, updateState.category)
        return updateState
    }

    if(action.type === 'EDIT_CATEGORY'){
        let updateState = cloneDeep(state)
        console.log(action)
        updateCategory(action.name, action.address, 0, updateState.category)
        return updateState
    }

    if(action.type === 'EXPAND_CATEGORY'){
        let updateState = cloneDeep(state)
        console.log(action)
        expendCategory(action.flag, action.address, 0, updateState.category)
        return updateState
    }

    if(action.type === 'EXPAND_ALL_CATEGORY'){
        let updateState = cloneDeep(state)
        updateState.expendAll = !state.expendAll
        expendAllCategory(updateState.category, updateState.expendAll)
        return updateState
    }
    return state

}


export default reducer;