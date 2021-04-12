import react, {useContext} from 'react';
import {FavoriteContext} from './context/FavoriteContext'
import TextImage from "../components/presentations/text_img"

const Favorite =() =>{
    const {Favorite, setFavorites}=useContext(FavoriteContext);
    console.log(Favorite);
    return(
        <div>
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