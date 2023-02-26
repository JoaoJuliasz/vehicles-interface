import { Vehicle } from '../../types/types';

type Props = {
    vehicle: Vehicle
    changeDetailedVehicle: (vehicleId: string) => void
}

const VehicleItem = ({ vehicle, changeDetailedVehicle }: Props) => {


    const getItemDetails = () => {
        changeDetailedVehicle(vehicle._id!)
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