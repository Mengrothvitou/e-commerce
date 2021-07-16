import React from 'react'
import TextImage from "../components/presentations/text_img"
import { useContext } from "react"
import {ProductContext} from '../context/ProductContext'
import Slider from './../components/presentations/slider'
import style from './../styles/title.module.css'
import {FavoriteContext} from '../context/FavoriteContext'
import {useEffect} from 'react' 
import {SearchContext} from './../context/SearchContext'
import {useToasts} from 'react-toast-notifications'
import Grid from '@material-ui/core/Grid';
export async function getStaticProps() {
    const shoe = await fetch('http://localhost:8000/api/Shoes')
    const shoedata = await shoe.json()
    return {
      
      props: { shoedata },
    }
  }


  //const Products=[
    //     {
    //         img:'shoes5.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes6.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes7.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes8.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes1..jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },  
    //     {
    //         img:'shoes2.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes3.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes4.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false
    //     },
    //     {
    //         img:'shoes5.jpg',
    //         title:'shoes',
    //         price:'6.99$',
    //         isFavorite: false
    //     },
    //     {
    //         img:'shoes6.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes7.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes8.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes9.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes10.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes11.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes12.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes13.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    //     {
    //         img:'shoes14.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },  {
    //         img:'shoes15.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },  {
    //         img:'shoes16.jpg',
    //         title:'shoes',
    //         price:'6.99',
    //         isFavorite: false,
    //     },
    
        
    // ]

export default function Bag({shoedata}){
    const {addToast}=useToasts()
    useEffect(() =>{
        document.title=" Shoes || Next Store";
    })
    const addCart =(cart)=>{
        setCards(cards.concat(cart));
        console.log(cards);
        addToast("Your order has been placed in the cart. Check out!!!",{
            appearance:'success',
            autoDismiss: true,
        })
      }
    const {cards, setCards}=useContext(ProductContext);

    const addFavorite =(favo)=>{
        favo.isFavorite=!favo.isFavorite;
        setFavorites(Favorite.concat(favo));
        console.log(Favorite);
      }
      const {Favorite, setFavorites}=useContext(FavoriteContext) 
      const {keySearchs} = React.useContext(SearchContext)
//       const statusExistData = productdata.some((item) =>
//   item.title.includes(keySearchs)
//   );
//   console.log("Match name or not :", statusExistData);
//   const handleSubmit = (e) => {
//     console.log(e.target.value);
//   };
      
    return(
        
    <div>
        <Slider img="/bag001.jpeg" img="/bag002.jpeg"/>
        <div className="containr mt-4">
            <div className={style.contitle}>
                <h2 className={style.title}>Shoes</h2>
            </div>
            <div className="row">
                <Grid container justify="center" spacing={3}>
            {
                    // productdata.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                        shoedata.map((item) => {
                      return (
                        <Grid item xs={10} sm={5} md={3} style={{marginTop: 15,marginBottom: 10,}}>
                            <TextImage 
                                isFavorite={item.isFavorite} 
                                image={item.image} 
                                title={item.title} 
                                price={item.price} 
                                onclick={()=>addCart(item)} 
                                onclick1={()=>addFavorite(item)} />
                        </Grid>
                        )

                      })                      
                  }
                </Grid>
                  {/* {!statusExistData ? <span>Unmatch items</span>:<></>} */}
                   
            </div>
        </div>
    </div>
        
    )
}