import TextImage from "../components/presentations/text_img"

const cosmetic = [
    {
        img: 'cosmetic2.jpeg',
        title: 'Cream',
        price: 6.99 ,
    },
    {
        img: 'cosmetic3.jpeg',
        title: 'Lipstick',
        price: 14.99,
    },
    {
        img: 'cosmetic1.jpeg',
        title: 'Eyeliner',
        price: 12.99,
    },
    {
        img: 'cosmetic4.jpeg',
        title: 'Mask',
        price: 9.99,
    },
]
  const clothe =[
    {
        img: 'clo11.jpg',
        title: 'T-shirt',
        price: 4.99,
    },
    {
        img: 'clothe1.jpeg',
        title: 'T-shirt',
        price: 6.99,
    },
    {
        img: 'clo2.jpg',
        title: 'Hoody',
        price: 7.99,
    },
    {
        img: 'clothe3.jpeg',
        title: 'Hoody',
        price: 9.99,
    },
  ]
  const watch =[
    {
        img: 'watch1.jpeg',
        title: 'PU',
        price: 399.99,
    },
    {
        img: 'watch2.jpeg',
        title: 'Tissot',
        price: 299.99,
    },
    {
        img: 'watch3.jpeg',
        title: 'Omega',
        price: 179.99,
    },
    {
        img: 'watch4.jpeg',
        title: 'Fossil',
        price: 167.99,
    },
  ]
  const other =[
    {
        img: 'other1.jpeg',
        title: 'Shoes',
        price: 15.99,
    },
    {
        img: 'book2.jpg',
        title: 'Books',
        price: 4.99,
    },
    {
        img: 'other3.jpeg',
        title: 'Bags',
        price: 9.99,
    },
    {
        img: 'other4.jpeg',
        title: 'Purses',
        price: 10.99,
    },
  ]
  
import Slider from './../components/presentations/slider'
export default function Clothes(){
    return(
        
    <div>
        
        <div className="containr mt-4">
            <h2 className="text-left m-3">Cosmetics</h2>
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

          <div className="containr mt-4">
            <h2 className="text-left m-3">Clothes</h2>
              <div className="row">
                  {
                    clothe.map((item) => {
                      return (
                        <TextImage src={item.img} title={item.title} price={item.price} />
                        )
                      })
                  }
              </div>
          </div>

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

          <div className="containr mt-4">
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
        
    )
}