import { memo, useEffect } from 'react';
import VehicleItem from '../../components/VehicleItem/VehicleItem';
import { useVehiclesContext } from '../../hooks/useVehiclesContext';
import GetVehicles from './Executors/GetVehicles';

import style from './vehiclesList.module.scss'

type Props = {
    changeDetailedVehicle: (vehicleId: string) => void
}
const VehiclesList = ({ changeDetailedVehicle }: Props) => {

    const { vehicles, setVehicles } = useVehiclesContext()

    const getVehicles = async () => {
        const vehicles = await new GetVehicles().execute()
        setVehicles(vehicles.data)
    }

    useEffect(() => {
        getVehicles()
    }, [])

    return (
        <div className={style.container}>
            <h4 className={style.title}>Vehicles List</h4>
            <div className={style.list}>
                {vehicles?.map(vehicle =>
                    <VehicleItem key={vehicle._id} vehicle={vehicle} changeDetailedVehicle={changeDetailedVehicle} />
                )}
            </div>
        </div>
    );
};

export default memo(VehiclesList);