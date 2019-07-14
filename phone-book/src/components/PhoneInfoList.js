import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    
    static defaultProps = {
        data : [],
        onRemove : () => console.warn('onRemove not defined'), //이 함수가 전달되지 않았을 경우를 대비한 default
        onUpdate : () => console.warn('onUpdate not defined'),
    }    
    
    //상위컴포넌트 리렌더링 될때 하위컴포넌트도 리렌더링 되는것을 막는 것(실제 변화가 없을때만)
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.data !== this.props.data;
    }

    render(){
        console.log('render PhoneInfoList');
        const { data , onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info} onRemove={onRemove} onUpdate={onUpdate}/>)
        );
        return(
            <div>
                {list}
            </div>
        );
    }
}
export default PhoneInfoList;