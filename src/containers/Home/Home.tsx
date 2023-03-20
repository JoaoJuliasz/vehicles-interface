import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { VehiclesProvider } from '../../context/Context';
import { Vehicle } from '../../types/types';
import CreateVehicle from '../CreateVehicle/CreateVehicle';
import Navbar from '../Navbar/Navbar';
import VehiclesContainer from '../VehiclesContainer/VehiclesContainer';

import styles from './home.module.scss'

const Home = () => {

    const [vehicles, setVehicles] = useState<Vehicle[]>([])
    const [detailedVehicleId, setDetailedVehicleId] = useState("")
    const [fetchDetail, setFetchDetail] = useState<boolean>(false)

    return (
        <VehiclesProvider value={{ vehicles, setVehicles, detailedVehicleId, setDetailedVehicleId, fetchDetail, setFetchDetail }}>
            <div>
                <ToastContainer position="top-right" pauseOnHover />
                <Navbar />
                <div className={styles.vehicleContainer}>
                    <CreateVehicle />
                    <VehiclesContainer />
                </div>
            </div>
        </VehiclesProvider>
    );
};

export default Home;