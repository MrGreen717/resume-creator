import React from 'react'
import { TextField } from '@mui/material'

import styles from './InputField.module.scss'
import BlockContainer from '../BlockContainer/BlockContainer'

function InputField({ label, placeholder, register, name, type }) {
	return (
		<BlockContainer>
			<div className={styles.label}>
				<label>{label}</label>
			</div>
			<TextField
				name={name}
				type={type}
				id={name}
				className={styles.input}
				placeholder={placeholder}
				{...register}
			/>
		</BlockContainer>
	)
}

export default InputField
