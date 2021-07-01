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

const cos = [
    {
        img: 'cosmetic2.jpeg',
        title: 'BB Cream',
        price: 6.99 ,
        isFavorite: false,
    },
    {
        img: 'cosmetic3.jpeg',
        title: 'Lipstick',
        price: 14.99,
        isFavorite: false,
    },
    {
        img: 'cosmetic1.jpeg',
        title: 'Eyeliner',
        price: 12.99,
        isFavorite: false,
    },
    {
        img: 'cosmetic4.jpeg',
        title: 'Mask',
        price: 9.99,
        isFavorite: false,
    },
]
  const clothe =[
    {
        img: 'clo11.jpg',
        title: 'T-shirt',
        price: 4.99,
        isFavorite: false,
    },
    {
        img: 'clothe1.jpeg',
        title: 'T-shirt',
        price: 6.99,
        isFavorite: false,
    },
    {
        img: 'clo2.jpg',
        title: 'Hoody',
        price: 7.99,
        isFavorite: false,
    },
    {
        img: 'clothe3.jpeg',
        title: 'Hoody',
        price: 9.99,
        isFavorite: false,
    },
  ]
  const watch =[
    {
        img: 'watch1.jpeg',
        title: 'PU',
        price: 399.99,
        isFavorite: false,
    },
    {
        img: 'watch2.jpeg',
        title: 'Tissot',
        price: 299.99,
        isFavorite: false,
    },
    {
        img: 'watch3.jpeg',
        title: 'Omega',
        price: 179.99,
        isFavorite: false,
    },
    {
        img: 'watch4.jpeg',
        title: 'Fossil',
        price: 167.99,
        isFavorite: false,
    },
  ]
  const other =[
    {
        img: 'other1.jpeg',
        title: 'Shoes',
        price: 15.99,
        isFavorite: false,
    },
    {
        img: 'book2.jpg',
        title: 'Books',
        price: 4.99,
        isFavorite: false,
    },
    {
        img: 'other3.jpeg',
        title: 'Bags',
        price: 9.99,
        isFavorite: false,
    },
    {
        img: 'other4.jpeg',
        title: 'Purses',
        price: 10.99,
        isFavorite: false,
    },
  ]


export default function Clothes(){
  const {addToast}=useToasts()
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
  const {Favorite, setFavorites}=useContext(FavoriteContext);
  const {keySearchs} = React.useContext(SearchContext)
  const statusExistData = cos.some((item) =>
item.title.includes(keySearchs)
);
clothe.some((item) =>
item.title.includes(keySearchs)
);
watch.some((item) =>
item.title.includes(keySearchs)
);
other.some((item) =>
item.title.includes(keySearchs)
);



    return(
        
    <div>
        <Slider img="/cloth002.jpeg" img="/cos001.jpeg"/>
        <div className="containr mt-4">
            <h2 className="text-left m-3">Cosmetics</h2>
              <div className="row">
              {
                    cos.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                      return (
                        <TextImage isFavorite={item.isFavorite} src={item.img} title={item.title} price={item.price} onclick={()=>addCart(item)} onclick1={()=>addFavorite(item)} />
                        )
                        

                      })                      
                  }
                  {!statusExistData ? <span>Unmatch items</span>:<></>}
              </div>
          </div>

          <div className="containr mt-4">
            <h2 className="text-left m-3">Clothes</h2>
              <div className="row">
              {
                    clothe.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                      return (
                        <TextImage isFavorite={item.isFavorite} src={item.img} title={item.title} price={item.price} onclick={()=>addCart(item)} onclick1={()=>addFavorite(item)} />
                        )
                        

                      })                      
                  }
                  {!statusExistData ? <span>Unmatch items</span>:<></>}
              </div>
          </div>

          <div className="containr mt-4">
            <h2 className="text-left m-3">Watches</h2>
              <div className="row">
              {
                    watch.filter((item)=>item.title.includes(keySearchs)).map((item) => {
                      return (
                        <TextImage isFavorite={item.isFavorite} src={item.img} title={item.title} price={item.price} onclick={()=>addCart(item)} onclick1={()=>addFavorite(item)} />
                        )
                        

                      })                      
                  }
                  {!statusExistData ? <span>Unmatch items</span>:<></>}
              </div>
          </div>

          <div className="containr mt-4">
            <h2 className="text-left m-3">Others</h2>
              <div className="row">
              {
                    other.filter((item)=>item.title.includes(keySearchs)).map((item) => {
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