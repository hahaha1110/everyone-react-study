import React,{Component} from 'react';
import ACompo from './components/ACompo';
import BCompo from './components/BCompo'
import CCompo from './components/CCompo'
import css from './App.css'

class App extends Component {
  constructor(props){
    super()
  }
  state = {
    compoNm  : ''
  }
  callCompo = e =>{
    e.preventDefault();
    // alert(e.target.innerHTML);
    this.setState({
      compoNm : e.target.innerHTML
    })
    // alert(this.state.compoNm);
  }
  render(){
    return (
      <div className="App">
        <button type="button" onClick={this.callCompo}>a컴포넌트</button>
        <button type="button" onClick={this.callCompo}>b컴포넌트</button>
        <button type="button" onClick={this.callCompo}>c컴포넌트</button>
        {/* <ACompo/><BCompo/><CCompo/> */}
        {this.state.compoNm === "a컴포넌트" && <ACompo/>}
        {this.state.compoNm === "b컴포넌트" && <BCompo/>}
        {this.state.compoNm === "c컴포넌트" && <CCompo/>}
      </div>
    );
  }
  
}

export default App;
