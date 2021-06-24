import React, { Component } from 'react';

class Contact extends Component {
  displayConvo=()=>{
    this.props.displayConvo(this.props.name);
  }
  render() {
    return (
      <div >
        {/* should render a "name" recieved in props */}
        <div onClick={this.displayConvo}> name: {this.props.name} </div>
        {/* Should also reieve the displayConvo prop, and call the function onClick */}

      </div>
    );
  }
}

export default Contact;
