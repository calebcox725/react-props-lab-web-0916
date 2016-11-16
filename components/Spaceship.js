const React = require('react');

class Spaceship extends React.Component {
  render() {
    var colorLi = this.props.colors.map(color => {
      return (
        <li>
          {color}
        </li>
      )
    })

    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <ul>
        {colorLi}
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps ={
  colors: ['black', 'red'],
  hasRockets: false
}

module.exports = Spaceship