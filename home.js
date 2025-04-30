import React from 'react';
import { useState } from 'react';


function EntryForm() {
    const [Firstn, setFirstn] = useState('');
    const [Lastn, setLastn] = useState('');
    const [Email, setEmail] = useState('');
    const [Day, setDay] = useState('');
    const [StartHour, setStartHour] = useState('');
    const [StartMin, setStartMin] = useState('00');
    const [StartAP, setStartAP] = useState('am');
    const [EndHour, setEndHour] = useState('');
    const [EndMin, setEndMin] = useState('00');
    const [EndAP, setEndAP] = useState('pm');

    const submitform = async (e) => {
        e.preventDefault();  
        console.log({Firstn,Lastn,Email,StartHour,StartMin,StartAP,EndHour,EndMin,EndAP})

        const UserData = {
            Firstn,
            Lastn,
            Email,
            Day: parseInt(Day),
            StartHour: parseInt(StartHour),
            StartMin,
            StartAP,
            EndHour: parseInt(EndHour),
            EndMin,
            EndAP,
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/bookroom', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(UserData),
            });

            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <form onSubmit={submitform}>
            <h1>First and last Name</h1>
            <div className='inputs'>
                <input type='text' value={Firstn} onChange={(e) => setFirstn(e.target.value)} placeholder='First Name' required />
                <input type='text' value={Lastn} onChange={(e) => setLastn(e.target.value)} placeholder='Last Name' required />
            </div>

            <h1>Email</h1>
            <div className='inputs'>
                <input type='email' value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required />
            </div>

            <h1>Number of Days Away</h1>
            <div className='inputs'>
                <input type='number' value={Day} onChange={(e) => setDay(e.target.value)} placeholder='Days' required />
            </div>

            <h1>Start Times</h1>
            <div className='inputs'>
                <input type='number' value={StartHour} onChange={(e) => setStartHour(e.target.value)}placeholder='Starting Hour' required />
                <select value={StartMin} onChange={(e) => setStartMin(e.target.value)}>
                    <option value='00'>:00</option>
                    <option value='30'>:30</option>
                </select>
                <select value={StartAP} onChange={(e) => setStartAP(e.target.value)}>
                    <option value='am'>AM</option>
                    <option value='pm'>PM</option>
                </select>
            </div>    
            
            <h1>End Time</h1>
            <div className='inputs'>
                <input type='number' value={EndHour} onChange={(e) => setEndHour(e.target.value)} placeholder='Ending Hour' required />
                <select value={EndMin} onChange={(e) => setEndMin(e.target.value)}>
                    <option value='00'>:00</option>
                    <option value='30'>:30</option>
                </select>
                <select value={EndAP} onChange={(e) => setEndAP(e.target.value)}>
                    <option value='am'>AM</option>
                    <option value='pm'>PM</option>
                </select>
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default EntryForm;