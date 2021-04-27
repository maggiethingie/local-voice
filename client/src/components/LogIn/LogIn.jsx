import React from "react";
import PropTypes from 'prop-types';
import LogOut from './LogOut.jsx';
import Home from '../Home/Home.jsx';
import styles from './styles.module.css';

const LogIn = ({ fakeLogin }) => (
  <div className={styles.landingpage}>
    <div className={styles.maindiv}>
      <h1 className={styles.heading}>
        Local Voice
      </h1>
      <h5 className={styles.subheading}>
        Bringing local issues to the palm of your hand
      </h5>
      <button type="button" onClick={() => fakeLogin()} className={styles.button}>
        Log In
      </button>
    </div>
  </div>
);

LogIn.propTypes = {
  fakeLogin: PropTypes.func.isRequired,
};

export default LogIn;
