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
   
    

export default TextImage;