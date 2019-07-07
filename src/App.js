import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsApp from './NewsApp.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} height="150"  width="200" />
          <div className="Size" >Icons made by <a href="https://www.freepik.com/?__hstc=57440181.8968288942c231172bf979bbc78204c1.1562495988585.1562495988585.1562495988585.1&__hssc=57440181.1.1562495988586&__hsfp=3199901494" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </div>
        <NewsApp/>
      </div>
    );
  }
}

export default App;
