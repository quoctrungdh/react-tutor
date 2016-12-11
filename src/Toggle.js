import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return(
      <div>
        <h3>Toggle</h3>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <hr />
      </div>
    );
  }
}

export default Toggle;
