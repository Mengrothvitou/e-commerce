import React from 'react'
import TextImage from "../components/presentations/text_img"
import { useContext } from "react"
<<<<<<< HEAD
<<<<<<< HEAD
import { ProductContext } from './context/ProductContext'
import Slider from './../components/presentations/slider'
import style from './../styles/title.module.css'
import { FavoriteContext } from './context/FavoriteContext'
import { useEffect } from 'react'
import { SearchContext } from './context/Searchcontext'
const Products = [
=======
import {ProductContext} from '../context/ProductContext'
import Slider from './../components/presentations/slider'
import style from './../styles/title.module.css'
=======
import {ProductContext} from '../context/ProductContext'
import Slider from './../components/presentations/slider'
import style from './../styles/title.module.css'
>>>>>>> 943f6488091deb9be45238f19614905d68f0b357
import {FavoriteContext} from '../context/FavoriteContext'
import {useEffect} from 'react'
import {useToasts} from 'react-toast-notifications'
const book=[
>>>>>>> 943f6488091deb9be45238f19614905d68f0b357
    {
        img: 'book1.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book2.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book3.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book4.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book5.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book6.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book7.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book8.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book9.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book10.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book11.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book12.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book13.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book14.jpg',
        title: 'khmer book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book15.jpg',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
    {
        img: 'book16.webp',
        title: 'book',
        price: '9.99$',
        isFavorite: false,
    },
]


<<<<<<< HEAD
export default function Book() {
    useEffect(() => {
        document.title = " Books || Next Store";
=======
export default function Book(){
    const {addToast}=useToasts()
    useEffect(() =>{
        document.title=" Books || Next Store";
>>>>>>> 943f6488091deb9be45238f19614905d68f0b357
    })
    const addCart = (cart) => {
        setCards(cards.concat(cart));
        console.log(cards);
<<<<<<< HEAD
<<<<<<< HEAD
    }
    const { cards, setCards } = useContext(ProductContext);
=======
=======
>>>>>>> 943f6488091deb9be45238f19614905d68f0b357
        addToast("Your order has been placed in the cart. Check out!!!",{
            appearance:'success',
            autoDismiss: true,
        })
      }
    const {cards, setCards}=useContext(ProductContext);
>>>>>>> 943f6488091deb9be45238f19614905d68f0b357

    const addFavorite = (favo) => {
        favo.isFavorite = !favo.isFavorite;
        setFavorites(Favorite.concat(favo));
        console.log(Favorite);
    }
    const { Favorite, setFavorites } = useContext(FavoriteContext)

    const { keySearchs } = React.useContext(SearchContext)
    const statusExistData = Products.some((item) =>
        item.title.includes(keySearchs)
    );
    console.log("Match name or not :", statusExistData);
    const handleSubmit = (e) => {
        console.log(e.target.value);
    };


    return (

        <div>
            <Slider img="/book01.png" img="/book01.png" />
            <div className="containr mt-4">
                <div className={style.contitle}>
                    <h2 className={style.title}>Books</h2>
                </div>
                <div className="row">
                    {
                        Products.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                            return (
                                <TextImage isFavorite={item.isFavorite} src={item.img} title={item.title} price={item.price} onclick={() => addCart(item)} onclick1={() => addFavorite(item)} />
                            )

                        })
                    }
                    {!statusExistData ? <span>Unmatch items</span>:<></>}
                   
                </div>
            </div>
        </div>

    )
}