import React from 'react';
import CityEntries from './components/CityEntries';
import History from './components/History';
import Results from './components/Results';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>

        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Weather App :)</h1>
        </div>

          <div id="cityEntries">
            <CityEntries />
          </div>


          <div className="info">

          <div id="info11">
            <Results />
          </div>
  

          <div id="info22">
            <History/>
          </div>

    

        </div>

      </div>//container
    );
  }
}