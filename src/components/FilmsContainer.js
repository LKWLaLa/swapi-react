import React, {Component} from 'react'
import StarWars from '../starWars.json'
import Film from './Film'

class FilmsContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      characterId: parseInt(this.props.location.pathname.replace('/', ''), 0),
      films: [],
      errorMsg: ''
    }
  }

  componentDidMount(){
    let id = this.state.characterId
    let url = StarWars.characters[id].url
    fetch(url).then(res => res.json())
    .then(res => {
        let films = []
        let total = res.films.length
        res.films.forEach(
          (filmUrl) => {
            fetch(filmUrl).then(res => res.json())
            .then(res => {
              films.push(res)
              if(films.length === total){
                this.setState({films: films})
              }
            })
          })
      })
    .catch(err => 
      this.setState({errorMsg: "The greatest teacher, failure is.  The requested character could not be found."}))
  }

  renderFilms = () => {
    let films = this.state.films
    if (films.length > 0){
      return films.map((film, index) => <Film data={film} key={index} />)
    } 
    return null
  }

  render(){
    return(
      <div>
        {this.renderFilms()}
        <div>{this.state.errorMsg}</div>
      </div>
    )
  }
} 

export default FilmsContainer;