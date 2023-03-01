import { useMemo } from 'react'
import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { TaskService } from '../../services/tasks.service'
import { toastrError } from '../../utils/toastrError/toastrError'

import { ITableItem } from './Table/table.interface'
import { ITaskCreateInput } from './task.interface'

export const useTaskCreate = (reset: UseFormReset<ITaskCreateInput>) => {
	const queryData = useQuery(
		['tasks list'],
		() => TaskService.getTasks(),

		{
			select: (data) =>
				data.map(
					(task): ITableItem => ({
						id: task.id,
						items: [task.title, task.description],
					})
				),
			onError: (error) => {
				toastrError(error, 'Project list')
			},
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		'create task',
		(data: ITaskCreateInput) => TaskService.create(data),
		{
			onError: (error) => {
				toastrError(error, 'create task error')
			},
			onSuccess() {
				toastr.success('Create task', 'create was successfull')
				queryData.refetch()
				reset()
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete task',
		(projectId: string) => TaskService.deleteTasks(projectId),
		{
			onError: (error) => {
				toastrError(error, 'delete project')
			},
			onSuccess: () => {
				toastr.success('Delete task', 'delete was task successful')
				queryData.refetch()
			},
		}
	)

	const onSubmit: SubmitHandler<ITaskCreateInput> = async (data) => {
		await createAsync(data)
	}

	return useMemo(
		() => ({
			...queryData,
			onSubmit,
			deleteAsync,
		}),
		[queryData, onSubmit, deleteAsync]
	)
}
