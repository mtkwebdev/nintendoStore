import React from 'react';
import '../Components/Layout/Shop/shop.scss'
import '../static/styles/globalStyles.scss';
import Layout from '../Components/Layout/Layout';
import { Link } from "gatsby"
import {switchProducts, switchLiteProducts} from '../Components/Layout/Shop/switchProducts'

function nintendoSwitch() {


    return (
   
        <Layout>     

     <div className='contentContainer'>
     <div className='options metalEdge'>
         <h3>Filters</h3>
         <hr />
         <br />
         <h3>Price</h3>
         <p>£50 and above <input type="checkbox" name="" id="" /></p>
         <p>£100 and above <input type="checkbox" name="" id="" /></p>
         <p>£200 and above <input type="checkbox" name="" id="" /></p>
         <p>£200 and above  <input type="checkbox" name="" id="" /></p>
         <hr />
         <br />
         <h3>Age Rating</h3>
         <p>3+ <input type="checkbox" name="" id="" /></p>
         <p>7+ <input type="checkbox" name="" id="" /></p>
         <p>12+ <input type="checkbox" name="" id="" /></p>
     </div>


     <h1 className="shopTitles">Nintendo Switch Lite Consoles</h1>
     <div className='shopContainer'>
        {switchLiteProducts.map((val,key)=>{return(
           <Link to={val.link} className="products justAnEdge" key={key} >
               <img className="productImage" src={val.src}></img>
               <div className="productName">{val.name}<div className="productStock"> {val.stock}</div></div>
               <div className="productDescription">{val.description}</div>
               <div className="productPrice">{val.price}</div>
           </Link> 
        )})}
        </div>
        
        <h1 className="shopTitles">Nintendo Switch Consoles</h1>
        <div className='shopContainer'>
            {switchProducts.map((val,key)=>{return(
            <Link to={val.link} className="products justAnEdge" key={key} >
                <img className="productImage" src={val.src}></img>
                <div className="productName">{val.name}<div className="productStock"> {val.stock}</div></div>
                <div className="productDescription">{val.description}</div>
                <div className="productPrice">{val.price}</div>
            </Link> 
            )})}
        

    
            </div>
        </div>

        </Layout>
         

    )
}

export default nintendoSwitch
