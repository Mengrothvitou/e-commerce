import React, {useContext} from 'react';
import {ProductContext} from './context/ProductContext'
import TextImage from "../components/presentations/text_img"
import {useEffect} from 'react'
const Shop =() =>{
    const {cards, setCards}=useContext(ProductContext);
    console.log(cards);
    useEffect(()=>{
        document.title=" Shops || Next Store";
    })
    let Total=0
        for(let i=0; i< cards.length; i++){
            Total=Total +Number((cards[i].price));
        }
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
            <hr style={{backgroundColor:'black', width:'50%',}}></hr>
            <p style={{fontSize:'28px',fontFamily:'Rationale,serif-sans',padding:'12px'}}> Your Total price: {Total}</p>
            <button >Order</button>
        </div>
    )
}
export default Shop;