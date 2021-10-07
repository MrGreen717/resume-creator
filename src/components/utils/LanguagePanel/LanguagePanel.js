import React, { useState } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, FormControl, MenuItem, Button, Select } from '@mui/material'
import BlockContainer from '../BlockContainer/BlockContainer'

import styles from './LanguagePanel.module.scss'

function LanguagePanel({ setLanguageArray, languageArray }) {
	const [languageLevel, setLanguageLevel] = useState('A1-Начальный')

	const ValidationSchema = Yup.object().shape({
		language: Yup.string().required('Поле не может быть пустым')
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(ValidationSchema)
	})

	const changeLanguageLevel = (event) => {
		setLanguageLevel(event.target.value)
	}

	const onSubmit = (value) => {
		setLanguageArray([
			...languageArray,
			{ languageLevel, value, id: Math.random() }
		])
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<BlockContainer>
				<TextField id="outlined" placeholder="Язык" {...register('language')} />
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
			</BlockContainer>
			{errors.language && (
				<span className={styles.error}>{errors.language?.message}</span>
			)}
			<BlockContainer>
				<Button variant="outlined" type="submit">
					Добавить
				</Button>
			</BlockContainer>
		</form>
	)
}

export default LanguagePanel
