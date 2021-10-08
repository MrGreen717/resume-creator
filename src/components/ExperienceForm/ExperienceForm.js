import React, { useState } from 'react'
import { FormControl, RadioGroup, Radio, FormControlLabel } from '@mui/material'
import ButtonPanel from '../utils/ButtonPanel/ButtonPanel'
import BlockContainer from '../utils/BlockContainer/BlockContainer'
import Label from '../utils/Label/Label'
import WorkPlaceForm from '../utils/WorkPlaceForm/WorkPlaceForm'
import ErrorMessage from './../utils/ErrorMessage/ErrorMessage'
import WorkPlace from '../utils/WorkPlace/WorkPlace'

import styles from './ExperienceForm.module.scss'

const ExperienceForm = ({ setForm, setExperienceInfo }) => {
	const [experience, setExperience] = useState(false)
	const [error, setError] = useState(null)
	const [data, setData] = useState([])

	const deleteWorkPlace = (id) => {
		const newData = data.filter((el) => el.id !== id)
		setData(newData)
	}

	const clearExperience = () => {
		setExperience(false)
		setData([])
		setError(null)
	}

	const submitHandler = () => {
		setExperienceInfo(data)
		setForm('education')
	}

	const onSubmit = () => {
		!data.length && experience
			? setError({ message: 'Добавьте хотя бы одно место работы' })
			: submitHandler()
	}

	return (
		<>
			<div className={styles.experienceForm}>
				<h2>Опыт работы</h2>

				<BlockContainer>
					<Label label="Опыт" />
					<FormControl component="fieldset">
						<RadioGroup
							className={styles.radio}
							aria-label="experience"
							id="experience"
							name="experience"
							defaultValue="without-experience"
						>
							<FormControlLabel
								name="experience"
								value="with-experience"
								control={<Radio />}
								label="Есть опыт работы"
								onChange={() => setExperience(true)}
							/>
							<FormControlLabel
								name="experience"
								value="without-experience"
								control={<Radio />}
								label="Нет опыта работы"
								onChange={clearExperience}
							/>
						</RadioGroup>
					</FormControl>
				</BlockContainer>

				{data.map((el) => (
					<WorkPlace
						data={el}
						key={el.id}
						deleteWorkPlace={deleteWorkPlace}
						removable={true}
					/>
				))}
				{experience && (
					<WorkPlaceForm setError={setError} setData={setData} data={data} />
				)}
				{error && experience && <ErrorMessage error={error.message} />}
				<ButtonPanel label="Далее" submitHandler={onSubmit} />
			</div>
		</>
	)
}

export default ExperienceForm
