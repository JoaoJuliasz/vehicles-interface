import React, { useCallback } from 'react';
import { useVehiclesContext } from '../../hooks/useVehiclesContext';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import VehiclesList from '../VehiclesList/VehiclesList';

const VehiclesContainer = () => {
    const { setDetailedVehicleId } = useVehiclesContext()
    const changeDetailedVehicle = useCallback((vehicleId: string) => {
        setDetailedVehicleId(vehicleId)
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <VehiclesList changeDetailedVehicle={changeDetailedVehicle} />
            <VehicleDetails />
        </div>
    );
};

export default VehiclesContainer;