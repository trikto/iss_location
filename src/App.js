import React, {Component} from 'react';
import './App.css';
import image from './bgimage.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      timestamp: null,
      latitude: null,
      longitude: null,
      loading: false
    }
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    this.setState({loading:true});

    const data = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const response = await data.json();

    const url = response.timestamp
    const data2 = await fetch(`https://showcase.api.linx.twenty57.net/UnixTime/fromunixtimestamp?unixtimestamp=${url}`);
    const response2 = await data2.json();

    this.setState({timestamp: response2.Datetime, latitude: response.latitude, longitude: response.longitude , loading:false});
    console.log(this.state);
  }

  componentDidMount() {
    this.fetchData();
  }

  render () {
    if (this.state.loading) {
      return <h2 className='tc f2'>Loading</h2>
    } else {
      return (
        <div className="tc f2 georgia">
          <h2>Current location of the ISS</h2>
          <div className='ma2 pa2 tl fw4 dib'>
            <p>Timestamp : {this.state.timestamp}</p>
            <p>Position :</p>
            <ul>
              <li>Latitude : {this.state.latitude}</li>
              <li>Longitude : {this.state.longitude}</li>
            </ul>
          </div>
          <img src={image} className='mv5 fr br4 grow dib' />
          <br />
          <button className='grow br4 f4 pa2 no-underline bg-animate bg-washed-green hover-bg-light-blue black' onClick={this.fetchData}>Refresh</button>
        </div>
      );
    }
  }
}

export default App;
