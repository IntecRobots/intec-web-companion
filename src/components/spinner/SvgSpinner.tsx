import React from 'react';
import styles from './SvgSpinner.module.css';

const SvgSpinner = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <circle className={styles.spin2} cx="50" cy="50" fill="none"
        r="40" strokeWidth="10" stroke="rgb(11, 24, 59)"
        strokeDasharray="125 400"
        strokeLinecap="round" />
    </svg>
  );
};

export default SvgSpinner;
