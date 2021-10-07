import React, { useState, useEffect } from 'react'
import ButtonPanel from '../utils/ButtonPanel/ButtonPanel'
import Label from './../utils/Label/Label'
import { FormControl, Select, MenuItem, TextField } from '@mui/material'
import BlockContainer from '../utils/BlockContainer/BlockContainer'
import LanguagePanel from '../utils/LanguagePanel/LanguagePanel'
import InstitutionForm from '../utils/InstitutionForm/InstitutionForm'

import ErrorMessage from './../utils/ErrorMessage/ErrorMessage'
import Institution from '../utils/Institution/Institution'
import Language from '../utils/Language/Language'

const EducationForm = ({ setForm }) => {
	const [level, setLevel] = useState('Высшее')
	const [nativeLanguage, setNativeLanguage] = useState('')
	const [error, setError] = useState(null)
	const [errorLang, setErrorLang] = useState(null)
	const [institution, setInstitution] = useState([])
	const [languageArray, setLanguageArray] = useState([])

	useEffect(() => {
		nativeLanguage && setErrorLang(null)
	}, [nativeLanguage])

	const deleteInstitution = (id) => {
		const newData = institution.filter((el) => el.id !== id)
		setInstitution(newData)
	}

	const deleteLanguage = (id) => {
		const newData = languageArray.filter((el) => el.id !== id)
		setLanguageArray(newData)
	}

	const submitHandler = () => {
		if (!institution.length) {
			setError({ message: 'Добавьте учебное заведение' })
		} else if (!nativeLanguage.length) {
			setErrorLang({ message: 'Заполните поле' })
		} else {
			setForm('main')
		}
	}

	const handleChange = (event) => {
		setLevel(event.target.value)
	}

	const changeNativeLanguage = (event) => {
		setNativeLanguage(event.target.value)
	}

	return (
		<div>
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
			{institution.map((el) => (
				<Institution
					key={el.id}
					data={el}
					deleteInstitution={deleteInstitution}
				/>
			))}
			<InstitutionForm
				setInstitution={setInstitution}
				institution={institution}
				setError={setError}
			/>
			<BlockContainer>
				<Label label="Родной язык" />
				<TextField
					placeholder="Язык"
					value={nativeLanguage}
					onChange={changeNativeLanguage}
				/>
			</BlockContainer>
			{errorLang && <ErrorMessage error={errorLang.message} />}
			<BlockContainer>
				<Label label="Иностранные языки" />
				{!languageArray.length ? (
					<span>Добавьте язык...</span>
				) : (
					<span>Языки:</span>
				)}
			</BlockContainer>
			{languageArray.length
				? languageArray.map((el) => (
						<Language data={el} key={el.id} deleteLanguage={deleteLanguage} />
				  ))
				: null}
			<BlockContainer>
				<Label />
				<LanguagePanel
					setLanguageArray={setLanguageArray}
					languageArray={languageArray}
				/>
			</BlockContainer>
			{error && <ErrorMessage error={error.message} />}
			<ButtonPanel label="Далее" submitHandler={submitHandler} />
		</div>
	)
}

export default EducationForm
