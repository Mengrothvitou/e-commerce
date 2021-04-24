import React from 'react'
import { useContext, useState } from "react"
import TextImage from "../components/presentations/text_img"
import Slider from './../components/presentations/slider'
import {ProductContext} from './context/ProductContext'
import {FavoriteContext} from './context/FavoriteContext'
import {SearchContext} from './context/Searchcontext'

const Products = [
    {
        img: 'cosmetic2.jpeg',
        title: 'Cream',
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
  const {Favorite, setFavorites}=useContext(FavoriteContext);
 const {keySearchs} = React.useContext(SearchContext)
  const statusExistData = Products.some((item) =>
  item.title.includes(keySearchs)
  );
  console.log("Match name or not :", statusExistData);
  const handleSubmit = (e) => {
    console.log(e.target.value);
  };
  
    return(
        
    <div>
      
        <Slider img="/cosmetic1.png" img="/cosmetic01.png"/>
        <div className="containr mt-4">
     
            <h2 className="text-left m-3">Cosmetics</h2>
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
        
    );
   
}