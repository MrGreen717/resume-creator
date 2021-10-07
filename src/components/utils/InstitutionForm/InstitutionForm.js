import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import BlockContainer from '../BlockContainer/BlockContainer'
import Label from '../Label/Label'
import InputField from './../InputField/InputField'
import ErrorMessage from './../ErrorMessage/ErrorMessage'

import styles from './InstitutionForm.module.scss'

function InstitutionForm({ setInstitution, institution, setError }) {
	const ValidationSchema = Yup.object().shape({
		year: Yup.number()
			.required('Введите год')
			.typeError('Введите год')
			.positive('Значение не может быть отрицательным'),
		institution: Yup.string().required('Обязательное поле'),
		faculty: Yup.string().required('Обязательное поле'),
		speciality: Yup.string().required('Обязательное поле')
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(ValidationSchema)
	})

	const onSubmit = (value) => {
		setInstitution([...institution, { value, id: Math.random() }])
		setError(null)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<InputField
				label="Учебное заведение"
				placeholder="Название или аббревиатура"
				register={{ ...register('institution') }}
			/>
			{errors.institution && (
				<ErrorMessage error={errors.institution?.message} />
			)}

			<InputField
				label="Факультет"
				placeholder="Факультет"
				register={{ ...register('faculty') }}
			/>
			{errors.faculty && <ErrorMessage error={errors.faculty?.message} />}

			<InputField
				label="Специализация"
				placeholder="Специализация"
				register={{ ...register('speciality') }}
			/>
			{errors.speciality && <ErrorMessage error={errors.speciality?.message} />}
			<BlockContainer>
				<Label label="Год окончания" />
				<TextField
					className={styles.inputNumber}
					placeholder="Год"
					type="number"
					{...register('year')}
				/>
			</BlockContainer>
			{errors.year && <ErrorMessage error={errors.year?.message} />}

			<BlockContainer>
				<Label label="" />
				<Button variant="outlined" type="submit">
					Добавить
				</Button>
			</BlockContainer>
		</form>
	)
}

export default InstitutionForm
