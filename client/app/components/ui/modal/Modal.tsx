import { Dispatch, FC, SetStateAction } from 'react'
import { RiCloseLine } from 'react-icons/ri'

import styles from './Modal.module.scss'

interface IItem {
	id: number
	items: string[]
}

interface IModal {
	tableItem: any
	setIsOpen: Dispatch<SetStateAction<boolean>>
	checked?: boolean
	setChecked: Dispatch<SetStateAction<boolean>>
}

export const Modal: FC<IModal> = ({
	setIsOpen,
	tableItem,
	checked,
	setChecked,
}) => {
	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>Title:{tableItem.items[0]}</h5>
					</div>
					<div>
						<div className="ml-5 mt-2 text-black text-lg">Description:</div>
						<div className={styles.description}>{tableItem.items[1]}</div>
					</div>
					<div className="flex items-center">
						<div className={styles.status}>Status:</div>
						<input
							type="checkbox"
							checked={checked}
							onChange={() => setChecked(!checked)}
							className="w-4 h-4 ml-5"
						></input>
					</div>

					<button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
						<RiCloseLine style={{ marginBottom: '-3px' }} />
					</button>

					<div className={styles.modalActions}>
						<div className={styles.actionsContainer}>
							<button
								className={styles.cancelBtn}
								onClick={() => setIsOpen(false)}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
