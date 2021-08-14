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
import {Typography,Paper} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import { useEffect } from 'react';
import {fireStorage} from './../../service/firebase';
import { ref } from 'yup';

const currencies = [
    {
        value: 'Clothes',
        label: 'Clothes',
    },
    {
        value: 'Home',
        label: 'Home',
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
    btn:{
        margin: 12
        
    }

}));


// function PaperComponent(props) {
//     return (
//       <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
//         <Paper {...props} />
//       </Draggable>
//     );
//   }




export default function AddProduct() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('Colthes');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCreateProduct=()=>{
        const file = document.getElementById("image").files[0]
        const storageRef = fireStorage.ref("productlist/")
        const fileRef = storageRef.child(file.name);
        fileRef.put(file)
            .then((res)=>{
                fileRef.getDownloadURL()
                .then((res)=>{
                    fetch('http://localhost:8000/api/products', {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                        "title":document.getElementById("title").value,
                        "price":document.getElementById("price").value,
                        "type":currency,
                        "image":res,
                        "desc":document.getElementById("desc").value,
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
    return (
        <div>
            <DialogActions>
                <Button onClick={handleClickOpen} variant="contained" color="primary" className={classes.btn} startIcon={<AddIcon/>}>
                    Add Product
                </Button>
            </DialogActions>
            <Dialog
                open={open}
                // onClose={handleClose}
                // PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Add Product
                </DialogTitle>
                <DialogContent>
                    <form className={classes.root} noValidate autoComplete="off">

                        <div className={classes.form}>

                            <TextField
                                required
                                id="title"
                                label="Product name "
                                placeholder="type in here"
                                type="string"
                                variant="outlined"
                            />
                            <TextField
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
                            <TextField
                                id="quantity"
                                label="Quantity"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                            <div className={classes.Desricption}>
                                <TextField
                                    label="Product Price"
                                    id="price"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                />

                            </div>
                            <TextField
                                id="desc"
                                label="Description"
                                multiline
                                rows={4}
                                variant="outlined"
                            />


                            <TextField
                                accept="image/*"
                                className={classes.input}
                                id="image"
                                multiple
                                type="file"
                                variant="outlined"
                            />

                        </div>
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreateProduct} color="primary">
                        Add Product
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}