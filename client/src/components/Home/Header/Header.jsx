/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Header = ({ toggle, fakeLogOut }) => (
  <div className={styles.headerContainer}>
    <img src="images/logo.png" className={styles.logo} />
    <div className={styles.title}>Local Voice</div>
    <div className={styles.toggleContainer}>
      <span className={styles.mapViewLabel}>Map View</span>
      <label className={styles.switch}>
        <input onClick={toggle} type='checkbox'></input>
        <span className={styles.sliderRound}></span>
      </label>
      <span className={styles.listViewLabel}>List View</span>
    </div>
    <button type="button" className={styles.logOut} onClick={fakeLogOut}>Log Out</button>
  </div>
);

Header.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Header;
