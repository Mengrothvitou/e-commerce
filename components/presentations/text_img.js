const TextImage = ({src,title,price}) => {
    return(
        <div className="column">
        <div className="demo-content">
     
            <img src= {src} className ="img-container"></img>  
            <p className="card-title">{title}</p>
            <p className="card-price">{price}</p>
              <div class="add-to-cart">
                    <a href="#" class="default-btn">Add to Cart</a>
              </div>
        </div>
    </div>);
}
   
    

export default TextImage;