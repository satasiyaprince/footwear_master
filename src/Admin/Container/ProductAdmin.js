import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DialogContentText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';




function ProductAdmin(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [dopen, setDopen] = useState(false);
    const [did, setDid] = useState(false);
    const [update, setUpdate] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setUpdate(false);
    };

    const handleClose = () => {
        setOpen(false);
        setUpdate(false);
        formik.resetForm();
        setDopen(false);

    };

    const getData = () => {
        const localData = JSON.parse(localStorage.getItem("product"));
        if (localData !== null) {
            setData(localData);
        }
    }

    useEffect(() => {
        getData();
    },[])

    const productAdd = (values) => {
        const localData = JSON.parse(localStorage.getItem("product"));

        let id = Math.floor(Math.random() * 100)

        let Data = { id: id, ...values }

        if (localData === null) {
            localStorage.setItem("product", JSON.stringify([Data]));
        } else {
            localData.push(Data);
            localStorage.setItem("product", JSON.stringify(localData));
        }
        console.log(localData, Data);
        setOpen(false);
        formik.resetForm();
        getData();
    }


    const handleDelete = (data) => {
        setDopen(true);
        setDid(data.id);
    }

    const handleDeleteData = () => {
        const localData = JSON.parse(localStorage.getItem("product"));

        let Ddata = localData.filter((l) => l.id !== did);

        localStorage.setItem("product", JSON.stringify(Ddata));

        setData(Ddata);
        setDopen(false);
    }

    const handleEdit = (data) =>{
        setOpen(true);
        console.log(data);
        formik.setValues(data);
        setUpdate(true);
    }

    const handleUpdateData = (values) =>{
        const localData = JSON.parse(localStorage.getItem("product"));

       let  Udata = localData.map((l) =>{
        if(l.id === values.id){
            return values;
        }else{
            return l;
        }
       })

       setData(Udata);

       localStorage.setItem("product", JSON.stringify(Udata));
       handleClose();

    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
            field: 'Quantity',
            headerName: 'Quantity',
            type: 'number',
            width: 90,
        },
        {
            field: 'Expiry',
            headerName: 'Expiry',
            type: 'number',
            width: 90,
        },
        {
            field: 'Action',
            headerName: 'Action',
            width: 90,

            renderCell: (parms) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(parms.row)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={() => handleEdit(parms.row)}>
                        <EditIcon />
                    </IconButton>
                </>
            )

        },

    ];

    let schema = yup.object().shape({
        name: yup.string().required(),
        price: yup.string().required(),
        Quantity: yup.number().required().positive().integer(),
        Expiry: yup.string().required(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            Quantity: '',
            Expiry: '',

        },
        validationSchema: schema,
        onSubmit: values => {
            if(update){
                handleUpdateData(values);
            }else{
                productAdd(values);
            }
        },
    });

    const { handleChange, handleBlur, handleSubmit, errors, touched, values } = formik

    return (
        <div>
            <h1>Product Admin Details</h1>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Product List</DialogTitle>
                <Formik value={formik}>
                    <Form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField
                                margin="dense"
                                id="name"
                                name='name'
                                label="Product Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                            <TextField
                                margin="dense"
                                id="price"
                                name='price'
                                label="Product Price"
                                type="number"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                            <p>{errors.price && touched.price ? errors.price : ''}</p>
                            <TextField
                                margin="dense"
                                id="Quantity"
                                name='Quantity'
                                label="Product Quantity"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Quantity}
                            />
                            <p>{errors.Quantity && touched.Quantity ? errors.Quantity : ''}</p>
                            <TextField
                                margin="dense"
                                id="Expiry"
                                name='Expiry'
                                label="Product Expiry"
                                type=""
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Expiry}
                            />
                            <p>{errors.Expiry && touched.Expiry ? errors.Expiry : ''}</p>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>{update ? "Update" : "Add"}</Button>
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>
            <Dialog open={dopen} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are You Sure Delete Data
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={() => handleDeleteData()}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ProductAdmin;