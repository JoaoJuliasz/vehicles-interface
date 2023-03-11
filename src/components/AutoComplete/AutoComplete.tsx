import { Vehicle } from '../../types/types';

import styles from './autocomplete.module.scss'

type Props = {
    autoComplete: Vehicle[]
    handleClick: (vehicleId: string) => void
}

const AutoComplete = ({ autoComplete, handleClick }: Props) => {
    return (
        <div className={styles.autocomplete}>
            {autoComplete.map(vehicle =>
                <div className={styles.vehicle} onClick={() => handleClick(vehicle._id!)}>
                    <span>{vehicle.veiculo}</span>
                    -
                    <span>{vehicle.marca}</span>
                </div>
            )}
        </div>
    );
};

export default AutoComplete;