import React from 'react'
import { Button } from '@mui/material'
import BlockContainer from '../utils/BlockContainer/BlockContainer'
import Label from '../utils/Label/Label'

import styles from './WorkPlace.module.scss'

function WorkPlace({ data, deleteWorkPlace }) {
	return (
		<div className={styles.workPlace}>
			<BlockContainer>
				<Label label="Начало работы" />
				<span>
					{data.startDate} {data.value.startYear}
				</span>
			</BlockContainer>
			{data.nowTime && data.value.endYear ? (
				<BlockContainer>
					<Label label="Окончание" />
					<span>
						{data.endDate} {data.value.endYear}
					</span>
				</BlockContainer>
			) : (
				<BlockContainer>
					<Label label="Окончание" />
					<span>По настоящее время</span>
				</BlockContainer>
			)}
			<BlockContainer>
				<Label label="Организация" />
				<span>{data.value.nameCompany}</span>
			</BlockContainer>
			<BlockContainer>
				<Label label="Должность" />
				<span>{data.value.position}</span>
			</BlockContainer>
			{data.value.responsibilities && (
				<BlockContainer>
					<Label label="Обязанности" />
					<span>{data.value.responsibilities}</span>
				</BlockContainer>
			)}

			<BlockContainer>
				<Label />
				<Button
					variant="outlined"
					type="submit"
					onClick={() => {
						deleteWorkPlace(data.id)
					}}
				>
					Удалить
				</Button>
			</BlockContainer>
		</div>
	)
}

export default WorkPlace
