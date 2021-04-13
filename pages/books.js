import TextImage from "../components/presentations/text_img"
import { useContext } from "react"
import {ProductContext} from './context/ProductContext'
import Slider from './../components/presentations/slider'
import style from './../styles/title.module.css'
import {FavoriteContext} from './context/FavoriteContext'
import {useEffect} from 'react'
const book=[
    {
        img:'book1.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book2.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book3.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book4.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book5.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book6.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book7.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book8.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book9.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book10.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book11.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book12.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book13.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book14.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book15.jpg',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
    {
        img:'book16.webp',
        title:'book',
        price:'9.99$',
        isFavorite: false,
    },
]


export default function Book(){
    useEffect(() =>{
        document.title=" Books || Next Store";
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
        <Slider img="/book01.png" img="/book01.png"/>
        <div className="containr mt-4">
            <div className={style.contitle}>
                <h2 className={style.title}>Books</h2>
            </div>
            <div className="row">
                {
                  book.map((item) => {
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