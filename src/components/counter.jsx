import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: [],
    };

    handelIncrement() {
        console.log("Increment Clicked");
    }


    render() {
        return (
            <React.Fragment> 
               {this.state.tags.length === 0 && <p>Please create a new tag!</p>}
               
                <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment </button>                 
            </React.Fragment>
        );
    }


    formatCount() {
        const { count } = this.state;
        //it is gonna extract count from this.state,
        // so it is as same as this.state.count
        return count === 0 ? 'Zero' : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;

    }

    // renderTags(){
    //     if(this.state.tags.length === 0) 
    //     return <p>There are no tags!</p>        
    //     <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }



}

export default Counter;
