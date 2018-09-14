import React, { Component } from 'react';

class Counter extends Component {

    render() {
       
        return (
            <div>   
            
                {/*this.state.tags.length === 0 && <p>Please create a new tag!</p>*/}
                <span className={this.getBadgeClasses()}> {this.formatValue()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter)} 
                className='btn btn-secondary btn-sm'>Increment </button>     
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"> Delete</button>
                <button 
                onClick={
                    (e) => {
                    this.props.onReplicate(this.props.counter)
                    }
                }
                className="btn btn-success btn-sm m-2"> Replicate </button>
            </div>
            
        );
    }


    formatValue() {
        // since the state is gone we need to read the value
        // from this.props.counter cuz of controlled component
        const { value } = this.props.counter;
        //it is gonna extract count from this.state,
        // so it is as same as this.state.count
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;

    }

    // renderTags(){
    //     if(this.state.tags.length === 0) 
    //     return <p>There are no tags!</p>        
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }



}

export default Counter;
