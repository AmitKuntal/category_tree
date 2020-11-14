
export const addSubCategory = (payload, address, length, state)=>{  
    if(length+1 === address.length){
        state[parseInt(address[length])]["subCat"].push(payload)
        return state
    }
    else{ 
        return addSubCategory(payload, address, length+1, state[parseInt(address[length])]["subCat"])
    }
}


export const deleteCategory = (address, length, state)=>{  
    if(length+1 === address.length){
        state.splice(parseInt(address[length]),1)
        return state
    }
    else{ 
        return deleteCategory(address, length+1, state[parseInt(address[length])]["subCat"])
    }
}


export const updateCategory = (name,address, length, state)=>{  
    if(length+1 === address.length){
        state[parseInt(address[length])]["name"]=name
        return state
    }
    else{ 
        return updateCategory(name, address, length+1, state[parseInt(address[length])]["subCat"])
    }
}

export const expendCategory = (flag,address, length, state)=>{  
    if(length+1 === address.length){
        state[parseInt(address[length])]["expend"]=flag
        return state
    }
    else{ 
        return expendCategory(flag, address, length+1, state[parseInt(address[length])]["subCat"])
    }
}


export const expendAllCategory = (state, flag)=>{  
   state.forEach(element => {
       element.expend  = flag
       if(element.subCat){
        expendAllCategory(element.subCat, flag)
       }
   });
}