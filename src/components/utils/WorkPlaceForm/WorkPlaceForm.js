import React, { useState } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormGroup, Button, FormControlLabel, Checkbox } from '@mui/material'

import Label from './../Label/Label'
import DatePanel from './../DatePanel/DatePanel'
import TextArea from '../TextArea/TextArea'
import BlockContainer from '../BlockContainer/BlockContainer'
import InputField from '../InputField/InputField'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const WorkPlaceForm = ({ setData, data, setError }) => {
	const [startDate, setStartDate] = useState('Январь')
	const [endDate, setEndDate] = useState('Январь')
	const [showDate, setShowDate] = useState(false)

	const changeStartDate = (event) => {
		setStartDate(event.target.value)
	}

	const changeEndDate = (event) => {
		setEndDate(event.target.value)
	}

	const ValidationSchema = Yup.object().shape({
		startYear: Yup.number()
			.required('Введите год')
			.typeError('Введите год')
			.positive('Значение не может быть отрицательным'),
		nameCompany: Yup.string().required('Обязательное поле'),
		position: Yup.string().required('Обязательное поле')
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(ValidationSchema)
	})

	const onSubmit = (value) => {
		console.log(value)
		setData([
			...data,
			{ value, startDate, endDate, nowTime: showDate, id: Math.random() }
		])
	}

	const onChange = () => {
		setShowDate(!showDate)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<BlockContainer>
				<Label label="Начало работы" />
				<DatePanel
					value={startDate}
					handleChange={changeStartDate}
					register={{ ...register('startYear') }}
				/>
			</BlockContainer>
			{errors.startYear && <ErrorMessage error={errors.startYear?.message} />}
			<BlockContainer>
				<Label label="Окончание" />
				<div>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="По настоящее время"
							onChange={onChange}
						/>
					</FormGroup>

					{showDate && (
						<DatePanel
							value={endDate}
							handleChange={changeEndDate}
							register={{ ...register('endYear') }}
						/>
					)}
				</div>
			</BlockContainer>
			<InputField
				placeholder="Название компании"
				label="Организация"
				register={{ ...register('nameCompany') }}
			/>
			{errors.nameCompany && (
				<ErrorMessage error={errors.nameCompany?.message} />
			)}
			<InputField
				placeholder="Должность"
				label="Должность"
				register={{ ...register('position') }}
			/>
			{errors.position && <ErrorMessage error={errors.position?.message} />}
			<TextArea
				placeholder="Опишите ваши обязанности на рабочем месте"
				label="Обязанности"
				register={{ ...register('responsibilities') }}
			/>
			<BlockContainer>
				<Label />
				<Button variant="outlined" type="submit" onClick={() => setError(null)}>
					Добавить
				</Button>
			</BlockContainer>
		</form>
	)
}

export default WorkPlaceForm
