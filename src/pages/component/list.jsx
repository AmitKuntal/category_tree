import React from 'react';
import AddSubCategory from './addSubCategory';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import UpdateCategory from './updateCategory';


function List(props) {
    const [subCat, setSubCat] =  React.useState(false)
    const [addSubCat, setAddSubCat] =  React.useState(false)
    const [editCat, setEditCat] =  React.useState(false)

    const handleClose=(value)=>{
        setAddSubCat(!value)
    }

    const handleUpdateClose=(value)=>{
        setEditCat(!value)
    }

    return (
            <>
                <ContextMenuTrigger id={props.item.name + props.parent}>
                    <div className="category" style={{marginLeft:props.marginLeft}} id={props.parent}>
                        <span>{props.item.name}</span>
                        <button onClick={()=>setSubCat(!subCat)}>{subCat ? '-' : '+'}</button>
                        <AddSubCategory {...props} show={addSubCat} handleClose={handleClose}/> 
                        <UpdateCategory {...props} show={editCat} handleUpdateClose={handleUpdateClose} />

                    </div>     
                 </ContextMenuTrigger>
                <ContextMenu id={props.item.name + props.parent} style={{backgroundColor:"white"}}>
                    <MenuItem onClick={()=>handleClose(false)}>
                        Add Sub Category
                    </MenuItem>
                    <MenuItem onClick={() => props.deleteCategory(props.parent)}>
                        Delete Category
                    </MenuItem>
                    <MenuItem onClick={() => handleUpdateClose(false)}>
                        Edit Category
                    </MenuItem>
                </ContextMenu>

            
                {props.item.subCat  && subCat?
                    (props.item.subCat.map((subCat, index) => <List item={subCat} key={index + subCat.name} parent={props.parent + index.toString()} addSUBCategory={props.addSUBCategory} deleteCategory={props.deleteCategory} marginLeft={parseInt(props.marginLeft) +10}/>))
                    : null}

                    
            </>
    )

}

export default List
