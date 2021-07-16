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
    const cosmetic = await fetch('http://localhost:8000/api/Cosmetics')
    const cosmeticdata = await cosmetic.json()
    return {
      
      props: { cosmeticdata },
    }
  }


///   const Products = [
//     {
//         img: 'cosmetic2.jpeg',
//         title: 'BB cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmetic3.jpeg',
//         title: 'lipstick ',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmetic1.jpeg',
//         title: 'eyelinner',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmetic4.jpeg',
//         title: 'sleeping mask',
//         price: 12.99,
//         isFavorite: false,
//     },

//     {
//         img: 'cosmet5.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmet6.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmet7.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmet8.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmet9.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmet10.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmet11.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmet12.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmet13.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmet14.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmet15.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },
//     {
//         img: 'cosmet16.jpg',
//         title: 'Night cream',
//         price: 12.99,
//         isFavorite: false,
//     },

// ]
    
    

// ]

export default function Bag({cosmeticdata}){
    const {addToast}=useToasts()
    useEffect(() =>{
        document.title=" Cosmetic || Next Store";
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
                <h2 className={style.title}>Cosmetic</h2>
            </div>
            <div className="row">
                <Grid container justify="center" spacing={3}>
            {
                    // productdata.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                        cosmeticdata.map((item) => {
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