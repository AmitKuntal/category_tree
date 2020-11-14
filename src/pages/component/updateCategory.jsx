import React from 'react'
export default function UpdateCategory(props){
    const [categoryName, setCategoryName] = React.useState(props.item.name)
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    console.log(props)
    return( 
      <div className={showHideClassName}>
        <section className="modal-main">
            <div className="subCategory">
                <input type="text" className="addcategory" value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} placeholder="Enter sub category name.."/>
                <button className="addcategory"onClick={() => props.editCategory(categoryName, props.parent)} >Update Category</button>
                <button onClick={()=>props.handleUpdateClose(props.show)} className="addcategory" style={{backgroundColor:'red'}}>X</button>
            </div>
        </section>
        </div>
    )
}
