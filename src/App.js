import React, { useState } from 'react'

import styles from './App.module.scss'
import EducationForm from './components/EducationForm/EducationForm'
import ExperienceForm from './components/ExperienceForm/ExperienceForm'
import MainInfoForm from './components/MainInfoForm/MainInfoForm'
import ReviewForm from './components/ReviewForm/ReviewForm'

function App() {
	const [form, setForm] = useState('main')
	const [mainInfo, setMainInfo] = useState(null)
	const [experienceInfo, setExperienceInfo] = useState([])
	const [institutionInfo, setInstitutionInfo] = useState([])
	const [languageInfo, setLanguageInfo] = useState([])
	const [educationInfo, setEducationInfo] = useState(null)

	return (
		<div className="App">
			<div className={styles.form}>
				<h1>Ваше резюме</h1>
				{form === 'main' && (
					<MainInfoForm setForm={setForm} setMainInfo={setMainInfo} />
				)}
				{form === 'experience' && (
					<ExperienceForm
						setForm={setForm}
						setExperienceInfo={setExperienceInfo}
					/>
				)}
				{form === 'education' && (
					<EducationForm
						setLanguageInfo={setLanguageInfo}
						setInstitutionInfo={setInstitutionInfo}
						setForm={setForm}
						setEducationInfo={setEducationInfo}
					/>
				)}
				{form === 'review' && (
					<ReviewForm
						setForm={setForm}
						mainInfo={mainInfo}
						experienceInfo={experienceInfo}
						institutionInfo={institutionInfo}
						languageInfo={languageInfo}
						educationInfo={educationInfo}
					/>
				)}
			</div>
		</div>
	)
}

export default App
