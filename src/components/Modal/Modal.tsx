import React, { useCallback, useEffect, useState } from 'react';
import { useVehicle } from '../../hooks/useVehicle';
import { useVehiclesContext } from '../../hooks/useVehiclesContext';
import { emptyVehicle, Vehicle } from '../../types/types';
import Button from '../Button/Button';
import LabelInput from '../LabelInput/LabelInput';
import LabelTextArea from '../LabelTextArea/LabelTextArea';

import styles from "./modal.module.scss";


type Props = {
    title: string
    method: 'post' | 'put'
    vehicleDetails?: Vehicle
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ title, method, vehicleDetails, setShow }: Props) => {

    const [vehicle, setVehicle] = useState({} as Vehicle)

    const { loading, error, vehiclesDispatch } = useVehicle(method, vehicle?._id)
    const {setFetchDetail} = useVehiclesContext()

    const updateVehicle = useCallback((key: keyof Vehicle, value: string | boolean) => {
        setVehicle(prev => ({ ...prev, [key]: value }))
    }, [])

    const handleUpdateVehicles = async () => {
        const vehicleToUpdate = { ...vehicle }
        vehicleToUpdate.ano = Number(vehicleToUpdate.ano)
        await vehiclesDispatch(vehicleToUpdate)
        if (!error) {
            setShow(false)
            setFetchDetail(false)
        }
    }

    useEffect(() => {
        setVehicle(vehicleDetails || emptyVehicle)
    }, [])

    return (
        <>
            <div className={styles.darkBG} onClick={() => setShow(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>{title}</h5>
                    </div>
                    <div className={styles.modalContent}>
                        <div className={styles.inputContainer}>
                            <LabelInput handleChange={updateVehicle} value={vehicle.veiculo} objType="veiculo" title="Vehicle" />
                            <LabelInput handleChange={updateVehicle} value={vehicle.marca} objType="marca" title="Brand" />
                        </div>
                        <div className={styles.inputContainer}>
                            <LabelInput handleChange={updateVehicle} value={vehicle.ano} objType="ano" type="number" min="0" title="Year" />
                            <div className={styles.soldContainer}>
                                <input onChange={() => updateVehicle('vendido', !vehicle.vendido)} type="checkbox" checked={vehicle.vendido} />
                                <label htmlFor="">Sold</label>
                            </div>
                        </div>
                        <LabelTextArea handleChange={updateVehicle} value={vehicle.descricao!} objType="descricao" title="Description" />
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <Button onClick={handleUpdateVehicles}>
                                <p style={{ margin: '0 auto' }}>{loading ? 'Loading...' : 'Add'}</p>
                            </Button>
                            <Button onClick={() => setShow(false)}
                            >
                                <p style={{ margin: '0 auto' }}>Close</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;