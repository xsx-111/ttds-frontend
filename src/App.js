import React, {Component} from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.crossDomain = true;
const server = 'http://127.0.0.1:8000';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      name: "",
      age: 0
    }
    this.change = this.change.bind(this);
    this.write = this.write.bind(this);
    this.read = this.read.bind(this);
  }

  change (key, e) {
    this.setState({
      [key]: e.target.value
    });
  }

  async write () {
    let data = {...this.state};
    console.log(data);
    let res = await axios.post(`${server}/write/`, data);
    console.log(res);
  }

  async read () {
    let params = {
      name: 'b'
    }
    let res = await axios.get(`${server}/read/`, {params});
    console.log(res)
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => (this.change('name', e))}/>
        <br />
        <input onChange={(e) => (this.change('age', e))}/>
        <br />
        <button onClick={this.write}>write</button>
        <button onClick={this.read}>read</button>
      </div>
    );
  }

}

export default App;