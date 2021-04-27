import React from 'react';
// import PropTypes from 'prop-types';
import styles from './styles.module.css';

const RightSideBar = () => (
  <div className={styles.rightContainer}>
    <div className={styles.rightSideFixed}>
      <div className={styles.adBanner}>
        <div className={styles.adBannerVerticalLayout}>
          <div className={styles.adBannerPadding}>
            <img className={styles.adImage} src="https://res.cloudinary.com/scalefunder/image/fetch/s--GjmGMm4n--/f_auto,fl_lossy,q_auto/https://res.cloudinary.com/scalefunder/image/upload/v1601580391/UC_Berkeley/q1gddukyaq0zjho8d9mp.png" alt="Open ad space" />
          </div>
        </div>
      </div>
      <div className={styles.adBanner}>
        <div className={styles.adBannerVerticalLayout}>
          <div className={styles.adBannerPadding}>
            <img className={styles.adImage} src="https://blog.toryburch.com/wp-content/uploads/2021/03/Culture_StopAsianHate_960_TD_Mar_21.jpg" alt="Open ad space" width="100%" />
          </div>
        </div>
      </div>
      <div className={styles.adBanner}>
        <div className={styles.adBannerVerticalLayout}>
          <div className={styles.adBannerPadding}>
            <img className={styles.adImage} src="https://olbios.org/wp-content/uploads/2020/09/EllaBaker-1.jpg" alt="Open ad space" width="100%" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RightSideBar;
