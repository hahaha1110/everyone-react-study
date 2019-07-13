import React, {Component} from 'react';

class CounterLifeCycle extends Component {

    state = {
        number : 0
    }
    
    constructor(props){
        super(props);
        console.log('constructor');
    }

    UNSAFE_componentWillMount(){
        // 컴포넌트가 DOM트리에 추가되기 직전에 한 번만 실행되는 메서드
        console.log('UNSAFE_componentWillMount (deprecated)');
    }

    componentDidMount(){
        // 처음으로 render가 실행된 직후에 실행되는 메서드.. 초기화 등에 사용
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        // 명시적으로 변경 내용을 비교할때 사용. 인수로서 새로운 Props나 State를 전달받을 수 있다. 값에 변경이 있는지 확인하여 true나 false를 반환한다.
        // true를 반환하면 화면에 다시 표시한다. false를 반환하면 다시 표시하지 않는다.
        // 102페이지 참고
        
        // 5 의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) return false;
        return true;
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        const {number} = this.state;
        this.setState({
            number : number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number : this.state.number -1
        });
    }

    render(){
        console.log('render');
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}> + </button>
                <button onClick={this.handleDecrease}> - </button>
            </div>
        )
    }
}
export default CounterLifeCycle;