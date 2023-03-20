import { useEffect, useRef } from 'react'

import { Vehicle } from '../../types/types';

import styles from './autocomplete.module.scss'

type Props = {
    autoComplete: Vehicle[]
    setAutoComplete: React.Dispatch<React.SetStateAction<Vehicle[]>> 
    handleClick: (vehicleId: string) => void
}

const AutoComplete = ({ autoComplete, setAutoComplete, handleClick }: Props) => {

    const node = useRef<any>()

    const handleClickOutSide = (e: any) => {
        if (node.current.contains(e.target)) {
            return
        }
        setAutoComplete([])
    }

    useEffect(() => {
        if (autoComplete.length > 0) {
            document.addEventListener("mousedown", handleClickOutSide)
        } else {
            document.removeEventListener("mousedown", handleClickOutSide)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    }, [autoComplete])

    return (
        <div className={styles.autocomplete} ref={node}>
            {autoComplete.map(vehicle =>
                <div key={vehicle._id!} className={styles.vehicle} onClick={() => handleClick(vehicle._id!)}>
                    <span>{vehicle.veiculo}</span>
                    -
                    <span>{vehicle.marca}</span>
                </div>
            )}
        </div>
    );
};

export default AutoComplete;