import React from 'react';
import { useState, useEffect } from 'react';
import "./AddPhone.css"
import { TextField, Button } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate, useOutletContext } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddPhone = (props) => {

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [disabled, setDisabled] = useState(true)
    const redirect = useNavigate()
    const [contacts, setContacts] = useOutletContext()

    const handlerChenge = (event, func) => {
        func(event.target.value)
    }

    const validation = () => {

        let reg = /^\+380\d{3}\d{2}\d{2}\d{2}$/
        let result = reg.test(phone)


        if (name.length < 2) {
            setErrorMessage('Name is not valid')
        }
        else if (userName.length < 2) {
            setErrorMessage('Username is not valid')
        }
        else if (phone.length < 13 || result === false || isNaN(phone) === true) {
            setErrorMessage('Password must be at least 13 characters long and start with +')
        }
        else {
            let lastId = contacts[contacts.length - 1].id
            let array = [{ id: lastId + 1, name: name, username: userName, phone: phone }]
            let fullArray = contacts.concat(array)
            setContacts(fullArray)
            redirect('/')
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
                        <Link to="/"><Button variant="outlined">Cancel</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPhone;
