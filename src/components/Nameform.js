import React, { Component } from 'react';

export class Nameform extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A email was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render () {
        return (
            <form className='mail' onSubmit={this.handleSubmit}>
            <label>
             Email:<input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Bli medlem" />
            </form>
        );
    }

}

export default Nameform;