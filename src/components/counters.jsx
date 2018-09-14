import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {
        //destrcutring info 
        
        const { onCreate,onReset, counters, onDelete, onIncrement } = this.props;
        console.log(this.props.counters);
        let array_keys = [] ;
        array_keys = Object.keys(this.props.counters);
        console.log(array_keys);
        return (
            <React.Fragment> 
                <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2">Reset
                </button>
                
                <button 
                onClick={onCreate}
                className="btn btn-success btn-sm m-2">Creat A Counter 
                </button>
                
                {
              
                counters.map( counter => 
                 //counter = {counter} is gonna have all the infos about state
                 //like value={counter.value} id={counter.id} 
             
                <Counter key={ array_keys.includes(counter.id) ? (counter.id+10000) : counter.id} 
                         onDelete={onDelete}
                         onIncrement={onIncrement}
                         counter={counter} 
                         name = "counter" 
                         onReplicate = {this.props.onReplicate} /
                         > )
                         }
            </React.Fragment>
        );
    }
}

export default Counters;
