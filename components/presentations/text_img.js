const TextImage = ({src,title,price,onclick}) => {
    return(
        <div className="column">
            <div className="demo-content">
                <img src= {src} className ="img-container"></img>  
                <div className={style.description}>
                    <p className="card-title">{title}</p>
                    <p className="card-price">{price}</p>
                </div>
                <div class="add-to-cart">
                    
                    <button onClick={onclick} className={style.btn}><FaCartPlus className={style.pluscart} /></button>
                    <button className={style.btn}><FaHeart class={style.heart}/></button>
                </div>
            </div>
        </div>
    );
}
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import style from './../../styles/textimg.module.css'
export default TextImage;