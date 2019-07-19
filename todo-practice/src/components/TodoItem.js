import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    render(){
        const {text, checked, id, onToggle, onRemove} = this.props;
        
        console.log(id);
        return(
            <div className = "todo-item" onClick = {() => onToggle(id)}>
                <div className="remove" onClick={e => {
                    e.stopPropagation(); //onToggle이 실행되지 않도록 함(이벤트의 확산을 멈춰준다. 해당 부모의 이벤트까지 전달되지 않도록 해줌)
                    onRemove(id)}//
                }>x{/* 좌측 엑스마크 */}</div>
            <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
            </div>
            {
                checked && (<div className = "check-mark">✓</div>)
            }
            </div>
        );
    }
}
export default TodoItem;