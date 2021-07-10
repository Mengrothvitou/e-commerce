import React , {createContext} from 'react';
const FavoriteContext=createContext();

const FavoriteContextProvider=({children})=>{
    const [Favorite,setFavorites]=React.useState([]);
    return(
        <FavoriteContext.Provider value={{Favorite,setFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}
export {
    FavoriteContext,
    FavoriteContextProvider,
}