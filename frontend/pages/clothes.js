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
    const clothe = await fetch('http://localhost:8000/api/Clothes')
    const clothedata = await clothe.json()
    return {
      
      props: { clothedata },
    }
  }


//   const Products = [
//     {
//         img: 'clo1.jpg',
//         title: 'jacket',
//         price: 8.99 ,
//         isFavorite: false,
//     },
//     {
//         img: 'clo2.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
//     {
//         img: 'clo3.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
//     {
//         img: 'clo4.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
//     {
//         img: 'clo5.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
//     {
//         img: 'clo6.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
//     {
//         img: 'clo7.jpg',
//         title: 'T-shirt',
//         price: 8.99,isFavorite: false,

//     },
//     {
//         img: 'clo8.jpg',
//         title: 'T-shirt',
//         price: 8.99,isFavorite: false,

//     },
//     {
//         img: 'clo9.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
//     {
//         img: 'clo10.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
//     {
//         img: 'clo11.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,

//     },
//     {
//         img: 'clo12.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
//     {
//         img: 'clo13.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
//     {
//         img: 'clo14.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
//     {
//         img: 'clo15..jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
//     {
//         img: 'clo16.jpg',
//         title: 'T-shirt',
//         price: 8.99,
//         isFavorite: false,
//     },
    
    

// ]

export default function Bag({clothedata}){
    const {addToast}=useToasts()
    useEffect(() =>{
        document.title=" Clothes || Next Store";
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
                <h2 className={style.title}>Clothes</h2>
            </div>
            <div className="row">
                <Grid container justify="center" spacing={3}>
            {
                    // productdata.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                        clothedata.map((item) => {
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