import TextImage from "../components/presentations/text_img"

const clothes = [
    {
        img: 'clo1.jpg',
        title: 'T-shirt',
        price: 8.99 ,
    },
    {
        img: 'clo2.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo3.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo4.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo5.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo6.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo7.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo8.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo9.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo10.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo11.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo12.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo13.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo14.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo15..jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo16.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    
    

]

import Slider from './../components/presentations/slider'
import style from './../styles/title.module.css'
export default function Clothes(){
    return(
    <div>
        <Slider img="/clothe01.png" img="/clothe01.png"/>
        <div className="containr mt-4">
            <div className={style.contitle}>
                <h2 className={style.title}>Clothes</h2>
            </div>
            <div className="row">
                {
                  clothes.map((item) => {
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