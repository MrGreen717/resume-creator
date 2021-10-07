import React, { useState } from 'react'
import ButtonPanel from '../utils/ButtonPanel/ButtonPanel'
import Label from './../utils/Label/Label'
import { FormControl, Select, MenuItem, Button } from '@mui/material'
import BlockContainer from '../utils/BlockContainer/BlockContainer'
import InputField from '../utils/InputField/InputField'
import LanguagePanel from '../utils/LanguagePanel/LanguagePanel'
import InstitutionForm from '../utils/InstitutionForm/InstitutionForm'

const EducationForm = ({ setForm }) => {
	const [level, setLevel] = useState('Высшее')
	const [institution, setInstitution] = useState([])
	const [language, setLanguage] = useState([])

	const addInstitutionForm = () => {
		setInstitution([...institution, { id: institution.length + 1 }])
	}

	const deleteInstitutionForm = (id) => {
		const newArr = institution.filter((el) => el.id !== id)
		setInstitution(newArr)
	}

	const addLanguageForm = () => {
		console.log(language.length)
		setLanguage([...language, { id: language.length + 1 }])
	}

	const deleteLanguageForm = (id) => {
		const newArr = language.filter((el) => el.id !== id)
		setLanguage(newArr)
	}

	const submitHandler = () => {
		setForm('main')
	}

	const handleChange = (event) => {
		setLevel(event.target.value)
	}

	return (
		<div className="education">
			<h2>Образование</h2>

			<BlockContainer>
				<Label label="Уровень" />
				<FormControl>
					<Select
						labelId="select-label"
						id="select"
						displayEmpty
						value={level}
						onChange={handleChange}
					>
						<MenuItem value="Среднее">Среднее</MenuItem>
						<MenuItem value="Среднее специальное">Среднее специальное</MenuItem>
						<MenuItem value="Неоконченное высшее">Неоконченное высшее</MenuItem>
						<MenuItem value="Высшее">Высшее</MenuItem>
						<MenuItem value="Бакалавр">Бакалавр</MenuItem>
						<MenuItem value="Магистр">Магистр</MenuItem>
						<MenuItem value="Кандидат наук">Кандидат наук</MenuItem>
						<MenuItem value="Доктор наук">Доктор наук</MenuItem>
					</Select>
				</FormControl>
			</BlockContainer>
			<InputField
				label="Учебное заведение"
				placeholder="Название или аббревиатура"
			/>
			<InputField label="Факультет" placeholder="Факультет" />
			<InputField label="Специализация" placeholder="Специализация" />
			<InputField label="Год окончания" placeholder="Год" />
			{institution.map((el) => (
				<InstitutionForm
					deleteEl={deleteInstitutionForm}
					key={el.id}
					id={el.id}
				/>
			))}
			<BlockContainer>
				<Label label="" />
				<Button variant="outlined" onClick={addInstitutionForm}>
					Добавить учебное заведение
				</Button>
			</BlockContainer>

			<InputField label="Родной язык" placeholder="Язык" />
			<BlockContainer>
				<Label label="Иностранные языки" />
				<Button variant="outlined" onClick={addLanguageForm}>
					Добавить язык
				</Button>
			</BlockContainer>

			{language.map((el) => (
				<LanguagePanel deleteEl={deleteLanguageForm} key={el.id} id={el.id} />
			))}
			<ButtonPanel label="Далее" submitHandler={submitHandler} />
		</div>
	)
}

export default EducationForm
