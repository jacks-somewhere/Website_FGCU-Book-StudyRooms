import React from 'react';
import { useState } from 'react';



function EntryForm() {
    const[Firstn, setFirstn] = useState('');
    const[Lastn, setLastn] = useState('');
    const[Email, setEmail] = useState('');
    const[StartHour, setStartHour] = useState('');
    const[StartMin, setStartMin] = useState('00');
    const[StartAP, setStartAP] = useState('pm');
    const[EndHour, setEndHour] = useState('');
    const[EndMin, setEndMin] = useState('00');

    const submitform = (e) => {
        e.preventDefault()
        console.log({Firstn,Lastn,Email,StartHour,StartMin,StartAP,EndHour,EndMin})
    }


    return (
        <form onSubmit={submitform}>
            <h1>First and last Name</h1>
            <input type='text' value={Firstn} onChange={(e) => setFirstn(e.target.value)} placeholder='First Name' required />
            <input type='text' value={Lastn} onChange={(e) => setLastn(e.target.value)} placeholder='Last Name' required />
            
            <h1>Email</h1>
            <input type='email' value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required />
            
            <h1>Start Times</h1>
            <input type='number' value={StartHour} onChange={(e) => setStartHour(e.target.value)}placeholder='Starting Hour' required />
            <select value={StartMin} onChange={(e) => setStartMin(e.target.value)}>
                <option value='00'>:00</option>
                <option value='30'>:30</option>
            </select>
            <select value={StartAP} onChange={(e) => setStartAP(e.target.value)}>
                <option value='am'>PM</option>
                <option value='pm'>AM</option>
            </select>
            
            <h1>End Time</h1>
            <input type='number' value={EndHour} onChange={(e) => setEndHour(e.target.value)} placeholder='Ending Hour' required />
            <select value={EndMin} onChange={(e) => setEndMin(e.target.value)}>
                <option value='00'>:00</option>
                <option value='30'>:30</option>
            </select>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default EntryForm;