import React, { useContext, useEffect } from 'react';
import { VehiclesContext } from '../../context/Context';
import GetVehicles from './Executors/GetVehicles';

const VehiclesList = () => {

    const context = useContext(VehiclesContext)
    const getVehicles = async () => {
        const vehicles = await new GetVehicles().execute()
        context?.setVehicles(vehicles)
    }

    useEffect(() => {
        getVehicles()
    }, [])

    return (
        <div>
            {context?.vehicles.map(vehicle =>
                <div key={vehicle._id}>
                    {vehicle.veiculo}
                </div>
            )}
        </div>
    );
};

export default VehiclesList;