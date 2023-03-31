import React, { useState } from 'react';

import './styles.css';

export const App = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [value, setValue] = useState('N/A');

  async function onClick() {
    const moment = await import('moment');
    const reservationDateAndTime = moment
      .default('2022-04-26T23:30:00.000Z')
      .format('MM/D/YYYY h:mmA');
    setValue(reservationDateAndTime);
    setDetailsVisible(!detailsVisible);
  }

  return (
    <>
      <div className='container'>
        <h1 style={{textAlign: "center", paddingTop: "1em", fontFamily: "monospace", fontWeight: "bold", fontSize: "3em", color: "#bd5734 "}}>BUCHELI REACT OPTIMIZED RESTAURANT RESERVATION CARD</h1>
        <div className='e5-container' style={{width: "50%", margin: "auto", paddingTop: "2%"}}>
          <div className='e5-content-container'>
            <img src={require('./logo.png')} alt='Restaurant logo' />
            <h1>Your reservation is confirmed.</h1>
            <button onClick={onClick}>
              {detailsVisible ? 'Hide' : 'View'} Details
            </button>
          </div>
          {detailsVisible && (
            <div className='e5-details'>
              <p>Date and time: {value}</p>
              <p>Party: 2 adults</p>
            </div>
          )}
        </div>
      </div>
      <footer style={{textAlign: "center", paddingTop: "2em", paddingBottom: "2em", fontFamily: "monospace", fontWeight: "bold", fontSize: "2em", color: "#bd5734 "}}>Bucheli Web © 2023</footer>
    </>
  );
};

export default App;