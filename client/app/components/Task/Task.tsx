import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '../ui/form-elements/Button'
import Field from '../ui/form-elements/Field'
import stylesForm from '../ui/form-elements/project-form.module.scss'
import { Heading } from '../ui/heading/Heading'

import { Table } from './Table/Table'
import { ITaskCreateInput } from './task.interface'
import { useTaskCreate } from './useTaskCreate'

const Task: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm<ITaskCreateInput>({
		mode: 'onChange',
	})

	const { data, onSubmit, deleteAsync } = useTaskCreate(reset)

	return (
		<div>
			<Heading title="Create Tasks" />
			<form onSubmit={handleSubmit(onSubmit)} className={stylesForm.form}>
				<>
					<div className={stylesForm.fields}>
						<Field
							{...register('title', {
								required: 'Name is required!',
							})}
							placeholder="Title"
							error={errors.title}
						/>

						<Field
							{...register('description', {
								required: 'Name is required!',
							})}
							placeholder="Description"
							error={errors.description}
						/>
					</div>
					<Button>Create</Button>
				</>
			</form>
			<Table
				removeHandler={deleteAsync}
				headerItems={['Title', 'Description']}
				tableItem={data || []}
			/>
		</div>
	)
}

export default Task
