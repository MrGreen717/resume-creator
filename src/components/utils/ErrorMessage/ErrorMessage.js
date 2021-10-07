import React from 'react'
import styles from './ErrorMessage.module.scss'
import Label from '../Label/Label'

function ErrorMessage({ error }) {
	return (
		<div className={styles.errorPanel}>
			<Label />
			<p className={styles.error}>{error}</p>
		</div>
	)
}

export default ErrorMessage
