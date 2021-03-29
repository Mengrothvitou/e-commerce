import TextImage from "../components/presentations/text_img"
const shoes=[
    {
        img:'shoes5.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes6.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes7.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes8.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes1..jpg',
        title:'shoes',
        price:'6.99$'
    },  {
        img:'shoes2.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes3.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes4.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes5.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes6.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes7.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes8.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes9.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes10.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes11.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes12.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes13.jpg',
        title:'shoes',
        price:'6.99$'
    },
    {
        img:'shoes14.jpg',
        title:'shoes',
        price:'6.99$'
    },  {
        img:'shoes15.jpg',
        title:'shoes',
        price:'6.99$'
    },  {
        img:'shoes16.jpg',
        title:'shoes',
        price:'6.99$'
    },

    
]

export default function Shoe(){
    return(
        <div>
          <div className="containr mt-4">
                <h2 className="text-left m-3">Shoes</h2>
                <div className="row">
                {
                        shoes.map((item) => {
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