"use client"
import React,{useState} from 'react'
import stateCountry from 'state-country';

const Location = () => {
    const [country, setCountry] = useState("")
    const countriesList = stateCountry.getAllCountries();
    const statesList = stateCountry.getAllStatesInCountry(country);
  return (
    <div>
    <select onChange={(e) => setCountry(e.target.value)}>
        <option value="">--Select a country--</option>
      {countriesList.map(country => {
        return (
            <option value={country.name} key={country.id} >{country.name}</option>
        )
      }) }
    </select>
    <select>
        <option value="">--Select a state--</option>
      {statesList.map(state => {
        return (
            <option value={state.name} key={state.id} >{state.name}</option>
        )
      }) }
    </select>
    </div>
  )
}

export default Location
