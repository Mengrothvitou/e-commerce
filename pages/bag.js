import TextImage from "../components/presentations/text_img"
const bag=[
    {
        img:'bag1.jpg',
        title:'bag',
        price:'10.99$'
    },
    {
        img:'bag2.jpg',
        title:'bag',
        price:'10.99$'
    },
    {
        img:'bag3.jpg',
        title:'bag',
        price:'10.99$'
    },
    
    {
        img:'bag4.jpg',
        title:'bag',
        price:'10.99$'
    },
    
    {
        img:'bag5.jpg',
        title:'bag',
        price:'10.99$'
    },
    
    {
        img:'bag6.jpg',
        title:'bag',
        price:'10.99$'
    },
    
    {
        img:'bag7.jpg',
        title:'bag',
        price:'10.99$'
    },
    
    {
        img:'bag8.jpg',
        title:'bag',
        price:'10.99$'
    },
    {
        img:'bag9.jpg',
        title:'bag',
        price:'10.99$'
    },
    
    {
        img:'bag10.jpg',
        title:'bag',
        price:'10.99$'
    },
    
    {
        img:'bag11.jpg',
        title:'bag',
        price:'10.99$'
    },
    
    {
        img:'bag12.jpg',
        title:'bag',
        price:'10.99$'
    },
      {
        img:'bag13.jpg',
        title:'bag',
        price:'10.99$'
    },
    {
        img:'bag14.jpg',
        title:'bag',
        price:'10.99$'
    },
    
    {
        img:'bag15.jpg',
        title:'bag',
        price:'10.99$'
    },
    {
        img:'bag16.jpg',
        title:'bag',
        price:'10.99$'
    },
    

    
]

import Slider from './../components/presentations/slider'
export default function Bag(){
    return(
        
    <div>
        <Slider img="/bag01.png" img="/bag01.png"/>
        <div className="containr mt-4">
            <h2 className="text-left m-3">Bags</h2>
            <div className="row">
                {
                  bag.map((item) => {
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