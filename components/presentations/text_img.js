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
                <Typography style={{fontWeight:'bold',fontSize: 20,color: 'red',textAlign: 'center',fontFamily: 'Calibri'}} variant="h5" align="center" component="h2" >
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
