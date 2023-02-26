import React, { useState } from 'react';
import { VehiclesProvider } from '../../context/Context';
import { Vehicle } from '../../types/types';
import CreateVehicle from '../CreateVehicle/CreateVehicle';
import Navbar from '../Navbar/Navbar';
import VehiclesList from '../VehiclesList/VehiclesList';

const Home = () => {

    const [vehicles, setVehicles] = useState<Vehicle[]>([])

    return (
        <VehiclesProvider value={{ vehicles, setVehicles }}>
            <div>
                <Navbar />
                <div style={{padding: '2em'}}>
                    <CreateVehicle />
                    <VehiclesList />
                </div>
            </div>
        </VehiclesProvider>
    );
};

export default Home;