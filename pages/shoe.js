import React from 'react'
import TextImage from "../components/presentations/text_img"
import { useContext } from "react"
import {ProductContext} from './context/ProductContext'
import Slider from './../components/presentations/slider'
import style from './../styles/title.module.css'
import {FavoriteContext} from './context/FavoriteContext'
import {useEffect} from 'react'
import {SearchContext} from './context/Searchcontext'
const Products=[ 
    {
        img:'shoes5.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes6.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes7.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes8.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes1..jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },  
    {
        img:'shoes2.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes3.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes4.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false
    },
    {
        img:'shoes5.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false
    },
    {
        img:'shoes6.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes7.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes8.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes9.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes10.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes11.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes12.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes13.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },
    {
        img:'shoes14.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },  {
        img:'shoes15.jpg',
        title:'shoes for girl ',
        price:'6.99$',
        isFavorite: false,
    },  {
        img:'shoes16.jpg',
        title:'shoes',
        price:'6.99$',
        isFavorite: false,
    },

    
]


export default function Shoe(){
    useEffect(()=>{
        document.title=" Shoes || Next Store";
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
        <Slider img="/shoe01.png" img="/shoe01.png"/>
        <div className="containr mt-4">
                <div className={style.contitle}>
                    <h2 className={style.title}>Shoes</h2>
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