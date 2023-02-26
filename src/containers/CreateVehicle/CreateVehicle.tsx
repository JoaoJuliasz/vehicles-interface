import style from './createVehicle.module.scss'

const CreateVehicle = () => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>Vehicle</h2>
            <button className={style.button}>&#43;</button>
        </div>
    );
};

export default CreateVehicle;