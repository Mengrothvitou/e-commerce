import TextImage from "../components/presentations/text_img"
const book=[
    {
        img:'book1.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book2.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book3.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book4.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book5.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book6.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book7.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book8.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book9.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book10.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book11.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book12.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book13.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book14.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book15.jpg',
        title:'book',
        price:'9.99$',
    },
    {
        img:'book16.webp',
        title:'book',
        price:'9.99$',
    },
]
export default function Book(){
    return(
        
    <div>
         <div>
          <div className="containr mt-4">
                <h2 className="text-left m-3">Books</h2>
                <div className="row">
                {
                        book.map((item) => {
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