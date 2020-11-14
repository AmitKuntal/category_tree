import React from 'react';

export default function Controls(props){
    const [categoryName, setCategoryName] = React.useState('')

    return(
            <div className="controls">
            <input type="text" className="addcategory" onChange={(e)=>setCategoryName(e.target.value)} placeholder="Enter category name.."/>
            <button className="addcategory" onClick={()=>props.addRootCategory({name:categoryName, subCat:[], expend:false})}>Add Category</button>
        </div>
    )
}