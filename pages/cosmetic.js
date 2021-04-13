import TextImage from "../components/presentations/text_img"
import Slider from './../components/presentations/slider'
import style from './../styles/title.module.css'
import { useContext } from "react"
import {ProductContext} from './context/ProductContext'
import {FavoriteContext} from './context/FavoriteContext'
import {useEffect} from 'react'

const cosmetic = [
    {
        img: 'cosmetic2.jpeg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmetic3.jpeg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmetic1.jpeg',
        title: 'Night cream',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmetic4.jpeg',
        title: 'Night cream',
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
    useEffect(()=>{
        document.title="  Cosmetic || Next Store";
    })
    const addCart =(cart)=>{
        setCards(cards.concat(cart));
        console.log(cards);
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
        <Slider img="/cosmetic1.png" img="/cosmetic01.png"/>
        <div className="containr mt-4">
            <div className={style.contitle}>
                <h2 className={style.title}>Cosmetics</h2>
            </div>
            <div className="row">
                {
                  cosmetic.map((item) => {
                     return (
                       <TextImage  isFavorite={item.isFavorite} src={item.img} title={item.title} price={item.price} onclick={()=>addCart(item)} onclick1={()=>addFavorite(item)}/>
                        )

                    })
                  }
            </div>
        </div>
    </div>
        
    )
}
