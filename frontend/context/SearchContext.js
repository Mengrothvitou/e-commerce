import React , {createContext} from 'react';
const SearchContext=createContext();

const SearchContextProvider=({children})=>{
    const [keySearchs,setKeySearchs]=React.useState('');
    return(
        <SearchContext.Provider value={{keySearchs,setKeySearchs}}>
            {children}
        </SearchContext.Provider>
    )
}
export {
    SearchContext,
    SearchContextProvider,
}