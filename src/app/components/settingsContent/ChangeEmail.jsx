"use client";
import React from 'react';
import styl from './settings.module.css';
const ChangeEmail = () => {
    const [email, setEmail] = React.useState(false);
    const disChanged = () => {
        setEmail(!email);
    };
    console.log(email)
    return (
        <div className={styl.email_change}>
            <input type="email" className="form-control" id="exampleInputPassword1" defaultValue="ahmed@gmail.com" disabled={email} style={{ width: '80%' }} />
            <div className={styl.changged} onClick={disChanged}>
                Change
            </div>
        </div>
    );
}

export default ChangeEmail;
