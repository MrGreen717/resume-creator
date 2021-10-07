import React, { useState } from 'react'

import styles from './App.module.scss'
import EducationForm from './components/EducationForm/EducationForm'
import ExperienceForm from './components/ExperienceForm/ExperienceForm'
import MainInfoForm from './components/MainInfoForm/MainInfoForm'

function App() {
	const [form, setForm] = useState('main')

	return (
		<div className="App">
			<div className={styles.form}>
				<h1>Ваше резюме</h1>
				{form === 'main' && <MainInfoForm setForm={setForm} />}
				{form === 'experience' && <ExperienceForm setForm={setForm} />}
				{form === 'education' && <EducationForm setForm={setForm} />}
			</div>
		</div>
	)
}

export default App
