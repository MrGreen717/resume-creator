import React, { useState } from 'react'
import { TextField, FormControl, MenuItem, Button, Select } from '@mui/material'

import styles from './LanguagePanel.module.scss'
import BlockContainer from '../BlockContainer/BlockContainer'
import Label from '../Label/Label'

function LanguagePanel({ deleteEl, id }) {
	const [languageLevel, setLanguageLevel] = useState('A1-Начальный')
	const changeLanguageLevel = (event) => {
		setLanguageLevel(event.target.value)
	}

	return (
		<div className={styles.languagePanel}>
			<BlockContainer>
				<Label />
				<TextField id="outlined" placeholder="Язык" />
				<FormControl>
					<Select
						labelId="select-label"
						id="select"
						displayEmpty
						value={languageLevel}
						onChange={changeLanguageLevel}
					>
						<MenuItem value="A1-Начальный">A1-Начальный</MenuItem>
						<MenuItem value="А2-Элементарный">А2-Элементарный</MenuItem>
						<MenuItem value="B1-Средний">B1-Средний</MenuItem>
						<MenuItem value="B2-Средне-продвинутый">
							B2-Средне-продвинутый
						</MenuItem>
						<MenuItem value="C1-Продвинутый">C1-Продвинутый</MenuItem>
						<MenuItem value="C2-В совершенстве">C2-В совершенстве</MenuItem>
					</Select>
				</FormControl>
				<Button
					variant="outlined"
					onClick={() => {
						deleteEl(id)
					}}
				>
					Удалить
				</Button>
			</BlockContainer>
		</div>
	)
}

export default LanguagePanel
