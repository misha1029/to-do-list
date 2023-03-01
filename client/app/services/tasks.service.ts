import axios from 'axios'

import { ITask, ITaskCreateInput } from '../components/Task/task.interface'

export const TaskService = {
	async getTasks() {
		const { data } = await axios.get<ITask[]>(
			'https://63fe2cb0c5c800a7237c8f5c.mockapi.io/tasks'
		)
		return data
	},

	async create(data: ITaskCreateInput) {
		return axios.post<string>(
			'https://63fe2cb0c5c800a7237c8f5c.mockapi.io/tasks',
			data
		)
	},

	async deleteTasks(_id: string) {
		const result = confirm('Want to delete?')
		if (result) {
			return axios.delete<string>(
				`https://63fe2cb0c5c800a7237c8f5c.mockapi.io/tasks/${_id}`
			)
		}
	},
}
