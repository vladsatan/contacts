import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const UserTable = (props) => {

    let { contacts, setContacts } = props 

    const deleteContact = (contact) => {
      let array = contacts.filter(element => element.id !== contact.id)
      setContacts(array);
    }
      
    return (
        <div className='UserTable'>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: "700"}}>№</TableCell>
              <TableCell align="right" sx={{fontWeight: "700"}}>Name</TableCell>
              <TableCell align="right" sx={{fontWeight: "700"}}>Username</TableCell>
              <TableCell align="right" sx={{fontWeight: "700"}}>Phone</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact,index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right" sx={{padding: "0px"}}>{contact.name}</TableCell>
                <TableCell align="right" sx={{padding: "0px"}}>{contact.username}</TableCell>
                <TableCell align="right" sx={{padding: "0px"}}>{contact.phone}</TableCell>
                <TableCell align="right" sx={{padding: "0px"}}><IconButton aria-label="delete" size="large" onClick={()=>deleteContact(contact)}><DeleteIcon fontSize="inherit" /></IconButton></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
}

export default UserTable;