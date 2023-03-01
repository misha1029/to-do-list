import { Dispatch, FC, SetStateAction } from 'react'

import { MaterialIcon } from '../../../ui/MaterialIcon'

import styles from './Actions.module.scss'

interface IActions {
	removeHandler: () => void
	checked?: boolean
	setChecked: Dispatch<SetStateAction<boolean>>
}

export const Actions: FC<IActions> = ({
	removeHandler,
	checked,
	setChecked,
}) => {
	return (
		<div className={styles.actions}>
			<label className="flex items-center">
				<input
					type="checkbox"
					checked={checked}
					onChange={() => setChecked(!checked)}
					className="w-4 h-4 mr-5"
				></input>
			</label>
			<button onClick={removeHandler}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	)
}
