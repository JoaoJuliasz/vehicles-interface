import { useCallback } from 'react';
import { useVehiclesContext } from '../../hooks/useVehiclesContext';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import VehiclesList from '../VehiclesList/VehiclesList';

import styles from './vehiclesContainer.module.scss'

const VehiclesContainer = () => {
    const { setDetailedVehicleId } = useVehiclesContext()
    const changeDetailedVehicle = useCallback((vehicleId: string) => {
        setDetailedVehicleId(vehicleId)
    }, [])

    return (
        <div className={styles.container}>
            <VehiclesList changeDetailedVehicle={changeDetailedVehicle} />
            <VehicleDetails />
        </div>
    );
};

export default VehiclesContainer;