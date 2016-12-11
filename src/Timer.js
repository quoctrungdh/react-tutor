import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1}));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div>
        <h3>A stateful component</h3>
        Seconds elapsed: {this.state.secondsElapsed}
        <hr />
      </div>
    );
  }

}

export default Timer;
