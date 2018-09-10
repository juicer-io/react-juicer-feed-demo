import React, { Component } from 'react';

class Juicer extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.juicer.io/embed.js";
    script.type = 'text/javascript';

    const link = document.createElement('link');
    link.media = 'all';
    link.rel = 'stylesheet'
    link.href = 'https://assets.juicer.io/embed.css';
    link.type = 'text/css';

    document.body.appendChild(script);
    document.body.appendChild(link);
  }

  render() {
    return (
      <ul className="juicer-feed" data-feed-id={this.props.feedId} style={{ height: 500, width: 500}}></ul>
    );
  }
}

export default Juicer;
