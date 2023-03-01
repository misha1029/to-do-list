import { FC, useState } from 'react'

import { Modal } from '../../ui/modal/Modal'

import { Actions } from './Actions/Actions'
import styles from './Table.module.scss'
import { ITable } from './table.interface'

export const TableItem: FC<ITable> = ({ removeHandler, tableItem }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [checked, setChecked] = useState(false)

	return (
		<div className="flex">
			<button className={styles.item} onClick={() => setIsOpen(true)}>
				{tableItem.items.map((value) => (
					<div key={value}>{value}</div>
				))}
			</button>
			<Actions
				removeHandler={removeHandler}
				checked={checked}
				setChecked={setChecked}
			/>
			{isOpen && (
				<Modal
					tableItem={tableItem}
					setIsOpen={setIsOpen}
					checked={checked}
					setChecked={setChecked}
				/>
			)}
		</div>
	)
}
