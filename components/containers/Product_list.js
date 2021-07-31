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
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const handleDeleteProduct=async(id)=>{
  try {
    const res = await fetch(
      `http://localhost:8000/api/bags/${id}`,
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
});


export default function Product_list (){
      const [bagData, setbags]=React.useState([])
        React.useEffect(()=>{
            fetch("http://localhost:8000/api/bags")
            .then(res=>res.json())
            .then((res)=>{
                setbags(res)
                console.log(res);
            }).catch((err)=>{
                setbags([])
                console.log(err);
            })
        })
    //    const [bookData, setbooks]=React.useState([])
    // React.useEffect(()=>{
    //     fetch("http://localhost:8000/api/books")
    //     .then(res=>res.json())
    //     .then((res)=>{
    //         setbooks(res)
    //         console.log(res);
    //     }).catch((err)=>{
    //         setbooks([])
    //         console.log(err);
    //     })
    // })
    //    const [shoeData, setshoes]=React.useState([])
    // React.useEffect(()=>{
    //     fetch("http://localhost:8000/api/bags")
    //     .then(res=>res.json())
    //     .then((res)=>{
    //         setshoes(res)
    //         console.log(res);
    //     }).catch((err)=>{
    //         setshoes([])
    //         console.log(err);
    //     })
    // })
    //    const [clotheData, setclothes]=React.useState([])
    // React.useEffect(()=>{
    //     fetch("http://localhost:8000/api/bags")
    //     .then(res=>res.json())
    //     .then((res)=>{
    //         setclothes(res)
    //         console.log(res);
    //     }).catch((err)=>{
    //         setclothes([])
    //         console.log(err);
    //     })
    // })
    //    const [watchData, setwatchs]=React.useState([])
    // React.useEffect(()=>{
    //     fetch("http://localhost:8000/api/bags")
    //     .then(res=>res.json())
    //     .then((res)=>{
    //         setwatchs(res)
    //         console.log(res);
    //     }).catch((err)=>{
    //         setwatchs([])
    //         console.log(err);
    //     })
    // })
    //    const [cosmeticData, setcosmetics]=React.useState([])
    // React.useEffect(()=>{
    //     fetch("http://localhost:8000/api/bags")
    //     .then(res=>res.json())
    //     .then((res)=>{
    //         setcosmetics(res)
    //         console.log(res);
    //     }).catch((err)=>{
    //         setcosmetics([])
    //         console.log(err);
    //     })
    // })
  console.log(bagData)
  const classes = useStyles();
 return(
 <div>
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={styles.header}>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Stock</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {bagData.map((user) => (
            <StyledTableRow key={user.title}>
              <StyledTableCell component="th" scope="row">
                <img src={user.image} style={{height:30,width:30}}/>
              </StyledTableCell>
              <StyledTableCell align="center">{user._id}</StyledTableCell>
              <StyledTableCell align="center">{user.title}</StyledTableCell>
              <StyledTableCell align="center">{user.price}</StyledTableCell>
              <StyledTableCell align="center">{user.type}</StyledTableCell>
              <StyledTableCell align="center">{user.Stock}</StyledTableCell>
              <StyledTableCell align="center">{user.Status}
                <ButtonGroup disableElevation variant="contained" color="secondary">
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
                  color="secondary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                  onClick={()=>handleDeleteProduct(user._id)}
                >
                  Edit
                </Button>
                </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
            
            
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 </div>
 )
}