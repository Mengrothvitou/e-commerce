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
 
export default TextImage;