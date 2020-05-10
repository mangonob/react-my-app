import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('提交的名字：' + this.state.value)
    event.preventDefault()
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>
        名字：
        <input type="text" value={ this.state.value } onChange={this.handleChange}/>
      </label>
      <input type="submit" value="提交"/>
    </form>
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "请撰写一篇关于你喜欢DOM元素的文章。" }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert("提交的文章：" + this.state.value)
    event.preventDefault()
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>
        文章：
        <textarea value={this.state.value} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="提交"/>
    </form>
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "cocount" }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert("喜欢的风味：" + this.state.value)
    event.preventDefault()
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>
        选择你喜欢的风味：
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">酸橙</option>
          <option value="cocount">椰子</option>
          <option value="mango">芒果</option>
        </select>
      </label>
      <input type="submit" value="提交"/>
    </form>
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.name === "isGoing" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    return <form>
      <label>
        参与：
        <input
        name="isGoing"
        type="checkbox"
        checked={this.state.isGoing}
        onChange={this.handleInputChange}
        />
      </label>
      <br />
      <label>
        来宾人数：
        <input
        name="numberOfGuests"
        type="number"
        value={this.state.numberOfGuests}
        onChange={this.handleInputChange}
        />
      </label>
    </form>
  }
}

class App extends React.Component {
  render() {
    return <div>
     <NameForm />
     <EssayForm />
     <FlavorForm />
     <Reservation />
     <input value={42}/>
    </div>
  }
}

// ========================================

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)