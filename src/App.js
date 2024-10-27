import React from 'react';
import Title from './Title';
import SendingMessage from './SendingMessage';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Title />
        <SendingMessage />
      </div>
    );
  }
}

export default App; 