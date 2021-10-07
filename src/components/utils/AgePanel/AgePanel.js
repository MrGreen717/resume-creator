import React from 'react'
import { FormControl, MenuItem, Select, TextField } from '@mui/material'

import styles from './AgePanel.module.scss'
import BlockContainer from '../BlockContainer/BlockContainer'
import Label from './../Label/Label'

function AgePanel({ day, year, setMonth, month }) {
	const handleChange = (event) => {
		setMonth(event.target.value)
	}

	return (
		<BlockContainer>
			<Label label="Возраст" />
			<div className={styles.age}>
				<TextField
					className={styles.input}
					id="outlined"
					placeholder="День"
					type="number"
					{...day}
				/>
				<FormControl fullWidth>
					<Select
						labelId="select-label"
						id="select"
						displayEmpty
						value={month}
						onChange={handleChange}
					>
						<MenuItem value="Января">Января</MenuItem>
						<MenuItem value="Февраля">Февраля</MenuItem>
						<MenuItem value="Марта">Марта</MenuItem>
						<MenuItem value="Апреля">Апреля</MenuItem>
						<MenuItem value="Мая">Мая</MenuItem>
						<MenuItem value="Июня">Июня</MenuItem>
						<MenuItem value="Июля">Июля</MenuItem>
						<MenuItem value="Августа">Августа</MenuItem>
						<MenuItem value="Сентября">Сентября</MenuItem>
						<MenuItem value="Октября">Октября</MenuItem>
						<MenuItem value="Декабря">Декабря</MenuItem>
					</Select>
				</FormControl>
				<TextField
					className={styles.input}
					id="outlined"
					placeholder="Год"
					type="number"
					{...year}
				/>
			</div>
		</BlockContainer>
	)
}

export default AgePanel
