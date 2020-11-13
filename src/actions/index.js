export const addRootCategory = (payload)=>({'type':'ADD_ROOT_CATEGORY', payload:payload})
export const addSUBCategory = (payload,address)=>({'type':'ADD_SUB_CATEGORY', payload:payload, address:address})
export const deleteCategory = (payload,address)=>({'type':'DELETE_CATEGORY', payload:payload, address:address})
export const editCategory = (payload,address)=>({'type':'EDIT_CATEGORY', payload:payload, address:address})