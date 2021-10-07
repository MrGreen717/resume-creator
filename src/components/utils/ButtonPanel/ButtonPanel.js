import React from 'react'
import { Button } from '@mui/material'

import styles from './ButtonPanel.module.scss'

function ButtonPanel({ submitHandler, label }) {
	return (
		<div className={styles.buttonPanel}>
			<Button
				className={styles.button}
				color="inherit"
				variant="outlined"
				onClick={submitHandler}
				type="submit"
			>
				{label}
			</Button>
		</div>
	)
}

export default ButtonPanel
