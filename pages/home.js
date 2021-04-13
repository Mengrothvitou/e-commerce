import { useContext, useState } from "react"
import TextImage from "../components/presentations/text_img"
import Slider from './../components/presentations/slider'
import {ProductContext} from './context/ProductContext'
import {FavoriteContext} from './context/FavoriteContext'

const cosmetic = [
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
    return(
        
    <div>
        <Slider img="/cosmetic1.png" img="/cosmetic01.png"/>
        <div className="containr mt-4">
            <h2 className="text-left m-3">Cosmetics</h2>
              <div className="row">
                  {
                    cosmetic.map((item) => {
                      return (
                        <TextImage isFavorite={item.isFavorite} src={item.img} title={item.title} price={item.price} onclick={()=>addCart(item)} onclick1={()=>addFavorite(item)} />
                        )
                      })
                  }
              </div>
          </div>

          <div className="containr mt-4">
            <h2 className="text-left m-3">Clothes</h2>
              <div className="row">
                  {
                    clothe.map((item) => {
                      return (
                        <TextImage isFavorite={item.isFavorite} src={item.img} title={item.title} price={item.price} onclick={()=>addCart(item)} onclick1={()=>addFavorite(item)}/>
                        )
                      })
                  }
              </div>
          </div>

          <div className="containr mt-4">
            <h2 className="text-left m-3">Watches</h2>
              <div className="row">
                  {
                    watch.map((item) => {
                      return (
                        <TextImage isFavorite={item.isFavorite} src={item.img} title={item.title} price={item.price} onclick={()=>addCart(item)} onclick1={()=>addFavorite(item)}/>
                        )
                      })
                  }
              </div>
          </div>

          <div className="containr mt-4">
            <h2 className="text-left m-3">Others</h2>
              <div className="row">
                  {
                    other.map((item) => {
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