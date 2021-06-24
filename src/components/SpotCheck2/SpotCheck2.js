import React, { Component } from 'react';

export const Home = function () {
  // Should return some JSX with a div that has a class "home" and the text "Welcome to our page"
  return (
    <div>welcome to our page</div>
  )
}

export const About = function () {
  // Should return some JSX with a div that has a class "about" and the text "It's great here"
  return (
    <div>it's great here</div>
  )
}

export class SpotCheck2 extends Component {

  constructor(){
    super();
    this.state={
      showhome:true,
    }
  }
  toggle = () => {
    this.setState({
      showHome: !this.state.showHome
    })
  }
  render() {
    return (
      <div >
        <button onClick={this.toggle}>Toggle</button>
        {this.state.showHome ? <Home /> : <About />}
      </div>
    );
  }
}


