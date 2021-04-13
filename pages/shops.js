import React, {useContext} from 'react';
import {ProductContext} from './context/ProductContext'
import TextImage from "../components/presentations/text_img"
import {useEffect} from 'react'
const Shop =() =>{
    useEffect(()=>{
        document.title=" Shops || Next Store";
    })
    const {cards, setCards}=useContext(ProductContext);
    console.log(cards);
    return(
        <div>
            <h1 style={{fontFamily:'Rationale,serif-sans',textAlign:'center',marginTop:'12px',marginBottom:'5px',borderBottom:'2px solid grey',borderScale:'1px',width:'100px',margin:'auto'}}>Shops</h1>
                  {cards.map((shop,index)=>{
                      return(
                          <div>
                            <TextImage src={shop.img} title={shop.title} price={shop.price}/>
                          </div>
                      )
                  })}
        </div>
    )
}
export default Shop;