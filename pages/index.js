
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from '../components/presentations/image'
import TextImage from './../components/presentations/text_img'
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
        <div className="containr mt-4">
                <h2 className="text-center1">Welcome to Our Store</h2>
                {/* Cosmetic */}
                <h2 className="text-left m-3">Cosmetic</h2>
                <div className="row">
                    <TextImage src="cosmetic2.jpeg" title="BB Cream"/>
                    <TextImage src="cosmetic3.jpeg" title="Lipstick innisfree"/>
                    <TextImage src="cosmetic1.jpeg" title="Eyelinner innisfree"/>
                    <TextImage src="cosmetic4.jpeg" title="Sleeping mask innisfree"/>
                </div>
                {/* Clothes */}
                <h2 className="text-left m-3">Clothes</h2>
                <div className="row">
                    <TextImage src="shirt.jpeg" title="Domnork T-shirt"/>
                    <TextImage src="clothe1.jpeg" title="T-shirt"/>
                    <TextImage src="clothe3.jpeg" title="Addidas Hoody"/>
                    <TextImage src="clothe4.jpeg" title="Sweater"/>
                </div>
                {/* Watches */}
                <h2 className="text-left m-3">Watches</h2>
                <div className="row">
                    <TextImage src="watch1.jpeg" title="Pu Banteay Srei"/>
                    <TextImage src="watch2.jpeg" title="Tissot 1853"/>
                    <TextImage src="watch3.jpeg" title="Omega Sa 1969"/>
                    <TextImage src="watch4.jpeg" title="Pu Oyster Engrave"/>
                </div>
                {/* Others */}
                <h2 className="text-left m-3">Others</h2>
                <div className="row">
                    <TextImage src="other1.jpeg" title="Shoe"/>
                    <TextImage src="other2.jpeg" title="Perfume"/>
                    <TextImage src="other3.jpeg" title="Bags"/>
                    <TextImage src="other4.jpeg" title="Purse"/>
                </div>
            </div>
      </div>
    )
  }