import React from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loading: false,
      userInput: '',
    };
  }

  sendMessage = () => {
    if (this.state.userInput.trim() === '') return;

    const newMessage = { text: this.state.userInput, sender: 'user' };
    this.setState(prevState => ({
      messages: [...prevState.messages, newMessage],
      userInput: '',
      loading: true
    }));

    setTimeout(() => {
      const responseMessage = { text: 'This is a mock response!', sender: 'bot' };
      this.setState(prevState => ({
        messages: [...prevState.messages, responseMessage],
        loading: false
      }));
    }, 2000);
  };

  handleInputChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    return (
      <div className="chat-window">
        <ChatHeader />
        <ChatBody messages={this.state.messages} loading={this.state.loading} />
        <ChatFooter 
          userInput={this.state.userInput} 
          handleInputChange={this.handleInputChange} 
          sendMessage={this.sendMessage} 
        />
      </div>
    );
  }
}

export default ChatWindow;