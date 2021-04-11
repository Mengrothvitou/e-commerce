import TextImage from "../components/presentations/text_img"
const watch=[
    {
        img:'watch1.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch2.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch3.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch4.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch5.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch6.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch7.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch8.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch9.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch10.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch11.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch12.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch13.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch14.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch15.jpg',
        title:'watch',
        price:'89.99$',
    },
    {
        img:'watch16.jpg',
        title:'watch',
        price:'89.99$',
    },
]
import style from './../styles/title.module.css'
export default function Watches(){
    return(
        <div>
        <Slider img="/watch01.png" img="/watch01.png"/>
        <div className="containr mt-4">
            <div className={style.contitle}>
                <h2 className={style.title}>Watches</h2>
            </div>
            <div className="row">
                {
                  watch.map((item) => {
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