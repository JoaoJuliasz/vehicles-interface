import React, { useEffect, useState } from 'react';
import { Vehicle } from '../../types/types';
import GetVehicleDetails from './Executors/GetVehicleDetails';

type Props = {
    vehicleId: string
}

const VehicleDetails = ({ vehicleId }: Props) => {

    const [vehicleDetails, setVehicleDetails] = useState({} as Vehicle)


    const getVehicleDetails = async () => {
        try {
            const response = await new GetVehicleDetails(vehicleId).execute()
            setVehicleDetails(response.data)
        } catch (error) {
            console.error(error)
        }
    }


    console.warn(vehicleDetails)

    useEffect(() => {
        getVehicleDetails()
    }, [vehicleId])

    return (
        <div style={{ width: '50%' }}>
            <div>
                <h4>Details</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>{vehicleDetails.veiculo}</h2>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: ' 0 20px' }}>
                        <label>Brand</label>
                        <span>{vehicleDetails.marca}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: ' 0 20px' }}>
                        <label>Year</label>
                        <span>{vehicleDetails.ano}</span>
                    </div>
                </div>
                <p>{vehicleDetails.descricao}</p>
            </div>
        </div>
    );
};

export default VehicleDetails;