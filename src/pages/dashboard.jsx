import React from 'react';
import Controls from './component/controls';
import Categories from './component/categories';

export default function Dashboard(props){
    return(
        <div className="main">
         <Controls {...props} />
         <Categories {...props}/>
        </div>
    )
}