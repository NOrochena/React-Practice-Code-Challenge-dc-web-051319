import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    isEaten: false
  }

  handleClick = () => {
    if (this.props.eatSushi(this.props.sushi) === false) return
    this.setState({isEaten: true})
  }

  render() {
    const {img_url, name, price } = this.props.sushi
    return (
      <div className="sushi">
        <div className="plate">
          { (this.state.isEaten) ?
              null
            :
              <img onClick={this.handleClick} src={img_url} alt="" width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    )
  }
}

export default Sushi