import React from 'react';

function WarningBanner(props) {
  if(!props.showWarning) {
    return null;
  }

  return(
    <div className='warning'>
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: false};
  }

  handleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }))
  }

  render() {
    return(
      <div>
        <h3>Warning Banner</h3>
        <WarningBanner showWarning={this.state.showWarning} />
        <button onClick={this.handleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
        <hr />
      </div>
    );
  }
}

export default Page;
