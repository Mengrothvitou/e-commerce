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
import AddProduct from '../presentations/formAddProduct';
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

function createData(Image, Name, Price, Quantity,Stock,Status) {
  return { Image, Name, Price, Quantity,Stock,Status };
}

const rows = [
  createData('Image', 'Shoes', '50$', '550','In stock',),
  createData('Image', 'Shoes', '50$', '550','In stock',),
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});


export default function Product_list (){
  const classes = useStyles();
  
 return(
 <div>
    <AddProduct/>
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={styles.header}>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="center">ID/Name</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Quantity</StyledTableCell>
            <StyledTableCell align="center">Stock</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Image}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Name}</StyledTableCell>
              <StyledTableCell align="center">{row.Price}</StyledTableCell>
              <StyledTableCell align="center">{row.Quantity}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Stock}</StyledTableCell>
              <StyledTableCell align="center">{row.Status}
              <ButtonGroup disableElevation variant="contained" color="secondary">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<EditIcon />}
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