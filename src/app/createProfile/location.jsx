"use client"
import React,{useState} from 'react'
import stateCountry from 'state-country';

const Location = () => {
    const [country, setCountry] = useState("")
    const countriesList = stateCountry.getAllCountries();
    const statesList = stateCountry.getAllStatesInCountry(country);
  return (
    <div className='bg-transparent flex justify-between items-center gap-5 mt-10'>

    <div className='flex flex-col w-1/2'>
    <label htmlFor="country" className='mb-2'>Country:</label>
    <select onChange={(e) => setCountry(e.target.value)} className='bg-transparent border-b-2' name='country'>
        <option value="">--Select a country--</option>
      {countriesList.map(country => {
        return (
            <option value={country.name} key={country.id} >{country.name}</option>
        )
      }) }
    </select>
    </div>

    <div className='flex flex-col w-1/2'>
    <label htmlFor="state" className='mb-2'>State:</label>
    <select className='bg-transparent border-b-2' name="state">
        <option value="">--Select a state--</option>
      {statesList.map(state => {
        return (
            <option value={state.name} key={state.id} >{state.name}</option>
        )
      }) }
    </select>
    </div>
    </div>
  )
}

export default Location
