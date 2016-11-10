import React from 'react'
import { Dropdown } from 'semantic-ui-react'

var ButtonForm = React.createClass({
    render() {
        return (
            <div>
                <input type="submit" onClick={this.props.onUserClick} />
                <h3>You have pressed the button {this.props.counter} times!</h3>
            </div>
        )
    }
})

var DictionarySelector = React.createClass({
    getInitialState() {
        return {value: ''}
    },
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
})

var App = React.createClass({
    getInitialState() {
        return {
            counter: 0
        }
    },
    onUserClick() {
        this.setState({
            counter: this.state.counter + 1
        })
    },
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <ButtonForm counter={this.state.counter} onUserClick={this.onUserClick} />
                <DictionarySelector />
            </div>
        )
    }
})

module.exports = App
