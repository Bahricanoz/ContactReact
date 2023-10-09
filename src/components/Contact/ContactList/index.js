import { useState } from "react";
function ContactList({contacts}){
    const [filter,setFilter] = useState('');
    const filtered = contacts.filter((item) =>{
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filter.toLocaleLowerCase())

        );
        
    }) 
    return(
        
        <div>
            <input placeholder="Fiter" value={filter} onChange={(e)=> setFilter(e.target.value)}/>
            
            <ul className="list">
                {filtered.map((contact,i) =>(
                    <li key={i}>
                        <span>{contact.fullName}</span>
                        <span>{contact.phone_Number}</span>

                    </li>
                ))}
            </ul>
            <p>Total Contact({filtered.length})</p>
        </div>
    )
}
export default ContactList;