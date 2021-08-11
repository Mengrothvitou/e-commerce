import React, {useContext} from 'react';
import {ProductContext} from '../context/ProductContext'
import TextImage from "../components/presentations/text_img"
import {useEffect} from 'react'
import {useToasts} from 'react-toast-notifications'
import Grid from '@material-ui/core/Grid';

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
    let Totals=0;
        for(let i=0; i<cards.length; i++){
            Totals =Totals +Number((cards[i].price));
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
                    <Grid container justify="center" spacing={3}>
            {
                        cards.map((shop) => {
                      return (
                        <Grid item xs={10} sm={5} md={3} style={{marginTop: 15,marginBottom: 10,}}>
                            <TextImage 
                                image={shop.image} 
                                title={shop.title} 
                                price={shop.price}  />
                        </Grid>
                        )

                      })                      
                  }
                </Grid>
                   <div style={container}>
                       {cards.length>0 ?(<span style={price}>Your total price: {Totals}</span>):(<span style={price}>Your cart is empty</span>)}
                   </div>
                   <div style={container}>
                            <button style={btn} onClick={Order}>Order</button>
                    </div>
        </div>
    )
}
export default Shop;