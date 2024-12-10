const CharacterCount = props => {
  const {characterDetails} = props
  const {userInput} = characterDetails 

  return (
    <li className="list-container">
      <div>
        <p className="name">{`${userInput} : ${userInput.length}`} </p>
      </div>
    </li>
  )
}
export default CharacterCount
