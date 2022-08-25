import React, { useEffect} from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { Route,Routes} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { initContact } from './components/features/contactsSlice'

function App() {


  const LOCAL_STORAGE_KEY = "contacts";

  const contacts = useSelector((state) => state.contacts.value);

  const dispatch = useDispatch();

  useEffect(() => {

    let contactsExisting = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (contactsExisting) {

      dispatch(initContact(contactsExisting))

    };
    
  }, []);

  useEffect(() => {

    if(contacts.length>0) {

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }

  }, [contacts]);

/* 
  function regularExpressionForDateValidation(){

    let regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    return regex;

  } */
  
  return (

    <div className="ui container">
            
    <Routes>
      <Header/>
     
      <Route path="/"  element={

        <ContactList  />

      }>
      </Route>
      <Route path="/contact" element={

        <AddContact />

      }>         
      </Route>
      <Route path="/contact/:id" element={

        <AddContact/>

        }>
      </Route>
    
    </Routes>
    </div>
  );
}

export default App;
