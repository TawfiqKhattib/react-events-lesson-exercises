import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {
  //should recieve the prop "contact"
  render() {
    return (
      <div >
        {/* Should render an array of Contact components , with the prop "name"*/}
        {this.props.contact.map(name=><Contact displayConvo={this.props.displarConvo} name={name} />)}
      </div>
    );
  }
}

export default List;
