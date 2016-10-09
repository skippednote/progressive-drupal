import React, { Component } from 'react';
import { render } from 'react-dom';
import fetch from 'isomorphic-fetch';
import Session from '../Session';

class SessionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      loading: true
    }
  }

  componentWillMount() {
    if (window.__INITIALSTATE__.length) {
      this.setState({
        loading: false,
        sessions: window.__INITIALSTATE__
      })
    } else {
      fetch('http://con.dd/api/sessions')
        .then(res => res.json())
        .then(sessions => this.setState({
          loading: false,
          sessions: sessions
        }));
    }
  }

  render() {
    let content = "Loading";
    if(this.state.loading === false && this.state.sessions.length > 0) {
      content = this.state.sessions.map((session, index) => {
        return (
          <Session key={index} {...session} />
        )
      })
    }
    return (
      <div>{content}</div>
    )
  }
}

render(<SessionList />, document.getElementById('session-list'));
