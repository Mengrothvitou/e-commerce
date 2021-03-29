
import Link from 'next/link'
import Image from '../components/presentations/image'
import TextImage from './../components/presentations/text_img'
const cos =[
  // Cosmetic
  {
    img: 'cosmetic2.jpeg',
    title: 'BB Cream',
    price: 12.99
  },
  {
    img: 'cosmetic3.jpeg',
    title: 'BB Cream',
    price: 12.99
  },
  {
    img: 'cosmetic1.jpeg',
    title: 'BB Cream',
    price: 12.99
  },
  {
    img: 'cosmetic4.jpeg',
    title: 'BB Cream',
    price: 12.99
  },
]
const cloth=[
  // Clothes
  {
    img: 'shirt.jpeg',
    title: 'Domnork T-shirt',
    price: 12.99
  },
  {
    img: 'clothe1.jpeg',
    title: 'T-shirt',
    price: 12.99
  },
  {
    img: 'clothe2.jpeg',
    title: 'Addidas Hoody',
    price: 12.99
  },
  {
    img: 'clothe3.jpeg',
    title: 'Sweater',
    price: 12.99
  },
]
const watch=[
  // Watches
  {
    img: 'watch1.jpeg',
    title: 'PU Banteay Srei',
    price: 12.99
  },
  {
    img: 'watch2.jpeg',
    title: 'Tissot 1853',
    price: 12.99
  },
  {
    img: 'watch3.jpeg',
    title: 'Omega Sa 1969',
    price: 12.99
  },
  {
    img: 'watch4.jpeg',
    title: 'PU Oyster Engrave',
    price: 12.99
  },
]
const other=[
  // Others
  {
    img: 'other1.jpeg',
    title: 'Shoe',
    price: 12.99
  },
  {
    img: 'other2.jpeg',
    title: 'Perfume',
    price: 12.99
  },
  {
    img: 'other3.jpeg',
    title: 'Bags',
    price: 12.99
  },
  {
    img: 'other4.jpeg',
    title: '',
    price: 12.99
  },
]
export default function Home() {
    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="home.jpeg" className="d-block w-100 img-fluid" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="home1.jpeg" className="d-block w-100 img-fluid" alt="..."/>
            </div>
          </div>
        </div>
        <div>
            <div className="containr mt-4">
            <h2 className="text-center1">Welcome to Our Store</h2>
                {/* Cosmetic */}
                <h2 className="text-left m-3">Cosmetics</h2>
                <div className="row">
                  {
                        cos.map((item) => {
                            return (
                                <TextImage src={item.img} title={item.title} price={item.price} />
                            )

                        })
                    }
                </div>
                    {/* Clothes */}
                <h2 className="text-left m-3">Clothes</h2>
                <div className="row">
                  {
                        cloth.map((item) => {
                            return (
                                <TextImage src={item.img} title={item.title} price={item.price} />
                            )

                        })
                    }
                </div>
                    {/* Watches */}
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
                {/* Other */}
                <h2 className="text-left m-3">Others</h2>
                <div className="row">
                  {
                        other.map((item) => {
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