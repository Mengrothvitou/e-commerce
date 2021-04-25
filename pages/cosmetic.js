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

const Products = [
    {
        img: 'cosmetic2.jpeg',
        title: 'BB cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmetic3.jpeg',
        title: 'lipstick ',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmetic1.jpeg',
        title: 'eyelinner',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmetic4.jpeg',
        title: 'sleeping mask',
        price: 12.99,
        isFavorite: false,
    },

    {
        img: 'cosmet5.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmet6.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmet7.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmet8.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmet9.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmet10.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmet11.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmet12.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmet13.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmet14.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmet15.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmet16.jpg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },

]


export default function Cosmetic(){
    const {addToast}=useToasts()
    useEffect(()=>{
        document.title="  Cosmetic || Next Store";
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
      const statusExistData = Products.some((item) =>
  item.title.includes(keySearchs)
  );
    return(
        <div>
        <Slider img="/cos001.jpeg" img="/cos002.jpeg"/>
        <div className="containr mt-4">
            <div className={style.contitle}>
                <h2 className={style.title}>Cosmetics</h2>
            </div>
            <div className="row">
            {
                    Products.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                      return (
                        <TextImage isFavorite={item.isFavorite} src={item.img} title={item.title} price={item.price} onclick={()=>addCart(item)} onclick1={()=>addFavorite(item)} />
                        )
                        

                      })                      
                  }
                  {!statusExistData ? <span>Unmatch items</span>:<></>}  
                 
            </div>
        </div>
    </div>
        
    )
}
