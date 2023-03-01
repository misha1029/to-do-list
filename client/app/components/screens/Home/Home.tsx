import { FC } from 'react'

import Task from '../../Task/Task'
import Layout from '../../layout/Layout'

export const Home: FC = () => {
	return (
		<Layout title="Home">
			<Task />
		</Layout>
	)
}
