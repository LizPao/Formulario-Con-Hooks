import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconfirm, setPasswordConfirm] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={createUser}>
            <div className='divForm'>
                <label className='labelForm'>First Name </label>
                <input className='inputForm' type="text" onChange={(e) => setFirstname(e.target.value)} />
            </div>
            <div className='divForm'>
                <label className='labelForm'>Last Name </label>
                <input className='inputForm' type="text" onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div className='divForm'>
                <label className='labelForm'>Email</label>
                <input className='inputForm' type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='divForm'>
                <label className='labelForm'>Password </label>
                <input className='inputForm' type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='divForm'>
                <label className='labelForm'>Password Confirm</label>
                <input className='inputForm' type="password" onChange={(e) => setPasswordConfirm(e.target.value)} />
            </div>

            <div className='result'>
                <h1 className='titleData'>Your Form Data</h1>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Password Confirm: {passwordconfirm}</p>
                
            </div>
        </form>
    );
};

export default UserForm;