import React from 'react'
import styles from 'styles/ProgressBar.module.css'
import { clamp } from 'utils';

 const ProgressBar = ({precentage = 0}) => {
    return (
        <div className={styles.ProgressBar}>
            <div className={styles.bar}  style={{width: `${precentage}%`,backgroundColor: precentage > 100 ? 'var(--red)' : 'var(--green)'}}></div>
            <label aria-label='precent' className={`${styles.precentage}`} style={{marginInlineStart: `${clamp(precentage/2,0, 50)}%`}}>{precentage}%</label>
        </div>
    )
}

export default ProgressBar;