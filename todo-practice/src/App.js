import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
// import Funcional from './components/Functional'
// import Funcional2 from './components/Functional2'
class App extends Component {
  render() {
    return (
      <div>
        {/* App */}
        {/* <Funcional name ="전정국"/> */}
        {/* <Funcional2 name ="전정국"/> */}
        <TodoListTemplate form={<Form/>}>
          템플릿 완성 {/*TodoListTemplate children 부분에 들어감*/}
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;