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

// import Draggable from 'react-draggable';

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


    //   const handleChange = (event) => {
    //     setValue(event.target.value);
    //   };
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add User
            </Button>
            <Dialog
                open={open}
                // onClose={handleClose}
                // PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Add User_Form
                </DialogTitle>
                <DialogContent>
                    <form className={classes.root} noValidate autoComplete="off">

                        <div className={classes.form}>

                            <TextField
                                required
                                id="outlined-required"
                                label=" FullName "
                                placeholder="type in here"
                                type="string"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label=" Phone Number "
                                placeholder="type in here"
                                type="string"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label=" Email "
                                placeholder="type in here"
                                type="string"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label=" Passward "
                                placeholder="type in here"
                                type="string"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label=" Status"
                                placeholder="type in here"
                                type="string"
                                variant="outlined"
                            />

                            <FormControl className={classes.gender} component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup className={classes.gender} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
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
                    <Button onClick={handleClose} color="primary">
                        Add Product
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}