import { FC } from 'react'

import styles from './Table.module.scss'
import { TableHeader } from './TableHeader'
import { TableItem } from './TableItem'
import { ITableItem } from './table.interface'

interface ITable {
	tableItem: ITableItem[]
	headerItems: string[]
	removeHandler: (id: string) => void
}

export const Table: FC<ITable> = ({
	removeHandler,
	tableItem,
	headerItems,
}) => {
	return (
		<div>
			<TableHeader headerItems={headerItems} />

			{tableItem.length ? (
				tableItem.map((tableItem) => (
					<TableItem
						key={tableItem.id}
						removeHandler={() => removeHandler(tableItem.id)}
						tableItem={tableItem}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	)
}
