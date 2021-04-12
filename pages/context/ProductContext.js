import React , {createContext} from 'react';
const ProductContext=createContext();

const ProductContextProvider=({children})=>{
    const [cards,setCards]=React.useState([]);
    return(
        <ProductContext.Provider value={{cards,setCards}}>
            {children}
        </ProductContext.Provider>
    )
}
export {
    ProductContext,
    ProductContextProvider,
}