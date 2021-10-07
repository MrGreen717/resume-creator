import React from 'react'

import styles from './BlockContainer.module.scss'

function BlockContainer(props) {
	return <div className={styles.blockContainer}>{props.children}</div>
}

export default BlockContainer
