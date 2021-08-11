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