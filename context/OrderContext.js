import React , {createContext} from 'react';
const OrderContext=createContext();

const OrderContextProvider=({children})=>{
    const [order,setOrders]=React.useState([]);
    return(
        <OrderContext.Provider value={{order,setOrders}}>
            {children}
        </OrderContext.Provider>
    )
}
export {
    OrderContext,
    OrderContextProvider,
}