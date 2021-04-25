import React, {useContext} from 'react';
import {ProductContext} from '../context/ProductContext'
import TextImage from "../components/presentations/text_img"
import {useEffect} from 'react'
import {useToasts} from 'react-toast-notifications'
const Shop =() =>{
    const {addToast}=useToasts();
    const {cards, setCards}=useContext(ProductContext);
    console.log(cards);
    useEffect(()=>{
        document.title=" Shops || Next Store";
    })
    const Order =()=>{
        addToast("Thank you! Your order have been sent",{
            appearance:'success',
            autoDismiss: true,
        })
    }
    let Total=0;
        for(let i=0; i< cards.length; i++){
            Total=Total + Number((cards[i].price));
        }
    const btn={
        backgroundColor: 'rgb(116,140,249)',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '15%',
        margin:  '12px auto',
    }
    const price={
        fontFamily:'Rationale,serif-sans',
        paddingTop:'18px',
        textAlign:'center',
        fontSize:'28px'
    }
    const container={
        display:'flex',
        width:'100%',
        height:'70px',
        position:'relative',
        justifyContent: 'center',
        

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
                   <div style={container}>
                        <p style={price}> Your Total price: {Total}</p>
                   </div>
                   <div style={container}>
                            <button style={btn} onClick={Order}>
                                Order
                            </button>
                    </div>
        </div>
    )
}
export default Shop;