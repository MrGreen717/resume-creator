import React, { useState } from 'react'
import * as Yup from 'yup'
import ButtonPanel from '../utils/ButtonPanel/ButtonPanel'
import BlockContainer from '../utils/BlockContainer/BlockContainer'
import {
	FormControl,
	RadioGroup,
	Radio,
	FormControlLabel,
	Button
} from '@mui/material'

import styles from './ExperienceForm.module.scss'
import Label from '../utils/Label/Label'
import WorkPlaceForm from '../utils/WorkPlaceForm/WorkPlaceForm'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const ExperienceForm = ({ setForm }) => {
	const [experience, setExperience] = useState(false)

	const [workPlace, setWorkPlace] = useState([])

	const addWorkPlaceForm = () => {
		setWorkPlace([...workPlace, { id: workPlace.length + 1 }])
	}

	const deleteWorkPlaceForm = (id) => {
		const newArr = workPlace.filter((el) => el.id !== id)
		setWorkPlace(newArr)
	}

	const clearExperience = () => {
		setExperience(false)
		setWorkPlace([])
	}

	const ValidationSchema = Yup.object().shape({
		// startDate: Yup.date().required('Обязательное поле'),
		// endDate: Yup.date().required('Обязательное поле'),
		// nameCompany: Yup.string().required('Обязательное поле'),
		// position: Yup.string().required('Обязательное поле')
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(ValidationSchema)
	})

	const onSubmit = (data) => {
		console.log(data)
		setForm('education')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.experienceForm}>
				<h2>Опыт работы</h2>

				<BlockContainer>
					<Label label="Опыт" />
					<FormControl component="fieldset">
						<RadioGroup
							className={styles.radio}
							aria-label="experience"
							name="controlled-radio-buttons-group"
						>
							<FormControlLabel
								value="yes"
								control={<Radio />}
								label="Есть опыт работы"
								onChange={() => setExperience(true)}
							/>
							<FormControlLabel
								value="not"
								control={<Radio />}
								label="Нет опыта работы"
								onChange={clearExperience}
							/>
						</RadioGroup>
					</FormControl>
				</BlockContainer>
				{workPlace.map((el) => (
					<WorkPlaceForm
						deleteEl={deleteWorkPlaceForm}
						key={el.id}
						id={el.id}
						register={register}
						errors={errors}
					/>
				))}
				{experience && (
					<BlockContainer>
						<Label />
						<Button variant="outlined" onClick={addWorkPlaceForm}>
							Добавить место работы
						</Button>
					</BlockContainer>
				)}
				<ButtonPanel label="Далее" />
			</div>
		</form>
	)
}

export default ExperienceForm
