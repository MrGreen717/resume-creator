import React from 'react'
import { TextField } from '@mui/material'

import styles from './TextArea.module.scss'
import BlockContainer from '../BlockContainer/BlockContainer'
import Label from '../Label/Label'

function TextArea({ label, placeholder, register }) {
	return (
		<BlockContainer>
			<Label label={label} />
			<TextField
				className={styles.textArea}
				id="outlined-textarea"
				placeholder={placeholder}
				multiline
				{...register}
			/>
		</BlockContainer>
	)
}

export default TextArea
