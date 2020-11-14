import React from 'react';
import AddSubCategory from './addSubCategory';

function List(props) {
    const [subCat, setSubCat] =  React.useState(false)
    const [addSubCat, setAddSubCat] =  React.useState(false)

    const handleClose=(value)=>{
        setAddSubCat(!value)
    }
    
    return (
            <>
                <div className="category" style={{marginLeft:props.marginLeft}} id={props.parent}>
                    <span>{props.item.name} + {props.parent}</span>
                    <button onClick={()=>setSubCat(!subCat)}>{subCat ? '-' : '+'}</button>
                    <AddSubCategory {...props} show={addSubCat} handleClose={handleClose}/> 
                    <button onClick={() => props.deleteCategory(props.parent)}>
                    delete category</button>
                </div>
            
            
                {props.item.subCat  && subCat?
                    (props.item.subCat.map((subCat, index) => <List item={subCat} key={index + subCat.name} parent={props.parent + index.toString()} addSUBCategory={props.addSUBCategory} deleteCategory={props.deleteCategory} marginLeft={parseInt(props.marginLeft) +10}/>))
                    : null}

                    
            </>
    )

}

export default List
