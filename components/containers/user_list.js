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

// const handleUploadFile=(e)=>{
//   e.preventDefault();
//   const file = e.target.files[0]
//   const storageRef = fireStorage.ref('uploads/');
//   const fileRef= storageRef.child(file.name);
//   fileRef.put(file)
//   .then((res)=>{
//     console.info(res)
//   }).catch((err)=>{
//     console.error(err)
//   })
// }

// const viewFile=(e)=>{
//   e.preventDefault()
//   const storageRef = fireStorage.ref();
//   const fileRef= storageRef.child("13.PNG");
//     fileRef.getDownloadURL()
//   .then((res)=>{
//     console.log("URL::",res);
//     setUrl(res)
//   })
//   .catch(e=>{
//     console.log(e)
//   })
// }

// const handleDeleteFile = ( e ) =>{
//   e.preventDefault()
//   const storageRef = fireStorage.ref();
//   const fileRef= storageRef.child("13.PNG");
//     fileRef.delete()
//   .then((res)=>{
//     console.log("URL::",res);
//     setUrl(res)
//   })
//   .catch(e=>{
//     console.log(e)
//   })
// }

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
const handleCreateUser=async(id)=>{
  try{
    const res = await fetch(
     `http://localhost:8000/api/users/${{id}}`,
     {
        method: 'post',
        header: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          "tou": '1-2',"tou@gmail.com":"tou@gmail.com"
          })
     }
    ).then((res)=>{
      console.log("User Created")
    })
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


export default function UserList (){
  const classes = useStyles();
  const [userData, setUsers]=React.useState([])
    React.useEffect(()=>{
        fetch("http://localhost:8000/api/users")
        .then(res=>res.json())
        .then((res)=>{
            setUsers(res)
            console.log(res);
        }).catch((err)=>{
            setUsers([])
            console.log(err);
        })
    })
 return(
 <div>
    <Button
      variant="contained"
      color="secondary"
      startIcon={<AddIcon />}
      align="center"
      onClick={()=>handleCreateUser}
      >
      Add User
    </Button>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={styles.header}>
            <StyledTableCell align="center">Profile</StyledTableCell>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center" type="password">Password</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {
          userData.map((user,index) => {
            return(
            <StyledTableRow key={user._id}>
              <StyledTableCell align="center" >
                <img src={user.avatar} style={{width:30, height:30,}}></img>
              </StyledTableCell>
              <StyledTableCell align="center" >{user._id}</StyledTableCell>
              <StyledTableCell align="center" >{user.username}</StyledTableCell>
              <StyledTableCell align="center" >{user.gender}</StyledTableCell>
              <StyledTableCell align="center" >{user.phoneNumber}</StyledTableCell>
              <StyledTableCell align="center" >{user.email}</StyledTableCell>
            <StyledTableCell align="center" >{user.Status}
                <ButtonGroup disableElevation variant="contained" color="secondary">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={()=>handleDeleteUser(user._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<EditIcon />}
                  onClick={()=>handleUpdateUser(user._id)}
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