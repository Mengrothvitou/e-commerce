import React from 'react';
import styles from '../../styles/adminOrderlist.module.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddProduct from './../presentations/formAddProduct'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const handleDeleteProduct=async(id)=>{
  try {
    const res = await fetch(
      `http://localhost:8000/api/products/${id}`,
      {
        method: 'delete',
      }
    ).then((res)=>{
      console.log("Product deleted")
      alert("Product deleted")
    })
    console.log(res)
  }catch(err){
    console.log(err)
  }
}
const handleUpdateProduct=async(id)=>{
  try {
    const res = await fetch(
      `http://localhost:8000/api/bags/${{id}}`,
      {
        method: 'put',
        header: { 'Content-Type': 'application/json'},
        body: JSON.stringify({"tou": '1-2',"tou@gmail.com":"tou@gmail.com"})
      }
    ).then((res)=>{
      console.log("Product Updated")
    })
    console.log(res)
  }catch(err){
    console.log(err)
  }
}
const currencies = [
  {
      value: 'Clothes',
      label: 'Clothes',
  },
  {
      value: 'Cosmetic',
      label: 'Cosmetic',
  },
  {
      value: 'Book',
      label: 'Book',
  },
  {
      value: 'Bag',
      label: 'Bag',
  },
  {
      value: 'Watch',
      label: 'Watch',
  },
  {
      value: 'Shoes',
      label: 'Shoes',
  },
];
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#EFFDFF',
    color: theme.palette.common.grey,
    fontFamily:'Nunito',
    fontSize:17,
   
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    
      '& > *': {
        margin: theme.spacing(1),
        
  
      },
    },

}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  head:{
    backgroundColor:'skyblue'
  }
});


export default function Product_list (){
  const [currency, setCurrency] = React.useState('Colthes');
  
  const handleChange = (event) => {
      setCurrency(event.target.value);
  };
      const [bagData, setbags]=React.useState([])
        React.useEffect(()=>{
            fetch("http://localhost:8000/api/products")
            .then(res=>res.json())
            .then((res)=>{
                setbags(res)
                console.log(res);
            }).catch((err)=>{
                setbags([])
                console.log(err);
            })
        })
  console.log(bagData)
  const classes = useStyles();
  
 return(
 <div>
    <Typography style={{ cursor: 'move', fontSize: 24, }}>
      Product List
    </Typography>
    <TextField
      style={{margin: 12}}
      id="type"
      select
      label="Category Name"
      value={currency}
      onChange={handleChange}
      helperText="Please select your currency"
      variant="outlined"
     >
     {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    <AddProduct />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={styles.head}>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Stock</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {
          bagData.map((user) => (
            <StyledTableRow key={user.title}>
              <StyledTableCell component="th" scope="row">
                <img src={user.image} style={{height:50,width:50}}/>
              </StyledTableCell>
              <StyledTableCell align="center">{user._id}</StyledTableCell>
              <StyledTableCell align="center">{user.title}</StyledTableCell>
              <StyledTableCell align="center">{user.price}</StyledTableCell>
              <StyledTableCell align="center">{user.type}</StyledTableCell>
              <StyledTableCell align="center">{user.Stock}</StyledTableCell>
              <StyledTableCell align="center">{user.created}</StyledTableCell>
              <StyledTableCell align="center">{user.Status}
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={()=>handleDeleteProduct(user._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                  onClick={()=>handleUpdateProduct(user._id)}
                >
                  Edit
                </Button>
              </StyledTableCell>
            </StyledTableRow>
            
            
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 </div>
 )
}