import React from 'react';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
      text: ''
    }));
  }

  render() {
    return(
      <div>
        <h3>A Simple To Do Application</h3>
        <h4>To do:</h4>
        <ToDoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text}/>
          <button>Add #{this.state.items.length + 1}</button>
        </form>
        <hr />
      </div>
    );
  }
}

const ToDoList = (props) => (
  <ul>
    {props.items.map(item => (
      <li key={item.id}>{item.text}</li>
    ))}
  </ul>
)

export default ToDoApp;
