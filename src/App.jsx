import React, { useState, useEffect } from 'react'
import './App.css';
import CountryForm from './components/CountryForm';
import CountryList from './components/CountryList';

const App = () => {

  const [listedCountry, setListedCountry] = useState(() =>
    JSON.parse(localStorage.getItem('listedCountry')) || []
  );

  const tableHeader = ["국가명", "금메달", "은메달", "동메달"];

  //초기데이터세팅
  useEffect(() => {
    localStorage.setItem('listedCountry', JSON.stringify(listedCountry));
  }, [listedCountry]);

  return (
    <div className="container">
      <CountryForm
        listedCountry={listedCountry}
        setListedCountry={setListedCountry}
        tableHeader={tableHeader}
      />
      <CountryList
        listedCountry={listedCountry}
        setListedCountry={setListedCountry}
        tableHeader={tableHeader}
      />
    </div>
  )
}

export default App;