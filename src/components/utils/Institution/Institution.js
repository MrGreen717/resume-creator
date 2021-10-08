import React from 'react'
import { Button } from '@mui/material'
import BlockContainer from '../BlockContainer/BlockContainer'
import Label from '../Label/Label'

import styles from './Institution.module.scss'

function Institution({ data, deleteInstitution, removable }) {
	return (
		<div className={styles.institution}>
			<BlockContainer>
				<Label label="Учебное заведение" />
				<span>{data.value.institution}</span>
			</BlockContainer>
			<BlockContainer>
				<Label label="Факультет" />
				<span>{data.value.faculty}</span>
			</BlockContainer>
			<BlockContainer>
				<Label label="Специализация" />
				<span>{data.value.speciality}</span>
			</BlockContainer>
			<BlockContainer>
				<Label label="Год окончания" />
				<span>{data.value.year}</span>
			</BlockContainer>
			{removable && (
				<BlockContainer>
					<Label />
					<Button
						variant="outlined"
						type="submit"
						onClick={() => {
							deleteInstitution(data.id)
						}}
					>
						Удалить
					</Button>
				</BlockContainer>
			)}
		</div>
	)
}

export default Institution
