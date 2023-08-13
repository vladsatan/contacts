import React from 'react';
import { useState, useEffect } from 'react';
import "./AddPhone.css"
import { TextField, Button } from '@mui/material';
import { Link } from "react-router-dom";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddPhone = (props) => {

    const {contacts, setContacts, setIsOpenPopup} = props
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [disabled, setDisabled] = useState(true)

    const handlerChenge = (event, func) => {
        func(event.target.value)
    }

    const validation = () => {

        if (name.length < 2) {
            setErrorMessage('Name is not valid')
        }
        else if (userName.length < 2) {
            setErrorMessage('Username is not valid')
        }
        else if (phone.length < 12 || phone[0] !== '+' || isNaN(phone) === true) {
            setErrorMessage('Password must be at least 12 characters long and start with +')
        }
        else {
            let lastId = contacts[contacts.length - 1].id
            let array = [{ id: lastId + 1, name: name, username: userName, phone: phone }]
            let fullArray = contacts.concat(array)
            setContacts(fullArray)
            setIsOpenPopup(false)
        }
    }

    useEffect(() => {
        if (name.length !== 0 && userName.length !== 0 && phone.length !== 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [name, userName, phone])

    return (
        <div className='popup-bg'>
            <div className='modal'>
                <div className='popup-container'>
                    <h1>Add Contact</h1>
                    <TextField id="filled-basic" label="Name" variant="filled" name='name' onChange={(event) => handlerChenge(event, setName)} />
                    <TextField id="filled-basic" label="Username" variant="filled" name='surname' onChange={(event) => handlerChenge(event, setUserName)} />
                    <TextField id="filled-basic" label="Phone number" variant="filled" name='phone' onChange={(event) => handlerChenge(event, setPhone)} />
                    {errorMessage ? <Alert severity="error" sx={{ marginTop: '20px' }}>{errorMessage}</Alert> : null}
                    <div className='button-flex'>
                        <Button variant="contained" onClick={validation} disabled={disabled}>Save</Button>
                        <Button variant="outlined" onClick={()=> setIsOpenPopup(false)}>Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPhone;
