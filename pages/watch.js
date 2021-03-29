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
export default function Watches(){
    return(
        <div>
         <div>
          <div className="containr mt-4">
                <h2 className="text-left m-3">Watches</h2>
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
        
        </div>
    )
}