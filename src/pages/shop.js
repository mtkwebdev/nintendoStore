import React from 'react';
import '../static/styles/globalStyles.scss';
import '../Components/Layout/Shop/shop.scss'
import Layout from '../Components/Layout/Layout';
import {switchProducts} from '../Components/Layout/Shop/switchProducts'

function shop() {


    return (
        <div>
        <Layout>
        <div className='shopContainer'>hello<div className="div1">bob</div></div>
     
     <div className='shopContainer'>
        {switchProducts.map((val,key)=>{return(
           <div className="switchProducts" key={key} >
               <div className="productName">{val.name}</div>
               <img className="productImage" src={val.src}></img>
               <div className="productDescription">{val.description}</div>
               <div className="productPrice">{val.price}</div>
           </div> 
        )})}
        </div>

        </Layout>
         
        </div>
    )
}

export default shop
