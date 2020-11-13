import React from 'react';
import List from './list';

export default function Dashboard(props){
  const [categoryName, setCategoryName] = React.useState('')
    return(
        <>
        <div>
          <input type="text" onChange={(e)=>setCategoryName(e.target.value)}/>
          <button onClick={()=>props.addRootCategory({name:categoryName, subCat:[], expend:false})}>Add Category</button>
        </div>
        <div className="App">
          {props.category.map((item,index)=> <List item={item} key={index + item.name} parent={index.toString()}/>)}
        </div>
        </>
    )
}