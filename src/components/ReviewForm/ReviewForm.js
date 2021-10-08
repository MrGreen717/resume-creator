import React from 'react'
import BlockContainer from '../utils/BlockContainer/BlockContainer'
import Institution from '../utils/Institution/Institution'
import Label from './../utils/Label/Label'
import Language from './../utils/Language/Language'
import WorkPlace from './../utils/WorkPlace/WorkPlace'

const ReviewForm = ({
	setForm,
	mainInfo,
	experienceInfo,
	institutionInfo,
	languageInfo,
	educationInfo
}) => {
	console.log(mainInfo)
	console.log(experienceInfo)
	console.log(institutionInfo)
	console.log(languageInfo)
	console.log(educationInfo)
	return (
		<div>
			<h2>Основная информация</h2>
			<BlockContainer>
				<Label label="Фамилия" />
				<span>{mainInfo.data.surname}</span>
			</BlockContainer>
			<BlockContainer>
				<Label label="Имя" />
				<span>{mainInfo.data.name}</span>
			</BlockContainer>
			{mainInfo.data.patronymic && (
				<BlockContainer>
					<Label label="Отчество" />
					<span>{mainInfo.data.patronymic}</span>
				</BlockContainer>
			)}
			<BlockContainer>
				<Label label="Город" />
				<span>{mainInfo.data.city}</span>
			</BlockContainer>
			<BlockContainer>
				<Label label="Дата рождения" />
				<span>
					{mainInfo.data.day} {mainInfo.month} {mainInfo.data.year}
				</span>
			</BlockContainer>
			<BlockContainer>
				<Label label="Пол" />
				<span>{mainInfo.data.gender}</span>
			</BlockContainer>
			<BlockContainer>
				<Label label="Гражданство" />
				<span>{mainInfo.data.country}</span>
			</BlockContainer>
			<BlockContainer>
				<Label label="Желаемая должность" />
				<span>{mainInfo.data.position}</span>
			</BlockContainer>
			<BlockContainer>
				<Label label="Зарплата" />
				<span>
					{mainInfo.data.salary} {mainInfo.currency}
				</span>
			</BlockContainer>
			{mainInfo.data.info && (
				<BlockContainer>
					<Label label="О себе" />
					<span>{mainInfo.data.info}</span>
				</BlockContainer>
			)}
			{experienceInfo && <h2>Опыт работы</h2>}
			{experienceInfo &&
				experienceInfo.map((el) => <WorkPlace data={el} key={el.id} />)}
			<h2>Образование</h2>
			<BlockContainer>
				<Label label="Уровень" />
				<span>{educationInfo.level}</span>
			</BlockContainer>
			{institutionInfo.map((el) => (
				<Institution data={el} key={el.id} />
			))}
			<BlockContainer>
				<Label label="Родной язык" />
				<span>{educationInfo.nativeLanguage}</span>
			</BlockContainer>
			<BlockContainer>
				<Label label="Иностранные языки" />
				<div>
					{languageInfo.map((el) => (
						<Language data={el} key={el.id} />
					))}
				</div>
			</BlockContainer>
		</div>
	)
}

export default ReviewForm
