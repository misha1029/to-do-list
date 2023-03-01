import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.intarface'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<div className={styles.layout}>
				<main>
					<section className={styles.content}>{children}</section>
				</main>
			</div>
		</>
	)
}

export default Layout
