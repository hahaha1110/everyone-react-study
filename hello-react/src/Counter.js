import React, {Component} from 'react';

class Counter extends Component {

    state = {
        number : 0,
        foo    : {
            bar    : 0,
            foobar : 1
        }
    }
    
    handleIncrease = () => {
        const {number} = this.state;
        this.setState({
            number : number + 1
        });
    }

    handleDecrease = () =>{
        this.setState({
            number : this.state.number -1
        });
    }

    handleSetstateTest = () =>{
        // const {foobar} = this.state.foo.foobar;
        this.setState({
            
            foo : {
                ...this.state.foo,
                foobar :  this.state.foo.foobar+ 1
            }
        });
    }
    
    render(){
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}> + </button>
                <button onClick={this.handleDecrease}> - </button>
                <button onClick={this.handleSetstateTest}> 푸바 </button>
                <div>{this.state.foo.bar}</div>
                <div>{this.state.foo.foobar}</div>
            </div>
        )
    }
}
export default Counter;