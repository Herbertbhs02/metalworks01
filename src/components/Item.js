import React,{useState} from 'react'
import '../App.css';

const Item = ({name,image,description}) => {

  const[qty, setQty] = useState(1)
 // const amount = (e)=>{setQty(e.target.value)}        
  return (
     
             <div className="card Item">
                <div className="card-image  waves-block">
                  <img src={image} alt='product-image' className='product-image'/>
                </div>
                
                <div className=" Item-content">
                <p><b>Product:</b> {name}</p>
                  <span className="card-title activator ">More..</span>
                  
                </div>
                <div className="card-reveal orange darken-1">
                  <span className="card-title  card-more grey-text text-darken-4"><b>{name}</b><i className=" icon-close material-icons right">close</i></span>
                  <p>{description}</p>
                </div>
                  
               
               
              </div>
  
  )
}

export default Item
