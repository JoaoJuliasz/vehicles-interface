import React, { memo, useContext, useEffect } from 'react';
import VehicleItem from '../../components/VehicleItem/VehicleItem';
import { VehiclesContext } from '../../context/Context';
import GetVehicles from './Executors/GetVehicles';

type Props = {
    changeDetailedVehicle: (vehicleId: string) => void
}

const VehiclesList = ({ changeDetailedVehicle }: Props) => {

    const context = useContext(VehiclesContext)

    const getVehicles = async () => {
        const vehicles = await new GetVehicles().execute()
        context?.setVehicles(vehicles)
    }

    useEffect(() => {
        getVehicles()
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', width: '50%' }}>
            <h4>Vehicles List</h4>
            {context?.vehicles.map(vehicle =>
                <VehicleItem key={vehicle._id} vehicle={vehicle} changeDetailedVehicle={changeDetailedVehicle}/>
            )}
        </div>
    );
};

export default memo(VehiclesList);