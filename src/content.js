import React from 'react'
import { Dropdown } from 'semantic-ui-react'

function ButtonForm(props) {
  return (
    <div>
      <input type="submit" onClick={props.onUserClick} />
      <h3>You have pressed the button {props.counter} times!</h3>
    </div>
  )
}
ButtonForm.propTypes = {
  counter: React.PropTypes.number.isRequired,
  onUserClick: React.PropTypes.func.isRequired,
}

class DictionarySelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  render() {
    let options = [
      {value: 'fi', flag: 'fi', text: 'Finland'},
      {value: 'de', flag: 'de', text: 'Germany'},
      {value: 'mx', flag: 'mx', text: 'Mexico'},
      {value: 'us', flag: 'us', text: 'United States'},
      {value: 'vn', flag: 'vn', text: 'Vietnam'},
    ]
    return (
      <div>
        <Dropdown placeholder='Select Country' search selection options={options}
          onChange={ (_, {value}) => this.setState({value}) } />
        <p>You selected: {this.state.value}</p>
      </div>
    )
  }
}

class App extends React.Component {
  onUserClick = () => this.setState((state) => ({counter: state.counter + 1}))

  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <ButtonForm counter={this.state.counter} onUserClick={this.onUserClick} />
        <DictionarySelector />
      </div>
    )
  }
}

module.exports = App
