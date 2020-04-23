import React from 'react';
import './Counter.css'

class Counter extends React.Component{

    constructor(){
        super();
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.state={
            counter:0
        }
    }

    render(){

      const  style = {
            
                backgroundColor : "#4CAF50",
                border: "none",
                color: "white",
                padding: "15px 32px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                marginRight: "10px",
                position: "relative",
                left: "30%",
                marginTop: "40px"
              
        }
        return(
            <div className="container">
            <div className="div-border">
                {this.state.counter}
            </div>
            <button style= {style}   onClick={this.increment}> Increment</button>
            <button style= {style}  onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

    increment(){
        let counter= this.state.counter;
        counter=counter+1;
        this.setState({
            counter:counter
        })
    }

    decrement(){
        let counter= this.state.counter;
        counter=counter-1;
        this.setState({
            counter:counter
        })
    }

}

export default Counter;