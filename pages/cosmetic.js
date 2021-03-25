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
export default function Cosmetics() {
    return (

        <div>
            <div className="containr mt-4">
                <h2 className="text-left m-3">Cosmetic</h2>
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