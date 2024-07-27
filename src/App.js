
import { Button, TextField } from '@mui/material';

import './App.css';
import { useState } from 'react';

function App() {

  //state creation
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [interest,setInterest]=useState(0)
  
  const handleCalculate=(e)=>{
    console.log(principle);
    console.log(rate);
    console.log(year);

    let output=principle*year*rate/100
    console.log(output);
    setInterest(output)
  }
  const handleReset=(e)=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
  }



  
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='heading_text'>
            <h1>Simple Interest Calculator</h1>
            <p className='para' style={{ textAlign: 'justify' }}>The Simple Interest Calculator calculates the interest and end balance based on the simple interest formula. Click the tabs to calculate the different parameters of the simple interest formula. In real life, most interest calculations involve compound Interest. To calculate compound interest, use the Interest Calculator.</p>
          </div>
          <div className='total_amount_card'>
            <div className='card_text'>
              <h3 className='total_amount_symbol'>&#8377; {interest}</h3>
              <p className='parat'>Total simple interest calculator</p>
            </div>
          </div>
          <div className='input'>
          <div>
          <TextField id="outlined-basic" label="Principle Amount" variant="outlined"
          onChange={e=>setPrinciple(e.target.value)} value={principle|| ""}
           />
          </div>
          <div>
          <TextField id="outlined-basic" label="Rate Of Interest" variant="outlined"
          onChange={e=>setRate(e.target.value)} value={rate|| ""}
           />
          </div>
          <div>
          <TextField id="outlined-basic" label="Year" variant="outlined" 
          onChange={e=>setYear(e.target.value)} value={year|| ""}
          />
          </div>
          </div>

          <div className='btn-grp'>
          <Button 
          onClick={handleCalculate}
          style={{backgroundColor:'black'}} className='btn' variant="contained">calculate</Button>
           <Button
           onClick={handleReset}
           className='btn' variant="outlined">Reset</Button>
          </div>
          </div>



      </header>
    </div>
  );
}

export default App;
