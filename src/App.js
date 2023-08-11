import './App.css';
import UserTable from './Components/Table/Table';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>  res.json())
    .then(data => setContacts(data))  
  },[])

  return (
    <div className="App">
    <h1>Your contacts</h1>
      <UserTable contacts={contacts} setContacts={setContacts} />
    <Link to="add_phone"><Button variant="contained">Add contact</Button></Link>
    <Outlet context={[contacts, setContacts]} />
    </div>
  );
}

export default App;
