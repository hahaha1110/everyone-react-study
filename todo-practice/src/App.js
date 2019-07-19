import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
// import Funcional from './components/Functional'
// import Funcional2 from './components/Functional2'
class App extends Component {
  id = 3// 이미 0,1,2 가 존재하므로 3으로 설정
  state = {
    input : '',
    todos : [
      {id : 0, text : '리액트 소개', checked : false},
      {id : 1, text : '리액트 소개', checked : true},
      {id : 2, text : '리액트 소개', checked : false}
    ]
  }

  handleChange = e => {
    this.setState({
      input : e.target.value // input 의 다음 바뀔 값
    })
  }

  //추가 버튼 눌렀을때의 동작
  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input : '',// 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos : todos.concat({
        id : this.id++,
        text : input,
        checked : false
      })
    });
  }
  handleKeyPress = e => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  //체크하기 체크풀기
  handleToggle = (id) => {
    const {todos} = this.state;

    //파라메터로 받은 id로 몇번째 아이템인지 찾는다.
    const index     = todos.findIndex(todo => todo.id === id);
    const selected  = todos[index];// 선택한 객체
    const nextTodos = [...todos]; //배열을 복사

    //기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked : !selected.checked
    };
    this.setState({
      todos : nextTodos
    });
  }
  
  //삭제하기
  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos : todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    const {input, todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle
    } = this;
    return (
      <div>
        <TodoListTemplate form={
        (<Form 
          value = {input}
          onKeyPress = {handleKeyPress}
          onChange = {handleChange}
          onCreate = {handleCreate}
        />)
        }>
          <TodoItemList todos={todos} onToggle = {handleToggle}/> {/*TodoListTemplate children 부분에 들어감*/}
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;