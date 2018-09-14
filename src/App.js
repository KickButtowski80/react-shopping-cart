import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';
import './App.css';

class App extends Component {
  state = {
    counters: [],
    totalPrice: 0,    
    text: "",

  }
   componentDidMount(){
 
   }
    componentDidUpdate(prevProps, prevState) {
         
    }
  
  handelReplicate = (counter) => {
 
    console.log("id in handelReplicate is " + counter.id);
    console.log("value in handleReplicate is "  + counter.value);
    this.setState({ text: "I am replicated" });
    this.setState({counters: this.state.counters.concat({id: counter.id +1000 ,value: counter.value, replcated: true})});  
    this.setState({totalPrice: this.state.totalPrice+ counter.value })
  }
  
  handleCreateCounter = () =>{
    let count_id = Object.keys(this.state.counters).length;    
    this.setState({counters: this.state.counters.concat({id: count_id+1 , value: 0})});     
  }
  handleTotalPrice = () => {
   
    let { totalPrice } = this.state;
    let array = this.state.counters.map(a => (a.value));
    totalPrice = array.reduce((a, b) => a + b, 0);
    console.log(totalPrice);
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
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    let updateTotalPrice = this.state.counters.filter( c => c.id === counterId);
    updateTotalPrice = this.state.totalPrice - updateTotalPrice[0].value;
    this.setState({ counters: counters, totalPrice: updateTotalPrice });
    
  }
  render() {
    var divStyle = {backgroundColor: 'red', height: 'auto'}
    return (
      <div className="App">
        <NavBar totalCounters={this.state.counters.filter( c => c.value >  0 ).length}
                totalPrice = {this.state.totalPrice}/>
                
          <div className="row">
            <div className="col-md-6">
              <div id="right">
                <Counters
                counters = {this.state.counters}
                onReset={this.handleReset} 
                onIncrement={this.handleIncrement} 
                onDelete={this.handleDelete}
                onCreate = {this.handleCreateCounter}
                onReplicate = { this.handelReplicate}
                />
              </div>
            
            </div>
            <div className="col-md-6">
                <div id="left" style={divStyle}> 
                  <h4 className="p-3 mb-2 bg-success text-white"> I am the replicate column </h4>
                  
                    {this.state.text}
                                    
 
               </div>
            </div>
          </div>     
      </div>
    );
  }
}

export default App;
