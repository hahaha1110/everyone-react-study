import React,{Component} from 'react';
import './App.css';
import CounterError from './CounterError';
import MyName from './Myname';



class App extends Component{
  render(){
    
    return (
      <div>
        <MyName/>
        <CounterError/>
      </div>
    );
  }
}


export default App;
