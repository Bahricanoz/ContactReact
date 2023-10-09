import { useState } from "react";
function Form({addContacts,contacts}){
    const [form,setForm] = useState({fullName:"", phone_Number:""});
    const onChangeInput= (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        if(form.fullName === "" || form.phone_Number===""){
            return false;
        }
        console.log(form);
        addContacts([...contacts,form]);
        setForm({fullName:"",phone_Number:""})
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={onChangeInput} />
            </div>
            <div>
                <input name="phone_Number" placeholder="Phone Number" value={form.phone_Number} onChange={onChangeInput}/>
            </div>
            <div id="btn">
                
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form;