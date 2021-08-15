import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography, Paper } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AddIcon from '@material-ui/icons/Add';
import {fireStorage} from './../../service/firebase';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '55ch',

        },
    },
    h5: {
        fontSize: 20,
        padding: 30,
    },

    closeButton: {
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    file: {

        width: '20ch',
        margin: theme.spacing(2),
    },
    input: {

    },
    inputfile: {
        width: '50ch',

    },
    gender: {
        display: 'inline',
        margin: theme.spacing(2),
        
    },
    btn:{
        marginLeft: 12
    }

}));





export default function AddUser() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('');
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setCurrency(event.target.value);
        setValue(event.target.value)
    };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCreateUser=()=>{
        const file = document.getElementById("avatar").files[0]
        const storageRef = fireStorage.ref("userProfile/")
        const fileRef = storageRef.child(file.name);
        fileRef.put(file)
        .then((res)=>{
            fileRef.getDownloadURL()
            .then((res)=>{
                console.log(res)
                fetch('http://localhost:8000/api/users', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                       "userName":document.getElementById("userName").value,
                       "email":document.getElementById("email").value,
                       "phoneNumber":document.getElementById("phonenumber").value,
                       "avatar":res,
                       "password":document.getElementById("password").value,
                       "gender":value,
                        })
                })
                      .then(response => response.json())
                      .then(data => 
                        setOpen(false))
                      .catch((err)=>{
                        console.error(err)
                      })
            })
            .catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })

    }

    //   const handleChange = (event) => {
    //     setValue(event.target.value);
    //   };
    return (
        <div>
            <DialogActions>
                <Button 
                    onClick={handleClickOpen} 
                    variant="contained" 
                    color="primary" 
                    className={classes.btn}
                    startIcon={<AddIcon/>}
                    
                >
                        Add User
                </Button>
            </DialogActions>
            <Dialog
                open={open}
                // onClose={handleClose}
                // PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Add User
                </DialogTitle>
                <DialogContent>
                    <form className={classes.root} noValidate autoComplete="off">

                        <div className={classes.form}>

                            <TextField
                                accept="image/png, image/jpeg, image/jpg"
                                className={classes.input}
                                id="avatar"
                                multiple
                                type="file"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="userName"
                                label=" Username"
                                defaultvlaue=""
                                InputProps={{'aria-label':'userName'}}
                                placeholder="type in here"
                                type="string"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="phonenumber"
                                label=" Phone Number "
                                defaultvlaue=""
                                InputProps={{'aria-label':'phonenumber'}}
                                placeholder="type in here"
                                type="string"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="email"
                                label=" Email "
                                defaultvlaue=""
                                InputProps={{'aria-label':'email'}}
                                placeholder="type in here"
                                type="string"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="password"
                                label=" Passward "
                                placeholder="type in here"
                                type="string"
                                variant="outlined"
                            />


                            <FormControl className={classes.gender} component="fieldset" id="gender">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup className={classes.gender} aria-label="gender"  name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />

                                </RadioGroup>
                            </FormControl>


                        </div>
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreateUser} color="primary">
                        Add User
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}