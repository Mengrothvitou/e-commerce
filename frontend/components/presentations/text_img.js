import { MdFavorite} from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import style from './../../styles/textimg.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const TextImage = ({image,title,price,onclick,onclick1,isFavorite,}) => {
    const actived={
        color:'red',
        border:'none',
        backgroundColor:'none',
}
    const unactived={
        color:'black',
        border:'none',
        backgroundColor:'none',
}
const useStyles = makeStyles({
    root: {
        Width: 150,
        height: 'auto',
        marginTop:40,
    },
    CardContent: {
        textAlign: 'center',
    },
    ContentPrice: {
        fontSize: 20,
        color: 'red',
    },
    ContentTitle: {
        fontSize: 20,
    },
    CardAction: {
        justifyContent: 'center'
    },
  });
const classes = useStyles();
    return(
        // <div className="column">
        //     <div className="demo-content">
        //         <img src= {src} className ="img-container"></img>  
        //         <div className={style.description}>
        //             <p className="card-title">{title}</p>
        //             <p className="card-price">{price}</p>
        //         </div>
        //         <div class="add-to-cart">
                    
        //             <button onClick={onclick} className={style.btn}><FaCartPlus className={style.pluscart} /></button>
        //             <MdFavorite onClick={onclick1} style={isFavorite?actived:unactived} className={style.heart}/>
        //         </div>
        //     </div> 
        // </div>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt={title}
                width="200"
                height="300"
                image={image}
                title={title}
                />
                <CardContent className={classes.CardContent}>
                <Typography gutterBottom variant="h5" align="center" component="h2" className={classes.ContentTitle}>
                    {title}
                </Typography>
                <Typography gutterBottom variant="h5" align="center" component="h2" className={classes.ContentPrice}>
                    {price}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <div style={{justifyContent: 'center',margin: 'auto'}}>
                    <Button onClick={onclick} className={style.btn}><FaCartPlus className={style.pluscart} /></Button>
                    <MdFavorite onClick={onclick1} style={isFavorite?actived:unactived} className={style.heart}/>
                </div>
            </CardActions>
        </Card>
      
       
    );
}

export default TextImage;