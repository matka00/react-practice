import React, { useEffect, useState } from 'react'

export default function Timer2() {

    const [time, setTime] = useState(0)
    const [countryName, setCountryName] = useState('')
    const [country, setCountry] = useState(null)

    useEffect(() => {
        console.log('time changed')

    }, [time])
    // [time] --> a time változására "iratkozunk fel"

    useEffect(() => {
        async function fetchData() {
            // You can await here
            let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
            const data = await response.json();
            setCountry(data[0].name.nativeName[data[0].cca3.toLowerCase()].common)
        }
        
        if (countryName !== '') {
            fetchData();
        }
    }, [countryName]);


return (
    <>
        <div>
            {time}
        </div>
        <input type='text' onChange={(event) => { setCountryName(event.target.value) }}></input>
        <button onClick={() => { setTime(time + 1) }}>Click me</button>
        <div>{country}</div>
    </>
)
}
