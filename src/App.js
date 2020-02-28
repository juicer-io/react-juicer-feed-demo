import React, { Component } from 'react';
import JuicerFeed from 'react-juicer-feed';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ padding: 10, borderBottom: '1px solid black' }}>
          <h1>Juicer React Demo</h1>
          <p>Demo app for the <a href="https://www.juicer.io" target="_blank" rel="noopener noreferrer">Juicer.io</a> <a href='https://github.com/juicer-io/react-juicer-feed/' target="_blank" rel="noopener noreferrer">React component</a>.</p>
        </div>

        <JuicerFeed feedId='juicer' />

        <footer>
          <h3>Footer</h3>
          <p>This should appear below the Juicer.io grid.</p>
        </footer>
      </div>
    );
  }
}

export default App;
