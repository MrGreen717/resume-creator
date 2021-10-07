import React from 'react'
import { FormControl, Select, MenuItem, TextField } from '@mui/material'

import styles from './DatePanel.module.scss'

function DatePanel({ value, handleChange, register }) {
	return (
		<>
			<FormControl>
				<Select
					labelId="select-label"
					id="select"
					displayEmpty
					value={value}
					onChange={handleChange}
				>
					<MenuItem value="Январь">Январь</MenuItem>
					<MenuItem value="Февраль">Февраль</MenuItem>
					<MenuItem value="Март">Март</MenuItem>
					<MenuItem value="Апрель">Апрель</MenuItem>
					<MenuItem value="Май">Май</MenuItem>
					<MenuItem value="Июнь">Июнь</MenuItem>
					<MenuItem value="Июль">Июль</MenuItem>
					<MenuItem value="Август">Август</MenuItem>
					<MenuItem value="Сентябрь">Сентябрь</MenuItem>
					<MenuItem value="Октябрь">Октябрь</MenuItem>
					<MenuItem value="Декабрь">Декабрь</MenuItem>
				</Select>
			</FormControl>
			<TextField
				className={styles.input}
				type="number"
				id="outlined"
				placeholder="Год"
				{...register}
			/>
		</>
	)
}

export default DatePanel
