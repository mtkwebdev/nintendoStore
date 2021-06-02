import React from 'react';
import '../Components/Layout/Shop/shop.scss'
import '../static/styles/globalStyles.scss';
import Layout from '../Components/Layout/AllPages/Layout';
import { Link } from "gatsby"
import {switchProducts, switchLiteProducts} from '../Components/Layout/Shop/switchProducts'

function nintendoSwitch() {


    return (
   
        <Layout>     

     <div className='contentContainer'>
     <div className='options'>
         <h3>Filters</h3>
         <hr />
         <br />
         <h3>Price</h3>
         <p>All <input type="radio" name="price" id="" checked/></p>
         <p>£50 and above <input type="radio" name="price" id="" /></p>
         <p>£100 and above <input type="radio" name="price" id="" /></p>
         <p>£200 and above <input type="radio" name="price" id="" /></p>
         <p>£200 and above  <input type="radio" name="price" id="" /></p>
         <hr />
         <br />
         <h3>Age Rating</h3>
         <p>All <input type="radio" name="age" id="" checked/></p>
         <p>3+ <input type="radio" name="age" id="" /></p>
         <p>7+ <input type="radio" name="age" id="" /></p>
         <p>12+ <input type="radio" name="age" id="" /></p>
     </div>


     <h1 className="shopTitles">Nintendo Switch Lite Consoles</h1>
     <div className='shopContainer'>
        {switchLiteProducts.map((val,key)=>{return(
           <Link to={val.link} className="products justAnEdge" key={key} >
               <img className="productImage" src={val.src}></img>
               <div className="productName">{val.name}</div>
               <div className="productInStock"> {val.stock}</div>
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
                <div className="productName">{val.name}<div className="productInStock"> {val.stock}</div></div>
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
