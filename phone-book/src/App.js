import React,{Component} from 'react';
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information : [
      {
        id : 0,
        name  : '김태형',
        phone : '010-1111-2222'
      },
      {
        id : 1,
        name  : '전정국',
        phone : '010-0000-2222'
      }
    ],
    keyword : ''
  }
  handleChange = (e) => {
    this.setState({
      keyword : e.target.value
    })
  }

  handleCreate = (data) => {
    console.log(data);
    const {information} = this.state;
    this.setState({
      information : information.concat({ id : this.id++, ...data})
    })

  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information :information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information : information.map(
        info => id === info.id ? {...info, ...data} : info // 일치하면 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀 불일치하면 기존값 유지
      )
    })
  }
  render() {
    
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      inform => inform.name.indexOf(keyword) !== -1 //indexOf() 함수는 비교하는 문자열의 위치를 반환
    )
    
    return (
      <div>
        <PhoneForm onCreate = {this.handleCreate}/>
        <p><input placeholder = "검색할 이름을 입력하세요" onChange = {this.handleChange} value = {keyword}/></p>
        <hr/>
        <PhoneInfoList data = {filteredList} onRemove = {this.handleRemove} onUpdate = {this.handleUpdate}/>
        
      </div>
    );
  }
}

export default App;
