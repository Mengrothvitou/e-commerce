import react, {useContext} from 'react';
import {FavoriteContext} from './context/FavoriteContext'
import TextImage from "../components/presentations/text_img"
import {useEffect} from 'react'

const Favorite =() =>{
    useEffect(()=>{
        document.title="  Favorites || Next Store";
    })
    const {Favorite, setFavorites}=useContext(FavoriteContext);
    console.log(Favorite);
    return(
        <div>
            <h1 style={{fontFamily:'Rationale,serif-sans',textAlign:'center',marginTop:'12px',marginBottom:'5px',borderBottom:'2px solid grey',borderScale:'1px',width:'120px',margin:'auto'}}>Favorite</h1>
                  {Favorite.map((Favorite,index)=>{
                      return(
                            <div>
                               <TextImage src={Favorite.img} title={Favorite.title} price={Favorite.price} isFavorite={Favorite.isFavorite}/>
                            </div>
                      )
                  })}
        </div>
    )
}
export default Favorite;