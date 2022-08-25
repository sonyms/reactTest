import React from "react";
import user from "./user.png";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { deleteContact } from './features/contactsSlice'

const ContactCard = (props) =>{

    const {id, name, email} = props.contact;

    const dispatch = useDispatch();
  
    const removeContact = (id) =>{
  
      dispatch(deleteContact(id));
  
    }
  
    return(
        <div className="item" key={id}>
            <img className="ui avatar image" src={user} alt={user} />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <div style={{float: 'right',marginBottom:"5px"}}>
                
                <Link to={`/contact/${id}`}>
                    <i className="edit alternate outline icon"
                    style={{ color: "blue", marginTop: "7px", cursor: "pointer"}}>

                    </i>
                </Link>
                <i className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px", cursor: "pointer" }} onClick={() => removeContact(id)}>

                </i>


            </div>
         
        </div>
    )
}

export default ContactCard;