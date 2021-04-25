import React from 'react'
import TextImage from "../components/presentations/text_img"
import { useContext } from "react"
import {ProductContext} from '../context/ProductContext'
import style from './../styles/title.module.css'
import Slider from './../components/presentations/slider'
import {FavoriteContext} from '../context/FavoriteContext'
import {useEffect} from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import {SearchContext} from './context/Searchcontext'
const Products=[
=======
=======
>>>>>>> 943f6488091deb9be45238f19614905d68f0b357
import {useToasts} from 'react-toast-notifications'
const watch=[
>>>>>>> 943f6488091deb9be45238f19614905d68f0b357
    {
        img:'watch1.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch2.jpg',
        title:'watch tisso',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch3.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch4.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch5.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch6.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch7.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch8.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch9.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch10.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch11.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch12.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch13.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch14.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch15.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch16.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
]

export default function Watches(){
    const {addToast}=useToasts()
    useEffect(()=>{
        document.title=" Watches || Next Store";
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
      
    const { keySearchs } = React.useContext(SearchContext)
    const statusExistData = Products.some((item) =>
        item.title.includes(keySearchs)
    );
    console.log("Match name or not :", statusExistData);
    const handleSubmit = (e) => {
        console.log(e.target.value);
    };

    return(
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <Slider img="/watch01.png" img="/photowatch.jpg" img="/photowatch1.jpg"/>
=======
        <Slider img="watch01.png" img="watch01.png"/>
>>>>>>> 943f6488091deb9be45238f19614905d68f0b357
=======
        <Slider img="watch01.png" img="watch01.png"/>
>>>>>>> 943f6488091deb9be45238f19614905d68f0b357
        <div className="containr mt-4">
            <div className={style.contitle}>
                <h2 className={style.title}>Watches</h2>
            </div>
            <div className="row">
                {
                  Products.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                     return (
                       <TextImage isFavorite={item.isFavorite} src={item.img} title={item.title} price={item.price} onclick={()=>addCart(item)} onclick1={()=>addFavorite(item)} />
                        )

                    })
                  }
            </div>
        </div>
    </div>
    )
}