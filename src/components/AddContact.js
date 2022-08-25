import React, {useState, useEffect} from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux'
import { initContact,updateContact } from './features/contactsSlice'
import { v4 as uuid4 } from 'uuid';

const AddContact = (props) => {


    const contacts = useSelector((state) => state.contacts.value);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {id} = useParams();

    const [name, setName] = useState("");

    const[email,setEmail] = useState("");

    const[userId,setUserId] = useState("");
  
    let edit = "false";

    let label ="Add";

    if(id !== undefined) {

        edit = "true";

        label = "Update";

    }

    useEffect(() =>{

          
        if(id !== undefined) {

            const found = contacts.find(obj => {

                return obj.id ===  id;

            });
            
            if(found){

                setName(found.name);
                setEmail(found.email);
                setUserId(found.id);

            }

        }

    },[]);



   const add = (e) =>{
       
        e.preventDefault();

        if(name === "" || email === ""){

            alert("All fields mandatory");

            return;
        }

        if(edit === "false"){
          
            const contact = {

                name : name,
                email: email
            }

            dispatch(initContact([...contacts,{ id:uuid4(), ...contact }]));
            
            setName("");
            setEmail("");

        }
        else{

            const contact = {

                id: userId,
                name : name,
                email: email
            }
            
            dispatch(updateContact(contact));

            setName("");
            setEmail("");

        }
        
        navigate("/");
 
    };
    
    return(

        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>

                <div className="field">
                    <label>Name</label>
                    <input value={name} type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input value={email} type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button className="ui button blue">{label}</button>
            
            </form>
            <Link to="/">
                    List Contact
            </Link>
        </div>
    );

}

export default AddContact;