
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