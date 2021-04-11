import TextImage from "../components/presentations/text_img"
const cosmetic = [
    {
        img: 'cosmetic2.jpeg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmetic3.jpeg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmetic1.jpeg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmetic4.jpeg',
        title: 'Night cream',
        price: 12.99,
    },

    {
        img: 'cosmet5.jpg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmet6.jpg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmet7.jpg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmet8.jpg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmet9.jpg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmet10.jpg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmet11.jpg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmet12.jpg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmet13.jpg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmet14.jpg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmet15.jpg',
        title: 'Night cream',
        price: 12.99,
    },
    {
        img: 'cosmet16.jpg',
        title: 'Night cream',
        price: 12.99,
    },

]

import Slider from './../components/presentations/slider'
import style from './../styles/title.module.css'
export default function Cosmetic(){
    return(
        
        <div>
        <Slider img="/cosmetic1.png" img="/cosmetic01.png"/>
        <div className="containr mt-4">
            <div className={style.contitle}>
                <h2 className={style.title}>Cosmetics</h2>
            </div>
            <div className="row">
                {
                  cosmetic.map((item) => {
                     return (
                       <TextImage src={item.img} title={item.title} price={item.price} />
                        )

                    })
                  }
            </div>
        </div>
    </div>
        
    )
}
