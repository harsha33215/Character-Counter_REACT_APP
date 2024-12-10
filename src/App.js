import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharacterCount from './components/CharacterCount'
import './App.css'

class App extends Component {
  state = {userInput: '', characterCountList: []}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  renderImage = () => (
    <img
      className="image"
      alt="no user inputs"
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
    />
  )

  onSubmitCharacter = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newCharacterInput = {
      id: uuidv4(),
      userInput,
    }
    this.setState(prevState => ({
      characterCountList: [...prevState.characterCountList, newCharacterInput],
      userInput: '',
    }))
  }

  render () {
    const {userInput, characterCountList} = this.state
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="heading">Count the characters like a Boss...</h1>
          <ul>
            {characterCountList.length === 0 ? (
              this.renderImage()
            ) : (
              characterCountList.map(eachCharacter => (
                <CharacterCount
                  key={eachCharacter.id}
                  characterDetails={eachCharacter}
                />
              ))
            )}
          </ul>
        </div>

        <div className="input-character-container">
          <form onSubmit={this.onSubmitCharacter}>
            <h1 className="character-heading">Character Counter</h1>
            <input
              type="text"
              value={userInput}
              className="input-container"
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
