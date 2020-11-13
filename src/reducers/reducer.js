const iState = {
    category:[],
} 


const reducer = (state = iState, action) =>{
    if(action.type === 'ADD_ROOT_CATEGORY'){
        let updateState = {...state}
        updateState.category.push(action.payload)
        return updateState
    }
    return state

}

export default reducer;