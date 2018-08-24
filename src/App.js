import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 10 }
    ],

    totalPrice: 0,

  }

    componentDidMount = () => {
    console.log('GrandChild did mount.' + this.handleTotalPrice());
    // this.setState({totalPrice: this.handleTotalPrice()});
  }
 
  handleTotalPrice = () => {
   
    let { totalPrice } = this.state;
    let array = this.state.counters.map(a => (a.value));
    totalPrice = array.reduce((a, b) => a + b, 0);
    console.log(totalPrice);
    // totalPrice += 1;
    this.setState({ totalPrice });


  }


  handleIncrement = counter => {
     
    // let { totalPrice } = this.state;
    // [...this.state.counters] clones the counters array 
    //which directly changes the value of contures array 
    // inside state which is not good
    const counters = [...this.state.counters];
    //so for immutability we have to do following 
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // setState is a promise fucntion and may take a while to 
    // run. if you add a comma and an anonymous function after
    // the object of this.setState, it will wait until this.setState
    // is completed to run the function
    this.setState({ counters }, 
      () => { this.handleTotalPrice() });   
    // this.handleTotalPrice();
   


  }

  handleReset = () => {
    this.setState({ totalPrice: 0 });
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })

    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  }
  render() {
    return (
      <div className="App">
        <NavBar totalCounters={this.state.counters.filter( c => c.value >  0 ).length}
                totalPrice = {this.state.totalPrice}/>
        <main className="container">
          <Counters
          counters = {this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete}/>
        </main>
      </div>
    );
  }
}

export default App;
