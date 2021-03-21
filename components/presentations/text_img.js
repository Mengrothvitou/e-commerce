<<<<<<< HEAD
const TextImage = ({src,title,price}) => {
    return(
        <div className="column">
        <div className="demo-content">
            <img src= {src} className ="img-container"></img>  
            <p className="card-title">{title}</p>
            <p className="card-price">{price}</p>
        </div>
    </div>);
}
   
    

=======
const TextImage = ({src, title}) => {
    return ( 
        
                    <div className="column">
                        <div className="demo-content">
                            <img src={src} className="img-container"></img>
                            <p className="card-title">{title}</p>
                        </div>
                    </div>

     );
}
 
>>>>>>> 4ad9077b2a61f94ef96dad2336ec3d98c0521c97
export default TextImage;