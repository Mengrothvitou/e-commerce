import styles from '../../styles/adminOrderlist.module.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
  createData('Image', 'Shoes', '50$', '550','In stock','Delete/Edit'),
  createData('Image', 'Shoes', '50$', '550','In stock','Delete/Edit'),
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
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={styles.header}>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="right">ID/Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Stock</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Image}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Name}</StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
              <StyledTableCell align="right">{row.Quantity}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Stock}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
            
            </StyledTableRow>
            
            
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 </div>
 )
}