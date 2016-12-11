import React from 'react';
import Remarkable from 'remarkable';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 'Type some *markdown* here!'}
  }

  handleChange() {
    this.setState({value: this.refs.textarea.value})
  }

  getRawMarkup() {
    var md = new Remarkable();
    return {
      __html: md.render(this.state.value)
    }
  }

  render() {
    return(
      <div>
        <h3>Markdown Editor</h3>
        <p>Input:</p>
        <textarea
          ref='textarea'
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <p>Output:</p>
        <div dangerouslySetInnerHTML={this.getRawMarkup()}/>
        <hr />
      </div>
    );
  }
}

export default MarkdownEditor;
