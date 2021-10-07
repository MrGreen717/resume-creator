import React, { useState } from 'react'
import { FormGroup, Button, FormControlLabel, Checkbox } from '@mui/material'

import Label from './../Label/Label'
import DatePanel from './../DatePanel/DatePanel'
import TextArea from '../TextArea/TextArea'
import BlockContainer from '../BlockContainer/BlockContainer'
import InputField from '../InputField/InputField'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const WorkPlaceForm = ({ deleteEl, id, register, errors }) => {
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [showDate, setShowDate] = useState(false)

	const changeStartDate = (event) => {
		setStartDate(event.target.value)
	}

	const changeEndDate = (event) => {
		setEndDate(event.target.value)
	}

	return (
		<>
			<BlockContainer>
				<Label label="Начало работы" />
				<DatePanel value={startDate} handleChange={changeStartDate} />
			</BlockContainer>
			<BlockContainer>
				<Label label="Окончание" />
				<div>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="По настоящее время"
							onChange={() => setShowDate(!showDate)}
						/>
					</FormGroup>

					{showDate && (
						<DatePanel value={endDate} handleChange={changeEndDate} />
					)}
				</div>
			</BlockContainer>

			<InputField placeholder="Название компании" label="Организация" />
			<InputField
				placeholder="Должность"
				label="Должность"
				register={{ ...register('position') }}
			/>
			{errors.position && <ErrorMessage error={errors.position?.message} />}
			<TextArea
				placeholder="Опишите ваши обязанности на рабочем месте"
				label="Обязанности"
			/>
			<BlockContainer>
				<Label />
				<Button
					variant="outlined"
					onClick={() => {
						deleteEl(id)
					}}
				>
					Удалить
				</Button>
			</BlockContainer>
		</>
	)
}

export default WorkPlaceForm
