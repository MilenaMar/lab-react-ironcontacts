import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';

export default class App extends Component  {
  state = {
    contactshow: contacts.slice(0, 5)
  }

  getRandom = () => {
    let randomCo = contacts[Math.floor(Math.random() * contacts.length)]
  if (this.state.contactshow.includes(randomCo)){
    this.setState({contactShow:this.state.contactshow})
  } else {
    this.setState({contactShow:this.state.contactshow.push(randomCo)})
  }
  }

byName = ()=> {
this.setState({contactShow:this.state.contactshow.sort
  ((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
})
}

byPopularity = ()=> {
  this.setState({contactShow:this.state.contactshow.sort
    ((a,b) => (a.popularity > b.popularity) ? 1 : ((b.popularity > a.popularity) ? -1 : 0))})
}

 render () {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons">
      <button onClick={this.getRandom}>Add Random Contact</button>
      <button onClick={this.byName}>Sort by Name</button>
      <button onClick={this.byPopularity}>Sort by Popularity</button>
      </div>
      <div className="description">
        <p>Picture</p>
        <p>Name</p>
        <p>Popularity</p>
      </div>
      {this.state.contactshow.map(e => 
      <div key={e.name} className="celebrity">
     <img src={e.pictureUrl} alt="celebrity"></img>
      <p>{e.name}</p>
      <p>{(e.popularity).toFixed(2)}</p>
      </div>)}  
    </div>
  );
}
}


