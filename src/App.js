import React, { Component } from 'react';
import JuicerFeed from 'react-juicer-feed';

// NOTE: Juicer demo feed ID (also see: https://www.juicer.io/juicer)
//   Replace with your own Feed ID once you've set up a free feed on juicer.io
const demoFeedId = 'juicer';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ padding: 10, borderBottom: '1px solid black' }}>
          <h1>Juicer React Demo</h1>
          <p>Demo app for the <a href="https://www.juicer.io" target="_blank" rel="noopener noreferrer">Juicer.io</a> <a href='https://github.com/juicer-io/react-juicer-feed/' target="_blank" rel="noopener noreferrer">React component</a>.</p>
        </div>

        <JuicerFeed feedId={demoFeedId} />

        <footer>
          <h3>Footer</h3>
          <p>This should appear below the Juicer.io grid.</p>
        </footer>
      </div>
    );
  }
}

export default App;
