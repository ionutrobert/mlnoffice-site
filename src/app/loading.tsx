'use client';
import styles  from './loading.module.css';
import React from 'react';

const Loading = () => {
    return (
      <div className={styles.loadingContainer}>
        <svg className={styles.loadingSpinner} viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
      </div>
    );
  };

export default Loading;

