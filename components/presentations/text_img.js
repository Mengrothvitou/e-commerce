<<<<<<< HEAD
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginTop: 30,
    justifyContent: 'center',
  },
  media: {
    height: 100,
    width: '100%',
    paddingTop: "56.25%", // 16:9
    position:'relative',
  },
  btn:{
      justifyContent: 'center',

  }
 
}));

export default function TextImage({ image,title,price,onclick,onclick1,isFavorite,}) {
  const classes = useStyles();
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
    
  return (
    <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                component="img"
                alt={title}
                image={image}
            />
            <CardContent>
                <Typography style={{fontWeight:'bold',fontSize: 24,textAlign: 'center',color: 'black',fontFamily: 'Calibri'}} variant="h5" align="center" component="h2">
                    {title}
                </Typography>
                <Typography style={{fontWeight:'bold',fontSize: 20,color: 'red',textAlign: 'center',fontFamily: 'Calibri'}} variant="h5" align="center" component="h2" className={classes.ContentPrice}>
                    {price}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className={classes.btn}>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon style={isFavorite?actived:unactived} onClick={onclick1} />
            </IconButton>
            <IconButton aria-label="cart">
                <AddShoppingCartIcon onClick={onclick} style={{color: 'black'}}/>
            </IconButton>
        </CardActions>
    </Card>
  );
}
=======

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { withStyles} from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Image from 'next/image'
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const useStyles = makeStyles({
    root: {
      maxWidth: 245,
    },
    media: {
      height: 220,
    },
  });
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[700]),
      backgroundColor: purple[800],
   
      marginLeft:'50px',
      '&:hover': {
        backgroundColor: purple[700],
     
  
      },
    },
  }))(Button);
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



  const classes = useStyles();

  return (
    <Card  className={classes.root}>
      
        <CardMedia
          className={classes.media}
          component="img"
          image={image}
          title={title}
        />
        

        <CardContent>
          {/* <Image width={200} height={200} src={`/${image}`}/> */}
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {price}
          </Typography>
        </CardContent>
    
      <CardActions>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon style={isFavorite?actived:unactived} onClick={onclick1} />
        </IconButton>
        <IconButton aria-label="cart">
            <AddShoppingCartIcon onClick={onclick} style={{color: 'black'}}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default TextImage ;
>>>>>>> be8ef2db34dd787cc93dd579b7c75558b59eb9fd
