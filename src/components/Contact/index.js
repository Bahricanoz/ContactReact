import ContactList from "./ContactList";
import Form from "./Form";
import { useState } from "react";
import  './style.css';
function Contact(){
    const [contacts,setContacts] = useState([
        {fullName:"Burak", phone_Number:234},
        {fullName:"Veli", phone_Number:12345},
        {fullName:"İsmet", phone_Number:232324},


    ])
    return(
        <div id="container" >
            <h1>Contact List</h1>
            <ContactList contacts={contacts}/>
            <Form addContacts={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contact;