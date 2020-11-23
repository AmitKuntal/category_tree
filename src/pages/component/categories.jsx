import React from 'react';
import List from './list';

export default function Categories(props){
    return(
        <div className="categories">
        <span>CATEGORY</span>
        <div className="category-list">
            {props.category.map((item,index)=> <List item={item} key={index + item.name} parent={index.toString()}  marginLeft="10"  {...props}/>)}
        </div>
      </div>
    )
}