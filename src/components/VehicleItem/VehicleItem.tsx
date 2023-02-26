import { Vehicle } from '../../types/types';

import style from './vehicle.module.scss'

type Props = {
    vehicle: Vehicle
    changeDetailedVehicle: (vehicleId: string) => void
}

const VehicleItem = ({ vehicle, changeDetailedVehicle }: Props) => {


    const getItemDetails = () => {
        changeDetailedVehicle(vehicle._id!)
    }

    return (
        <div className={style.container}
            onClick={getItemDetails}
        >
            <div className={style.vehicleValues}>
                <span className={style.brand}>{vehicle.marca}</span>
                <span className={style.name}>{vehicle.veiculo}</span>
                <span className={style.year}>{vehicle.ano}</span>
            </div>
            <div>
                <span>&#x1f3f7;</span>
            </div>
        </div>
    );
};

export default VehicleItem;