import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    //컴포넌트 최적화(컴포넌트가 리렌더링을 할지 말지 결정)
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }
    render(){
        const {todos, onToggle, onRemonve} = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id = {id}
                    text = {text}
                    checked = {checked}
                    onToggle = {onToggle}
                    onRemonve = {onRemonve}
                    key = {id}
                />
            )
        );
        return(
            <div>
                {/* <TodoItem text="안녕"/>
                <TodoItem text="정국아"/>
                <TodoItem text="Love"/> */}
                {todoList}
            </div>
        );
    }
}
export default TodoItemList;