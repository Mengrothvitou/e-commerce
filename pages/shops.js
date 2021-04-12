import react, {useContext} from 'react';
import {ProductContext} from './context/ProductContext'
import TextImage from "../components/presentations/text_img"

const Shop =() =>{
    const {cards, setCards}=useContext(ProductContext);
    console.log(cards);
    return(
        <div>
                  {cards.map((shop,index)=>{
                      return(
                          <div>
                            <TextImage src={shop.img} title={shop.title} price={shop.price}/>
                          </div>
                      )
                  })}
        </div>
    )
}
export default Shop;