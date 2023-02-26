import { memo, useContext, useEffect } from 'react';
import VehicleItem from '../../components/VehicleItem/VehicleItem';
import { VehiclesContext } from '../../context/Context';
import GetVehicles from './Executors/GetVehicles';

import style from './vehiclesList.module.scss'

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
        <div className={style.container}>
            <h4 className={style.title}>Vehicles List</h4>
            {context?.vehicles.map(vehicle =>
                <VehicleItem key={vehicle._id} vehicle={vehicle} changeDetailedVehicle={changeDetailedVehicle} />
            )}
        </div>
    );
};

export default memo(VehiclesList);