export interface ITask {
	id: string
	title: string
	description: string
}

export interface ITaskCreateInput extends Omit<ITask, 'id'> {}
