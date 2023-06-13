import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Item from './Item'
import Category from './Category'
import Footer from './Footer'
import Home from './Home'
import ScrollToTop from './ScrollToTop'


const Products = () => {
const [productdata, setProductdata] = useState(['home'])//data.products
const [categorypick, setCategorypick] = useState("home")//set home page  as a default product
const [loading, SetLoading] = useState(true)

//Function to select product category
   const selection = async(e)=>{ SetLoading(true)
   const response = await axios.get('https://weak-pear-drill-gown.cyclic.app/retrievework',{params:{category:e}})
   //
   SetLoading(false)
        setProductdata(response.data)
}

useEffect(()=>{ 
  const getproducts = ()=>{
  setProductdata(['home'])
  SetLoading(false)
  }
  getproducts()
},[]
)

//List products. Item component is used in the map() method
const display1 = productdata.map(item=>(<div key={item._id}><Item image={item.image} name={item.product} description={item.description} id={item._id} /></div>))

       if(loading){
        return (
            <div>
             <Category selection={selection}/>
            <h6>Loading products please wait</h6>
            </div>
        )

    } else if(productdata[0].category ==='home'|| productdata[0]==='home' ){
   
      return (
        <div className=''>
              <Category selection={selection}/>
              <div className=' '>
               <Home/>
               </div>
              <Footer/>
       </div>
    )

     }else 
     return (
      <div  className="">
            <Category selection={selection}/>
            <ScrollToTop/>
            <div className=' products  '>
                  {display1}
            </div>  
            <Footer/>
      </div>

  )
}

export default Products