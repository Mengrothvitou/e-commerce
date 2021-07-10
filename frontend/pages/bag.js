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
    const bag = await fetch('http://localhost:8000/api/bags')
    const bagdata = await bag.json()
    return {
      
      props: { bagdata },
    }
  }


// const Products=[
//   {
//       img:'bag1.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
//   {
//       img:'bag2.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
//   {
//       img:'bag3.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
  
//   {
//       img:'bag4.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
  
//   {
//       img:'bag5.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
  
//   {
//       img:'bag6.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
  
//   {
//       img:'bag7.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
  
//   {
//       img:'bag8.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
//   {
//       img:'bag9.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
  
//   {
//       img:'bag10.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
  
//   {
//       img:'bag11.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
  
//   {
//       img:'bag12.jpg',
//       title:'bag for men',
//       price:'10.99',
//       isFavorite: false,
//   },
//     {
//       img:'bag13.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
//   {
//       img:'bag14.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
  
//   {
//       img:'bag15.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
//   {
//       img:'bag16.jpg',
//       title:'bag',
//       price:'10.99',
//       isFavorite: false,
//   },
// ]

export default function Bag({bagdata}){
    const {addToast}=useToasts()
    useEffect(() =>{
        document.title=" Bags || Next Store";
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
                <h2 className={style.title}>Bags</h2>
            </div>
            <div>
                <Grid container justify="center" spacing={3}>
            {
                    // productdata.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                        bagdata.map((item) => {
                      return (
                        <Grid item xs={10} sm={5} md={4} style={{marginTop: 15,marginBottom: 10,}}>
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