import './App.css';
import UserTable from './Components/UserTable/UserTable';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import AddPhone from './Components/AddPhone/AddPhone';

function App() {

  const [contacts, setContacts] = useState([]);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>  res.json())
    .then(data => setContacts(data))  
  },[])

  return (
    <div className="App">
    <h1>Your contacts</h1>
      <UserTable contacts={contacts} setContacts={setContacts} />
      <Button variant="contained" onClick={()=> setIsOpenPopup(true)}>Add contact</Button>

      {isOpenPopup? <AddPhone contacts={contacts} setContacts={setContacts} setIsOpenPopup={setIsOpenPopup} /> : null}
    </div>
  );
}

export default App;
