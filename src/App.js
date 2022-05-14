import React, { Component } from 'react'
import { CardList } from './components/cards-lists/card-list.component'
import { SearchField } from './components/cards-lists/search-field.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((e) => e.json()).then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchField placeholder={"Search monster"} handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
