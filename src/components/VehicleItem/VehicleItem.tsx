import React from 'react';
import { Vehicle } from '../../types/types';
import GetVehicleDetails from './Executors/GetVehicleDetails';

type Props = {
    vehicle: Vehicle
}

const VehicleItem = ({ vehicle }: Props) => {


    const getItemDetails = async () => {
        try {
            const response = await new GetVehicleDetails(vehicle?._id || "").execute()
            console.warn(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div style={{
            margin: '7px 0', display: 'flex', maxWidth: '350px',
            justifyContent: 'space-between', background: '#fff',
            padding: '5px', cursor: 'pointer'
        }}
        onClick={getItemDetails}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>{vehicle.marca}</span>
                <span>{vehicle.veiculo}</span>
                <span>{vehicle.ano}</span>
            </div>
            <div>
                tag
            </div>
        </div>
    );
};

export default VehicleItem;