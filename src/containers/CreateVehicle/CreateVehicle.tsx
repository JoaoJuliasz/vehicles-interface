import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import style from './createVehicle.module.scss'

const CreateVehicle = () => {

    const [show, setShow] = useState<boolean>(false)

    return (
        <div className={style.container}>
            <h2 className={style.title}>Vehicle</h2>
            <button onClick={() => setShow(true)} className={style.button}>&#43;</button>

            {show ? <Modal method="post" title="New Vehicle" setShow={setShow} /> : null}
        </div>
    );
};

export default CreateVehicle;