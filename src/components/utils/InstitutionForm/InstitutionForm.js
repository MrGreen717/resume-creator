import { Button } from '@mui/material'
import React from 'react'
import BlockContainer from '../BlockContainer/BlockContainer'
import Label from '../Label/Label'
import InputField from './../InputField/InputField'

function InstitutionForm({ deleteEl, id }) {
	return (
		<>
			<InputField
				label="Учебное заведение"
				placeholder="Название или аббревиатура"
			/>
			<InputField label="Факультет" placeholder="Факультет" />
			<InputField label="Специализация" placeholder="Специализация" />
			<InputField label="Год окончания" placeholder="Год" />
			<BlockContainer>
				<Label label="" />
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

export default InstitutionForm
