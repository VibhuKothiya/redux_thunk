import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addProduct } from '../store/actions/productAction';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import '../App.css'
import { Update_data } from '../store/actions/productAction';

export default function FormModal({ viewId }) {
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
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const AddData = () => {
        if(!data.name || !data.price || !data.description){
            alert("Fill all the data");
            return 
        }
        dispatch(addProduct(data))
        
        setOpen(false);
    }

    useEffect(() => {
        if (viewId) {
            setOpen(true)
            axios.get(`http://localhost:3003/product/${viewId}`).then((res) => {
                setData(res.data)
            })
        }
    }, [viewId]);

    //update-data
    const UpdateData = () =>{
        dispatch(Update_data(data));
        setOpen(false)
    }

    
    return (
        <React.Fragment>
            <button className='button-style' onClick={handleClickOpen}>
                Add Product
            </button>
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
                    <TextField id="standard-basic" name='name' label="Name" variant="standard" onChange={handleInput} value={data.name} /><br />
                    <TextField id="standard-basic" name='price' label="Price" variant="standard" onChange={handleInput} value={data.price} /><br />
                    <TextField id="standard-basic" name='description' label="Description" variant="standard" onChange={handleInput} value={data.description} /><br />
                    

                </DialogContent>
                <DialogActions>
                    <button className='button-style' onClick={handleClose}>Cancel</button>

                    <button className='button-style' style={{ margin: '10px' }} variant="contained" onClick={() => {
                        if(data.id && data){
                            UpdateData()
                        }
                        else{
                            AddData();
                        }
                    }}>{data.id && data? "upadte": "submit"}</button>

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
