import React, { useCallback, useState } from 'react';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import VehiclesList from '../VehiclesList/VehiclesList';

const VehiclesContainer = () => {

    const [detailedVehicleId, setDetailedVehicleId] = useState("")

    const changeDetailedVehicle = useCallback((vehicleId: string) => {
        setDetailedVehicleId(vehicleId)
    }, [])

    return (
        <div style={{display: 'flex'}}>
            <VehiclesList changeDetailedVehicle={changeDetailedVehicle}/>
            <VehicleDetails vehicleId={detailedVehicleId} />
        </div>
    );
};

export default VehiclesContainer;