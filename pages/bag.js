import TextImage from "../components/presentations/text_img"
import { useContext } from "react"
import {ProductContext} from './context/ProductContext'
import Slider from './../components/presentations/slider'
import style from './../styles/title.module.css'
import {FavoriteContext} from './context/FavoriteContext'
import {useEffect} from 'react' 

const bag=[
    {
        img:'bag1.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    {
        img:'bag2.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    {
        img:'bag3.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    
    {
        img:'bag4.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    
    {
        img:'bag5.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    
    {
        img:'bag6.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    
    {
        img:'bag7.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    
    {
        img:'bag8.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    {
        img:'bag9.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    
    {
        img:'bag10.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    
    {
        img:'bag11.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    
    {
        img:'bag12.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
      {
        img:'bag13.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    {
        img:'bag14.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    
    {
        img:'bag15.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    {
        img:'bag16.jpg',
        title:'bag',
        price:'10.99$',
        isFavorite: false,
    },
    

    
]


export default function Bag(){
    useEffect(() =>{
        document.title=" Bags || Next Store";
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
        <Slider img="/bag01.png" img="/bag01.png"/>
        <div className="containr mt-4">
            <div className={style.contitle}>
                <h2 className={style.title}>Bags</h2>
            </div>
            <div className="row">
                {
                  bag.map((item) => {
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