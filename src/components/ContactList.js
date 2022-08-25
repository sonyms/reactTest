import React from "react";
import ContactCard from "./ContactCard";
import {Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import FileUpload from "./FileUpload";

const ContactList = (props) => {
    
  const contacts = useSelector((state) => state.contacts.value);
  
  const renderContactList = contacts.map((contact) => {
      return (
        <ContactCard
          contact={contact}
          key={contact.id}
        />
      );
    });
    
    return( 
      <div className="main">
        <h3 style={{marginTop:"55px"}}>
          Contact List
         
              <Link to="/contact">
               Add Contact
              </Link> 
      
        </h3>
        <div className="ui celled list">{renderContactList}</div>

        <FileUpload/>
      </div>
    );
};

export default ContactList;