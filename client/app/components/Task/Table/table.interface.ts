export interface ITableItem {
	id: string
	items: string[]
}

export interface ITable {
	tableItem: ITableItem
	removeHandler: () => void
}
