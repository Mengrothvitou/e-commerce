
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import styles from './../../styles/adminOrderList.module.css' 
import Avatar from '@material-ui/core/Avatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from '../../styles/adminOrderlist.module.css'
import { FormHelperText } from '@material-ui/core';
import Tablelist from '../../components/containers/Order_list'
import Dashboard from '../../components/containers/dashBoard';
import Product_list from '../../components/containers/Product_list';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
   nested: {
      paddingLeft: theme.spacing(4),
   },
   avatar: {
      display: 'flex',
      '& > *': {
         margin: theme.spacing(1),
      },
   },
   menu: {
      paddingBottom:50,
   },
   pages: {
      paddingBottom:50,
      paddingTop:50,
   },
}));



export default function AdminOrderList() {
   const [menu, setMenu] = React.useState(0);
   const [open, setOpen] = React.useState(true);
   const classes = useStyles();
   return (
      <div>

         <Grid container direction="row">
           
               <Grid item xs={5} sm={3} className={classes.menu}>
                  <List
                     component="nav"
                     aria-labelledby="nested-list-subheader"
                     subheader={
                        <div className={classes.avatar}>
                           <Avatar alt="Nextstore" src="/static/images/avatar/1.jpg" />
                           <ListSubheader component="div" id="nested-list-subheader">
                              Next Store
                           </ListSubheader>
                        </div>

                     }
                     className={classes.root}
                  >
                     <ListItem button onClick={() => setMenu(0)}>
                        <ListItemIcon>
                           <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="All Order" />
                     </ListItem>
                     <ListItem button onClick={() => setMenu(1)}>
                        <ListItemIcon>
                           <ShoppingBasketIcon />
                        </ListItemIcon>
                        <ListItemText primary="All Product" />
                     </ListItem>
                     <ListItem button onClick={() => setMenu(2)}>
                        <ListItemIcon>
                           <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                     </ListItem>
                  </List>

               </Grid>
                <Grid item xs={7} sm={9} className={classes.pages}>

                  {menu === 0 &&
                     <>
                      <Tablelist/>
                     </>
                  }
                  {menu === 1 &&
                     <>
                        <Product_list/>
                     </>
                  }
                  {menu === 2 &&
                     <>
                       <Dashboard/>
                     </>
                  }

            </Grid>
         </Grid>

      </div>
   );
}