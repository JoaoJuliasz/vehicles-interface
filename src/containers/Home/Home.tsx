import React, { useState } from 'react';
import { VehiclesProvider } from '../../context/Context';
import { Vehicle } from '../../types/types';
import Navbar from '../Navbar/Navbar';
import VehiclesList from '../VehiclesList/VehiclesList';

const Home = () => {

    const [vehicles, setVehicles] = useState<Vehicle[]>([])

    return (
        <VehiclesProvider value={{ vehicles, setVehicles }}>
            <div>
                <Navbar />
                <VehiclesList />
            </div>
        </VehiclesProvider>
    );
};

export default Home;