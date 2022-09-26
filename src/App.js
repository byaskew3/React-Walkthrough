import React, { Component } from 'react'
import Contact from './Contact'
import Home from './Home'
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: {},
      name: 'Christian',
      age: 27
    }
  }

  addToAge = () => {
    this.setState({age: this.state.age + 1})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home age123={this.state.age}/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>   
          {this.state.name}
          {this.state.age}
          <button onClick={this.addToAge}>Happy Birthday</button>
        </div>
      </BrowserRouter>
    )
  }
}

