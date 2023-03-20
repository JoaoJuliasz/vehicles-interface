import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { useVehicle } from '../../hooks/useVehicle';
import { useVehiclesContext } from '../../hooks/useVehiclesContext';
import { Vehicle } from '../../types/types';
import GetVehicleDetails from './Executors/GetVehicleDetails';

import style from './vehicleDetails.module.scss'

const VehicleDetails = () => {

    const [vehicleDetails, setVehicleDetails] = useState({} as Vehicle)
    const [loading, setLoading] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)

    const { detailedVehicleId: vehicleId, setDetailedVehicleId, fetchDetail } = useVehiclesContext()
    const { removeVehicle } = useVehicle(null, vehicleId)

    const getVehicleDetails = async () => {
        setLoading(true)
        try {
            const response = await new GetVehicleDetails(vehicleId).execute()
            setVehicleDetails(response.data)
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this vehicle?')) {
            removeVehicle()
            closeVehiclesDetails()
        }
    }

    const closeVehiclesDetails = () => {
        setDetailedVehicleId('')
    }

    useEffect(() => {
        if (vehicleId) {
            getVehicleDetails()
        }
    }, [vehicleId, fetchDetail])

    return (
        <div className={style.container}>
            {vehicleId ?
                <>
                    <div className={style.titleContainer}>
                        <h4 className={style.title}>Details</h4>
                        <span onClick={closeVehiclesDetails} className={style.close}>&#8722;</span>
                    </div>
                    {loading ? 'loading...'
                        :
                        <div className={style.infos}>
                            <h2 className={style.name}>{vehicleDetails.veiculo}</h2>
                            <div className={style.factoryInfo}>
                                <div className={style.item}>
                                    <label>Brand</label>
                                    <span>{vehicleDetails.marca}</span>
                                </div>
                                <div className={style.item}>
                                    <label>Year</label>
                                    <span>{vehicleDetails.ano}</span>
                                </div>
                            </div>
                            <p className={style.description}>{vehicleDetails.descricao}</p>
                            <div className={style.edit}>
                                <div style={{ display: 'flex' }}>
                                    <Button onClick={() => setShow(true)}>
                                        <>&#9998;</><span>Edit</span>
                                    </Button>
                                    <Button onClick={handleDelete}>
                                        <>	&#128465;</><span>Delete</span>
                                    </Button>
                                </div>
                                <span className={style.tag}>&#x1f3f7;</span>
                            </div>
                        </div>
                    }
                </> : null}

            {show ? <Modal method="put" title="Update Vehicle" vehicleDetails={vehicleDetails} setShow={setShow} /> : null}

        </div>
    );
};

export default VehicleDetails;