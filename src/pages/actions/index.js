

  export const expandCategory = (flag, address)=>{
      return dispatch=>{
          setTimeout(()=>dispatch(expandTheCategory(flag, address)),1000)
      }
  }

export const addRootCategory = (payload)=>({'type':'ADD_ROOT_CATEGORY', payload:payload})
export const addSUBCategory = (payload,address)=>({'type':'ADD_SUB_CATEGORY', payload:payload, address:address})
export const deleteCategory = (address)=>({'type':'DELETE_CATEGORY', address:address})
export const editCategory = (name,address)=>({'type':'EDIT_CATEGORY', name:name, address:address})
const expandTheCategory = (flag,address)=>({'type':'EXPAND_CATEGORY', flag:flag, address:address})
export const expandAllCategory = ()=>({'type':'EXPAND_ALL_CATEGORY'})