import React, { useCallback, useEffect, useState } from 'react';
import { useVehicle } from '../../hooks/useVehicle';
import { emptyVehicle, Vehicle } from '../../types/types';
import LabelInput from '../LabelInput/LabelInput';
import LabelTextArea from '../LabelTextArea/LabelTextArea';

import styles from "./modal.module.scss";


type Props = {
    title: string
    method: 'post' | 'put'
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ title, method, setShow }: Props) => {

    const [vehicle, setVehicle] = useState({} as Vehicle)

    const { loading, error, vehiclesDispatch } = useVehicle(method)

    const updateVehicle = useCallback((key: keyof Vehicle, value: string | boolean) => {
        setVehicle(prev => ({ ...prev, [key]: value }))
    }, [])

    const handleUpdateVehicles = async () => {
        const vehicleToUpdate = { ...vehicle }
        vehicleToUpdate.ano = Number(vehicleToUpdate.ano)
        await vehiclesDispatch(vehicleToUpdate)
        if (!error) {
            setShow(false)
        }
    }

    useEffect(() => {
        //Here create code to setVehicle
        setVehicle(emptyVehicle)
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
                        <div style={{ display: 'flex' }}>
                            <LabelInput handleChange={updateVehicle} value={vehicle.veiculo} objType="veiculo" title="Vehicle" />
                            <LabelInput handleChange={updateVehicle} value={vehicle.marca} objType="marca" title="Brand" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <LabelInput handleChange={updateVehicle} value={vehicle.ano} objType="ano" type="number" min="0" title="Year" />
                            <div>
                                <input onChange={() => updateVehicle('vendido', !vehicle.vendido)} type="checkbox" />
                                <label htmlFor="">Sold</label>
                            </div>
                        </div>
                        <LabelTextArea handleChange={updateVehicle} value={vehicle.descricao} objType="descricao" title="Description" />
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button onClick={handleUpdateVehicles}>
                                {loading ? 'Loading...' : 'Add'}
                            </button>
                            <button
                                className={styles.cancelBtn}
                                onClick={() => setShow(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;