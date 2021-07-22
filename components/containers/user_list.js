import React from 'react'
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

export async function getStaticProps() {
  const user = await fetch('http://localhost:8000/api/users')
  const userdata = await user.json()
  return {
    
    props: {userdata },
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

// function createData( ID, Name, Gender,Phonenumber,Email ,Password,Status) {
//   // return { ID, Name, Gender,Phonenumber,Email ,Password,Status};
// }


const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});


export default function UserList ({userdata}){
  const classes = useStyles();
 return(
 <div>
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={styles.header}>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Phone Number</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center" type="password">Password</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {
          userdata.map((user) => {
            return(
            <StyledTableRow key={user.user}>
              <StyledTableCell align="center" ID={user.id} ></StyledTableCell>
              <StyledTableCell align="center" Name={user.user}></StyledTableCell>
              <StyledTableCell align="center" Gender={user.gender}></StyledTableCell>
              <StyledTableCell align="center" Phonenumber={user.phoneNumber}></StyledTableCell>
              <StyledTableCell align="center" Email={user.email}></StyledTableCell>
              <StyledTableCell align="center" Password={user.password}></StyledTableCell>
              <StyledTableCell align="center" Status={user.Status}>
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
            
            
          )
          })
        }
        </TableBody>
      </Table>
    </TableContainer>
 </div>
 )
}