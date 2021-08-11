import React from 'react'
import TextImage from "../components/presentations/text_img"
import style from './../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core'
import { MdInfoOutline } from 'react-icons/md';
import Image from '../components/presentations/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive =  {
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
const slideSpeed = 3000;

// @refresh reset
const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor:'white',
  },
  slide: {
    textAlign: 'center',
  
    // color: theme.palette.text.secondary,
  },
  info: {
   width:'100%',
  },
  fashion: {
    textAlign: 'left',
    margin: 50,
    fontSize:'60px',
  },
  more: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: '20px',
  },
   button:{
     margin:'50px',

   },
   Carousel:{
     marginLeft:'5%',
     marginRight:'5%',
     marginTop:100,
   },
   Topsell:{
    marginLeft:'2%',
    fontSize:50,
   },
  
 
  

}))

export default function Clothes() {
  const classes = useStyles();
 
  return (

    <div>

      <div className={classes.root}>
        <Grid container spacing={0}>

          <Grid item xs={5}>
            <div className={classes.slide}>
              <img src ="/slider01.jfif" /></div>
          </Grid>
          <Grid item xs={7}>
            <div className={classes.info}>
              <h2 className={classes.fashion}> Explore Brand <br />New Fashion Clothes</h2>
              <p className={classes.more}>Shop the new Spring-Summer 2021 collection now available on Next store.com <br />and discover the latest selection of ready-to-wear and accessories .</p>
              <div className={classes.button}>
              <Button variant="outlined" color="primary" size="large">
                Shop Now
              </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
     <div className={classes.Carousel}>
     <Carousel
              autoPlay={true}
              autoPlaySpeed={2 * slideSpeed}
              responsive={responsive}
              infinite={true}
            >
              <Paper className="paper">
              <img src ="https://images.unsplash.com/photo-1621951833860-c1ceea369593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" className={style.p1} />
          
              </Paper>

              <Paper className="paper">
              <img src ="https://images.unsplash.com/photo-1580760919537-5984837d7076?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"className={style.p2}/>
              </Paper>
              <Paper className="paper">
              <img src ="https://images.unsplash.com/photo-1598528738936-c50861cc75a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNvc21ldGljc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className={style.p3}/>
              </Paper>

              <Paper className="paper">
              <img src ="https://images.unsplash.com/photo-1575796398382-4e28b372a274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className={style.p4}/>
              </Paper>
              <Paper className="paper">
              <img src ="https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=800" className={style.p4}/>
              </Paper>
           
            </Carousel>
     </div>
    
     
     
     <div className={style.cart}>
   
        <img src ="logo2.jpg" className={style.logo}/><br/>        
        <p className={style.p}>We have premium brands in wholesale quantity. Source for e-commerce, resale & more. Jomar Wholesale Provides Access To Basic And Designer Brands At Wholesale Pricing. Dominate Reselling Today. Poshmark Reseller Boxes. Premium Brands in Bulk.</p><br/>
     </div> 
    <div>
      <h1 className={classes.Topsell}>Top Selling</h1>
    </div>

    </div>

  )
}