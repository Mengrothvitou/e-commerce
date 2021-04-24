import TextImage from "../components/presentations/text_img"
import { useContext } from "react"
import {ProductContext} from './context/ProductContext'
import style from './../styles/title.module.css'
import Slider from './../components/presentations/slider'
import {FavoriteContext} from './context/FavoriteContext'
import {useEffect} from 'react'
import {useToasts} from 'react-toast-notifications'
const watch=[
    {
        img:'watch1.jpg',
        title:'watch',
        price:'89.99$',
        isFavorite: false,
    },
    {
        img:'watch2.jpg',
        title:'watch',
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
    return(
        <div>
        <Slider img="/watch01.png" img="/watch01.png"/>
        <div className="containr mt-4">
            <div className={style.contitle}>
                <h2 className={style.title}>Watches</h2>
            </div>
            <div className="row">
                {
                  watch.map((item) => {
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