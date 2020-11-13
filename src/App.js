import './App.css';
import Dashboard from './pages/';


var data = [{
  name:"Category1",
  subCat:[
    {
      name:"Subcategory 1",
      subCat:[
        {
          name:"Sub Sub Category1"
        },
        
        {
          name:"Sub Sub Category2"
        },
        
        {
          name:"Sub Sub Category3"
        },
        
        {
          name:"Sub Sub Category4"
        }
      ]
    },
    {
      name:"Subcategory 2",
      subCat:[
        {
          name:"Sub Sub Category1"
        },
        
        {
          name:"Sub Sub Category2"
        },
        
        {
          name:"Sub Sub Category3"
        },
        
        {
          name:"Sub Sub Category4"
        }
      ]
    },
    {
      name:"Subcategory 3",
      subCat:[
        {
          name:"Sub Sub Category1"
        },
        
        {
          name:"Sub Sub Category2"
        },
        
        {
          name:"Sub Sub Category3"
        },
        
        {
          name:"Sub Sub Category4"
        }
      ]
    }
  ]
},
{
  name:"Category2",
  subCat:[
    {
      name:"Subcategory 1",
      subCat:[
        {
          name:"Sub Sub Category1"
        },
        
        {
          name:"Sub Sub Category2"
        },
        
        {
          name:"Sub Sub Category3"
        },
        
        {
          name:"Sub Sub Category4"
        }
      ]
    },
    {
      name:"Subcategory 2",
      subCat:[
        {
          name:"Sub Sub Category1"
        },
        
        {
          name:"Sub Sub Category2"
        },
        
        {
          name:"Sub Sub Category3"
        },
        
        {
          name:"Sub Sub Category4"
        }
      ]
    },
    {
      name:"Subcategory 3",
      subCat:[
        {
          name:"Sub Sub Category1"
        },
        
        {
          name:"Sub Sub Category2"
        },
        
        {
          name:"Sub Sub Category3"
        },
        
        {
          name:"Sub Sub Category4"
        }
      ]
    }
  ]
},
{
  name:"Category3",
  subCat:[
    {
      name:"Subcategory 1",
      subCat:[
        {
          name:"Sub Sub Category1"
        },
        
        {
          name:"Sub Sub Category2"
        },
        
        {
          name:"Sub Sub Category3"
        },
        
        {
          name:"Sub Sub Category4"
        }
      ]
    },
    {
      name:"Subcategory 2",
      subCat:[
        {
          name:"Sub Sub Category1"
        },
        
        {
          name:"Sub Sub Category2"
        },
        
        {
          name:"Sub Sub Category3"
        },
        
        {
          name:"Sub Sub Category4"
        }
      ]
    },
    {
      name:"Subcategory 3",
      subCat:[
        {
          name:"Sub Sub Category1"
        },
        
        {
          name:"Sub Sub Category2"
        },
        
        {
          name:"Sub Sub Category3"
        },
        
        {
          name:"Sub Sub Category4"
        }
      ]
    }
  ]
}
]
function App() {
  return (
    <>
    <Dashboard />
    </>
  );
}



export default App;
