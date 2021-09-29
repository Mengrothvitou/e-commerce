import react, {useContext} from 'react';
import {FavoriteContext} from '../context/FavoriteContext'
import TextImage from "../components/presentations/text_img"
import {useEffect} from 'react'
import Grid from '@material-ui/core/Grid';

const Favorite =() =>{
    useEffect(()=>{
        document.title="  Favorites || Next Store";
    })
    const {Favorite, setFavorites}=useContext(FavoriteContext);
    console.log(Favorite);
    return(
        <div>
            <h1 style={{fontFamily:'Rationale,serif-sans',textAlign:'center',marginTop:'12px',marginBottom:'5px',borderBottom:'2px solid grey',borderScale:'1px',width:'120px',margin:'auto'}}>Favorite</h1>
                <Grid container justify="center" spacing={3}>
                  {Favorite.map((Favorite,index)=>{
                      return(
                        <Grid item xs={10} sm={5} md={3} style={{marginTop: 15,marginBottom: 10,}}>
                            <TextImage image={Favorite.image} title={Favorite.title} price={`${Favorite.price}$`} isFavorite={Favorite.isFavorite}/>
                        </Grid>
                      )
                  })}
                </Grid>
        </div>
    )
}
export default Favorite;