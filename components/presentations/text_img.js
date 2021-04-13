import { MdFavorite} from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import style from './../../styles/textimg.module.css'
const TextImage = ({src,title,price,onclick,onclick1,isFavorite}) => {
    const actived={
        color:'red',
        border:'none',
        backgroundColor:'none',
}
    const unactived={
        color:'black',
        border:'none',
        backgroundColor:'none',
}

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
                    <MdFavorite onClick={onclick1} style={isFavorite?actived:unactived} className={style.heart}/>
                </div>
            </div>
        </div>
    );
}

export default TextImage;