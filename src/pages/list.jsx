import React from 'react'
function List(props) {
    const [subCat, setSubCat] =  React.useState(false)
    
    return (
            <div>
                <li>{props.item.name} + {props.parent}
                    <button onClick={()=>setSubCat(!subCat)}>{subCat ? '-' : '+'}</button> 
                    <button onClick={() => props.addSUBCategory({ name: "SubCategory", subCat: [], expend: false }, props.parent)}>
                        Add subcategory</button>
                    <button onClick={() => props.deleteCategory(props.parent)}>
                    delete category</button>
                </li>
            
            
            {props.item.subCat  && subCat?
                (props.item.subCat.map((subCat, index) => <List item={subCat} key={index + subCat.name} parent={props.parent + index.toString()} addSUBCategory={props.addSUBCategory} deleteCategory={props.deleteCategory}/>))
                : null}
        </div>
    )

}

export default List
