import React, { Component } from "react"
import Events from '../components/Events/Events'
import Logo from '../components/Logo/Logo'
import EventLinkForm from '../components/EventLinkForm/EventLinkForm'
import Particles from 'react-particles-js';
import './index.css'
import SignIn from '../components/SignIn/SignIn'
import 'tachyons';
import Register from '../components/Register/Register';
import Scroll from '../components/Scroll';

import CardList from '../components/CardList';
import Checkout from "../components/checkout"

const particlesOptions = {
    particles: {
      number: {
        value: 200,
        denstity:{
          enable: true,
          value_area: 500
         
        }
      }
    }
  }

class App extends Component {
  constructor (){
    super()
    this.state = {

        robots : [],
        searchfield: '',
        input: '',
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''

    }
}
  }
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(resonse=> {
      return resonse.json();
  })
  .then(users => {
      this.setState({robots: users})
  })
  // console.log('componentDidMount');
}
onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value})
  
}
onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState({isSignedIn: false})
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}


    render() {
      const { isSignedIn, route } = this.state;
      const filterRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // console.log('render');
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        } 
        else {
  return (

    <div className="App tc">
    <Particles className='particles'
              params={particlesOptions} />
    <Events isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
    <Logo />
    {route === 'signin'
    
    ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
    :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
  }
    <EventLinkForm searchChange = {this.onSearchChange}/>
    <Scroll/>
    <Checkout />
    <CardList robots={filterRobots}/>
    </div>
      );
    }
}
}

export default App;
