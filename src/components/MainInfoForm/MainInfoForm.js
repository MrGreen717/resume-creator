import React, { useState } from 'react'
import * as Yup from 'yup'
import {
	Radio,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Select,
	MenuItem,
	TextField
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputField from '../utils/InputField/InputField'
import AgePanel from '../utils/AgePanel/AgePanel'
import BlockContainer from '../utils/BlockContainer/BlockContainer'
import ButtonPanel from '../utils/ButtonPanel/ButtonPanel'
import Label from './../utils/Label/Label'
import TextArea from '../utils/TextArea/TextArea'
import ErrorMessage from './../utils/ErrorMessage/ErrorMessage'

import styles from './MainInfoForm.module.scss'

const MainInfoForm = ({ setForm }) => {
	const [currency, setCurrency] = useState('руб.')
	const [month, setMonth] = useState('Января')

	const handleChange = (event) => {
		setCurrency(event.target.value)
	}

	const ValidationSchema = Yup.object().shape({
		surname: Yup.string().required('Обязательное поле'),
		name: Yup.string().required('Обязательное поле'),
		city: Yup.string().required('Обязательное поле'),
		day: Yup.number()
			.required('Введите день')
			.typeError('Введите день')
			.positive('Значение не может быть отрицательным'),
		year: Yup.number()
			.required('Введите год')
			.typeError('Введите год')
			.positive('Значение не может быть отрицательным'),
		gender: Yup.string().required('Выберите пол').nullable(),
		country: Yup.string().required('Обязательное поле'),
		position: Yup.string().required('Обязательное поле'),
		salary: Yup.number()
			.required('Обязательное поле')
			.typeError('Обязательное поле')
			.positive('Значение не может быть отрицательным')
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(ValidationSchema)
	})

	const onSubmit = (data) => {
		const info = {
			data,
			month,
			currency
		}
		console.log('Data', info)
		setForm('experience')
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2>Основная информация</h2>
			<InputField placeholder="Ваша фотография" label="Ваша фотография" />
			<InputField
				placeholder="Фамилия"
				label="Фамилия"
				name="surname"
				type="surname"
				register={{ ...register('surname') }}
			/>
			{errors.surname && <ErrorMessage error={errors.surname?.message} />}
			<InputField
				placeholder="Имя"
				label="Имя"
				register={{ ...register('name') }}
			/>
			{errors.name && <ErrorMessage error={errors.name?.message} />}
			<InputField placeholder="Отчество" label="Отчество" />
			<InputField
				placeholder="Город проживания"
				label="Город"
				register={{ ...register('city') }}
			/>
			{errors.city && <ErrorMessage error={errors.city?.message} />}
			<AgePanel
				setMonth={setMonth}
				month={month}
				day={{ ...register('day') }}
				year={{ ...register('year') }}
			/>
			{(errors.day && <ErrorMessage error={errors.day?.message} />) ||
				(errors.year && <ErrorMessage error={errors.year?.message} />)}
			<BlockContainer>
				<Label label="Пол" />
				<FormControl component="fieldset">
					<RadioGroup
						className={styles.radio}
						aria-label="gender"
						id="gender"
						name="gender"
					>
						<FormControlLabel
							name="gender"
							value="male"
							control={<Radio />}
							label="Мужской"
							{...register('gender')}
						/>
						<FormControlLabel
							name="gender"
							value="female"
							control={<Radio />}
							label="Женский"
							{...register('gender')}
						/>
					</RadioGroup>
				</FormControl>
			</BlockContainer>
			{errors.gender && <ErrorMessage error={errors.gender?.message} />}
			<InputField
				placeholder="Гражданство"
				label="Гражданство"
				register={{ ...register('country') }}
			/>
			{errors.country && <ErrorMessage error={errors.country?.message} />}
			<InputField
				placeholder="Желаемая должность"
				label="Желаемая должность"
				register={{ ...register('position') }}
			/>
			{errors.position && <ErrorMessage error={errors.position?.message} />}
			<BlockContainer>
				<Label label="Зарплата" />
				<div className={styles.currencyPanel}>
					<TextField
						className={styles.input}
						id="outlined"
						placeholder="Зарплата"
						{...register('salary')}
						type="number"
					/>
					<FormControl className={styles.formControl}>
						<Select
							className={styles.select}
							labelId="select-label"
							id="select"
							displayEmpty
							value={currency}
							onChange={handleChange}
						>
							<MenuItem value="руб.">руб.</MenuItem>
							<MenuItem value="USD">USD</MenuItem>
							<MenuItem value="EUR">EUR</MenuItem>
						</Select>
					</FormControl>
				</div>
			</BlockContainer>
			{errors.salary && <ErrorMessage error={errors.salary?.message} />}
			<TextArea placeholder="О себе" label="О себе" />
			<ButtonPanel label="Далее" />
		</form>
	)
}

export default MainInfoForm
