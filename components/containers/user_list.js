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
import PublishIcon from '@material-ui/icons/Publish';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddIcon from '@material-ui/icons/Add';
import AddUser from './../presentations/fromAddUser'
import Typography from '@material-ui/core/Typography';
import AlertDialog from '../presentations/alertDialog';


const handleDeleteUser=async(id)=>{
  try {
    const res = await fetch(
      `http://localhost:8000/api/users/${id}`,
      {
        method: 'delete',
      }
    ).then((res)=>{
      console.log("User deleted")
      alert("User deleted")
    })
    console.log(res)
  }catch(err){
    console.log(err)
  }
}
const handleUpdateUser=async(id)=>{
  try {
    const res = await fetch(
      `http://localhost:8000/api/users/${{id}}`,
      {
        method: 'put',
        header: { 'Content-Type': 'application/json'},
        body: JSON.stringify({"tou": '1-2',"tou@gmail.com":"tou@gmail.com"})
      }
    ).then((res)=>{
      console.log("User Updated")
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
  head:{
    backgroundColor: 'skyblue'
  }
});


export default function UserList (){
  const classes = useStyles();
  const [userData, setUsers]=React.useState([])
    React.useEffect(()=>{
      let unmounted= false;
        fetch("http://localhost:8000/api/users")
        .then(res=>res.json())
        .then((res)=>{
          if(!unmounted){
            setUsers(res)
            console.log(res);
          }
           
        }).catch((err)=>{
            setUsers([])
            console.log(err);
        })
        return ()=> {unmounted= true}
    },[])
 return(
 <div>
    <Typography style={{ cursor: 'move', fontSize: 24, }}>
      User List
    </Typography>
    <AddUser />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={styles.head}>
            <StyledTableCell align="center">Profile</StyledTableCell>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Phone Number</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Password</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {
          userData.map((user,index) => {
            return(
            <StyledTableRow key={user._id}>
              <StyledTableCell align="center" >
                <img src={user.avatar}style={{height:50,width:50}} />
              </StyledTableCell>
              <StyledTableCell align="center" >{user._id}</StyledTableCell>
              <StyledTableCell align="center" >{user.userName}</StyledTableCell>
              <StyledTableCell align="center" >{user.gender}</StyledTableCell>
              <StyledTableCell align="center" >{user.phoneNumber}</StyledTableCell>
              <StyledTableCell align="center" >{user.email}</StyledTableCell>
              <StyledTableCell align="center" type="password">{user.password}</StyledTableCell>
            <StyledTableCell align="center" >{user.Status}
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={()=>handleDeleteUser(user._id)}
                >
                  Delete
                </Button>
                {/* <AlertDialog /> */}
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                  onClick={()=>handleUpdateUser(user._id)}
                >
                  Edit
                </Button>
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