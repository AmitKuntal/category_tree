import React from 'react'
export default function AddSubCategory(props){
    const [categoryName, setCategoryName] = React.useState('')
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return( 
      <div className={showHideClassName}>
        <section className="modal-main">
            <div className="subCategory">
                <input type="text" className="addcategory" onChange={(e)=>setCategoryName(e.target.value)} placeholder="Enter sub category name.."/>
                <button className="addcategory"onClick={() => props.addSUBCategory({ name: categoryName, subCat: [], expend: false }, props.parent)} >Add Sub Category</button>
                <button onClick={()=>props.handleClose(props.show)} className="addcategory" style={{backgroundColor:'red'}}>X</button>
            </div>
        </section>
        </div>
    )
}
