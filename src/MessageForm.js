import React, { Component } from 'react'

class MessageForm extends Component {
  state = {
    body: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addMessage(this.state.body)
    this.setState({body: ' '})
  }

  handleChange = (ev) => {
    this.setState({ body: ev.target.value })
  }

  render() {
    return (
      <form
        className="MessageForm"
        onSubmit={this.handleSubmit}
        style={styles.MessageForm}
      >
        <input
          type="text"
          name="body"
          style={styles.MessageFormInput}
          placeholder="Type a message..."
          value={this.state.body}
          onChange={this.handleChange}
          autoFocus
        />
        <button type="submit" style={styles.MessageFormButton}>Send</button>
      </form>
    )
  }
}

const styles = {
  MessageForm: {
    backgroundolor: 'white',
    height: '3rem',
    display: 'flex',
    alignItems: 'stretch',
    border: '2px solid #999',
    borderRadius: '0.5rem',
    margin: '0.25rem',
    padding: '0',
  },
  MessageFormIcon: {
    display: 'flex',
    borderRadius: '0.5rem',
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#ccc',
    padding: '0 0.5rem',
    fontSize: '1.2rem',
  },
  MessageFormInput: {
    flex: '1',
    fontSize: '1.2rem',
    border: '0',
  },
  MessageFormFocus: {
    outline: '0',
  },
  MessageFormButton: {
    fontSize: '1.5rem',
    backgroundColor: '#1A8FE3',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    border: '1px solid white',
  }
}

export default MessageForm