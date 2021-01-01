// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            mood: "happy"
        };
    }

    handleChange = () => {
        this.setState({
            mood: "sad"
        });
    }


    render(){
        return(
            <div onClick={this.handleChange}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent;