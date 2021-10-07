import React from 'react'
import styles from './Label.module.scss'

function Label({ label }) {
	return (
		<div className={styles.label}>
			<label>{label}</label>
		</div>
	)
}

export default Label
