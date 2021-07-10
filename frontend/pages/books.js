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
    const book = await fetch('http://localhost:8000/api/Books')
    const bookdata = await book.json()
    return {
      
      props: { bookdata },
    }
  }


//   const Products=[
//     {
//         img:'book1.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book2.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book3.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book4.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book5.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book6.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book7.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book8.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book9.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book10.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book11.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book12.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book13.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book14.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book15.jpg',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
//     {
//         img:'book16.webp',
//         title:'book',
//         price:'9.99',
//         isFavorite: false,
//     },
// ]

export default function Bag({bookdata}){
    const {addToast}=useToasts()
    useEffect(() =>{
        document.title=" Books || Next Store";
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
                <h2 className={style.title}>Books</h2>
            </div>
            <div className="row">
                <Grid container justify="center" spacing={3}>
            {
                    // productdata.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                        bookdata.map((item) => {
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