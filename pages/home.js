import TextImage from "../components/presentations/text_img"

const cosmetic = [
    {
        img: 'cosmetic2.jpeg',
        title: 'T-shirt',
        price: 8.99 ,
    },
    {
        img: 'cosmetic3.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'cosmetic1.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'cosmetic4.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
]
  const clothe =[
    {
        img: 'clo11.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clothe1.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clo2.jpg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'clothe3.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
  ]
  const watch =[
    {
        img: 'watch1.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'watch2.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'watch3.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'watch4.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
  ]
  const other =[
    {
        img: 'other1.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'other2.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'other3.jpeg',
        title: 'T-shirt',
        price: 8.99,
    },
    {
        img: 'other4.jpeg',
        title: 'T-shirt',
        price: 8.99,
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