import React, { useState } from 'react';
import { VehiclesProvider } from '../../context/Context';
import { Vehicle } from '../../types/types';
import CreateVehicle from '../CreateVehicle/CreateVehicle';
import Navbar from '../Navbar/Navbar';
import VehiclesContainer from '../VehiclesContainer/VehiclesContainer';

const Home = () => {

    const [vehicles, setVehicles] = useState<Vehicle[]>([])
    const [detailedVehicleId, setDetailedVehicleId] = useState("")

    return (
        <VehiclesProvider value={{ vehicles, setVehicles, detailedVehicleId, setDetailedVehicleId }}>
            <div>
                <Navbar />
                <div style={{ padding: '2em', maxWidth: '1000px', margin: '0 auto' }}>
                    <CreateVehicle />
                    <VehiclesContainer />
                </div>
            </div>
        </VehiclesProvider>
    );
};

export default Home;