
import style from '../../styles/slider.module.css'
export default function Slider(props){
    return(
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={props.img} className={style.img} alt="img-slider"/>
                    </div>
                    <div className="carousel-item">
                    <img src={props.img}className={style.img} alt="img-slider"/>
                    </div>
                </div>
            </div>
        </div>
    )
}