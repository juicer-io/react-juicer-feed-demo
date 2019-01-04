import React, { Component } from 'react';
import JuicerFeed from 'react-juicer-feed';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ padding: 10, borderBottom: '1px solid black' }}>
          <h1>Juicer React Demo</h1>
          <p>Demo app for the <a href="https://www.juicer.io" target="_blank" rel="noopener noreferrer">Juicer.io</a> React component.</p>
        </div>
        <JuicerFeed feedId='juicer' />
        <JuicerFeed feedId='peter-riviera-36da2f7b-c91c-4705-9f62-2485111f4c1f' />
        <footer>
          <h3>Footer</h3>
          <p>This should appear below the Juicer.io grid.</p>
        </footer>
      </div>
    );
  }
}

export default App;
