import React from 'react'
function List(props){

    return(
        <div>
            <li>{props.item.name} <button>{props.item.expand? '-':'+'}</button></li>
            {props.item.subCat?
            (props.item.subCat.map((subCat,index)=><List item ={subCat} key={index+subCat.name} parent={props.parent + index.toString()}/>))
            :null}
        </div>
    )

}

export default List
