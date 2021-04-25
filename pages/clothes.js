import React from 'react'
import TextImage from "../components/presentations/text_img"
import { useContext } from "react"
import {ProductContext} from '../context/ProductContext'
import Slider from './../components/presentations/slider'
import style from './../styles/title.module.css'
import {FavoriteContext} from '../context/FavoriteContext'
import {useEffect} from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import {SearchContext, SearchContextProvider} from './../pages/context/Searchcontext'
const Products = [
=======
=======
>>>>>>> 943f6488091deb9be45238f19614905d68f0b357
import {useToasts} from 'react-toast-notifications'
const clothes = [
>>>>>>> 943f6488091deb9be45238f19614905d68f0b357
    {
        img: 'clo1.jpg',
        title: 'T-shirt',
        price: 8.99 ,
        isFavorite: false,
    },
    {
        img: 'clo2.jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,
    },
    {
        img: 'clo3.jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,
    },
    {
        img: 'clo4.jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,
    },
    {
        img: 'clo5.jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,
    },
    {
        img: 'clo6.jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,
    },
    {
        img: 'clo7.jpg',
        title: 'T-shirt',
        price: 8.99,isFavorite: false,

    },
    {
        img: 'clo8.jpg',
        title: 'T-shirt',
        price: 8.99,isFavorite: false,

    },
    {
        img: 'clo9.jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,
    },
    {
        img: 'clo10.jpg',
        title: 'jacket',
        price: 8.99,
        isFavorite: false,
    },
    {
        img: 'clo11.jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,

    },
    {
        img: 'clo12.jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,
    },
    {
        img: 'clo13.jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,
    },
    {
        img: 'clo14.jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,
    },
    {
        img: 'clo15..jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,
    },
    {
        img: 'clo16.jpg',
        title: 'T-shirt',
        price: 8.99,
        isFavorite: false,
    },
    
    

]


export default function Clothes(){
    const {addToast}=useToasts()
    useEffect(() =>{
        document.title='Clothes || Next Store'
    })
 const {keySearchs}= React.useContext(SearchContext)

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

    return(
    <div>
        <Slider img="/clothe01.png" img="/photocloth.jpg"/>
        <div className="containr mt-4">
            <div className={style.contitle}>
                <h2 className={style.title}>Clothes</h2>
            </div>
            <div className="row">
                {
                  Products.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                     return (
                       <TextImage isFavorite={item.isFavorite} src={item.img} title={item.title} price={item.price} onclick={()=>addCart(item)} onclick1={()=>addFavorite(item)}/>
                        )

                    })
                  }
            </div>
        </div>
    </div>
        
    )
}