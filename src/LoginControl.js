import React from 'react';

const UserGreeting = () => (<h1>Welcome back!</h1>);

const GuestGreeting = () => (<h1>Hello, stranger. Please sign in</h1>);

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
};

const LoginButton = (props) => {
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

const LogoutButton = (props) => (
  <button onClick={props.onClick}>
    Logout
  </button>
);

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    let button = null;
    const isLoggedIn = this.state.isLoggedIn;
    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>
    }

    return(
      <div>
      <h3>Login Control</h3>
      <Greeting isLoggedIn={isLoggedIn}/>
      {button}
      <hr />
      </div>
    );
  }
}

export default LoginControl;
