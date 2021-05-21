import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flights from './components/Flights';
import API from './utils/API.js'


class App extends Component {
  constructor() {
    super();
    this.state = {

      flights: []
    };
  }

  componentDidMount() {
    this.FlightsTest();

  }

  searchflights = () => {
    API.getFlight()
      // .then(res => res.json())
      .then(
        (result) => {
          // console.log(result.data.results)

          this.setState({
            flights: []
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
  };


render() {

  return (

    <div>

        <Flights employees={this.state.flights} />
  </div>


  )
  }
}

export default App;
