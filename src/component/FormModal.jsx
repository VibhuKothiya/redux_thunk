import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addProduct } from '../store/actions/productAction';
import { useDispatch } from 'react-redux';

export default function FormModal() {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };

    const handleInput = (e) => {

        setData({...data, [e.target.name] : e.target.value});
    }

    const AddData = () => {
        dispatch(addProduct(data))
        setOpen(false);
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Product
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    className: 'formhandle',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData).entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                                
                <DialogContent>
                    <TextField id="standard-basic" name='name' label="Name" variant="standard" onChange={handleInput}/><br />                 
                    <TextField id="standard-basic" name='price' label="Price" variant="standard" onChange={handleInput}/><br />
                    <TextField id="standard-basic" name='description' label="Description" variant="standard" onChange={handleInput}/><br />
                    <TextField id="standard-basic" name='category' label="Catagory" variant="standard" onChange={handleInput}/><br />
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button style={{ margin: '10px' }} variant="contained" onClick={AddData}>Submit</Button>

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
