import React from 'react'
import styles from 'styles/ProgressBar.module.css'

 const ProgressBar = ({precentage = 0}) => {
    return (
        <div className={styles.ProgressBar}>
            <div className={styles.bar}  style={{width: `${precentage}%`}}></div>
            <label aria-label='precent' className={`${styles.precentage}`} style={{marginInlineStart: `${precentage/2}%`}}>{precentage}%</label>
        </div>
    )
}

export default ProgressBar;