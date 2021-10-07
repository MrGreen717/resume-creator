import React from 'react'
import { Button } from '@mui/material'
import BlockContainer from '../BlockContainer/BlockContainer'
import Label from '../Label/Label'

import styles from './Language.module.scss'

function Language({ data, deleteLanguage }) {
	return (
		<BlockContainer>
			<Label />
			<div className={styles.language}>
				<span>
					{data.value.language} {data.languageLevel}
				</span>
				<BlockContainer>
					<Button
						variant="outlined"
						type="submit"
						onClick={() => {
							deleteLanguage(data.id)
						}}
					>
						Удалить
					</Button>
				</BlockContainer>
			</div>
		</BlockContainer>
	)
}

export default Language
