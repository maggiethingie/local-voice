import React from 'react';
import styles from './styles.module.css';

import Home from './Home/Home.jsx';
import LogIn from './LogIn/LogIn.jsx';

// sends user to either LogIn page or Home
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    };
    this.fakeLogin = this.fakeLogin.bind(this);
    this.fakeLogOut = this.fakeLogOut.bind(this);
  }

  fakeLogin() {
    this.setState({ loggedIn: true });
  }

  fakeLogOut() {
    this.setState({ loggedIn: false });
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <div id={styles.app}>
        { loggedIn ? <Home fakeLogOut={this.fakeLogOut} /> : <LogIn fakeLogin={this.fakeLogin} /> }
      </div>
    );
  }
}

export default App;
