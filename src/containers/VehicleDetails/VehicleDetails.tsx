import { useEffect, useState } from 'react';
import { Vehicle } from '../../types/types';
import GetVehicleDetails from './Executors/GetVehicleDetails';

import style from './vehicleDetails.module.scss'

type Props = {
    vehicleId: string
}

const VehicleDetails = ({ vehicleId }: Props) => {

    const [vehicleDetails, setVehicleDetails] = useState({} as Vehicle)
    const [loading, setLoading] = useState<boolean>(false)


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

    useEffect(() => {
        getVehicleDetails()
    }, [vehicleId])

    return (
        <div className={style.container}>
            {vehicleId ?
                <>
                    <h4 className={style.title}>Details</h4>
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
                                <button className={style.btn}>&#9998; <span>Edit</span></button>
                                <span className={style.tag}>&#x1f3f7;</span>
                            </div>
                        </div>
                    }
                </> : null}
        </div>
    );
};

export default VehicleDetails;