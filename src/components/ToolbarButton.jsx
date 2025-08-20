import React from 'react';
import styles from './ToolbarButton.module.css';

function ToolbarButton({ children, value, onClick }) {
  return (
    <button className={styles.Tool} value={value} onClick={onClick}>
      {children}
    </button>
  );
}

export default ToolbarButton;