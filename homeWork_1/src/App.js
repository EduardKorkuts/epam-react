import './App.scss'
import userList from "./userList"
import UserDetails from "./Components/UserDeatails"
import Content from "./Components/Content"
import Controls from "./Components/Controls"
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.users = userList
    this.state = {id: 1}
    this.nextUser = this.nextUser.bind(this)
    this.previousUser = this.previousUser.bind(this)
  }

  nextUser() {
    if (!this.users.find(e => e.id === this.state.id + 1)) return
    this.setState(prevState => ({
      id: prevState.id + 1
    }))
  }

  previousUser() {
    if (!this.users.find(e => e.id === this.state.id - 1)) return
    this.setState(prevState => ({
      id: prevState.id - 1
    }))
  }

  render() {
    return (
        <div className="app">
          <UserDetails user={this.users.find(e => e.id === this.state.id)}/>
          <Content content={this.users.find(e => e.id === this.state.id).content}/>
          <Controls left={this.previousUser} right={this.nextUser}/>
        </div>
    )
  }
}


export default App
