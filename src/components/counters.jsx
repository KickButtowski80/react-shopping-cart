import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0},
            { id: 2, value: 1},
            { id: 3, value: 3},
            { id: 4, value: 5}
            ]
    }
    
    handleIncrement = counter => {
        // [...this.state.counters] clones the counters array 
        //which directly changes the value of contures array 
        // inside state which is not good
        const counters = [...this.state.counters];
        //so for immutability we have to do following 
        const index = counters.indexOf(counter);
        counters[index] ={...counter};
        counters[index].value++;
        this.setState({counters});
        
        
    }
    handleReset = () => {
      const counters = this.state.counters.map( c => {
                       c.value = 0;
                       return c;
                                })
     
       this.setState({counters}); 
    }
    
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c  => c.id !== counterId);
        this.setState({counters: counters });             
    }
    render() {
        return (
            <React.Fragment> 
                <button 
                onClick={this.handleReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map( counter => 
                 //counter = {counter} is gonna have all the infos about state
                 //like value={counter.value} id={counter.id} 
                <Counter key={counter.id} 
                         onDelete={this.handleDelete}
                         onIncrement={this.handleIncrement}
                         counter={counter} /> )}
            </React.Fragment>
        );
    }
}

export default Counters;
