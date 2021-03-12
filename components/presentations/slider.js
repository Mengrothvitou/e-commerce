import React from 'react';
import { Carousel } from "react-responsive-carousel";
export default function Slider(){
    return(
        <Carousel autoPlay>
            <div>
                <img src="home.jpeg" alt="slide"/>
                <p className="hello">Home</p>

            </div>
        </Carousel>
    )
}