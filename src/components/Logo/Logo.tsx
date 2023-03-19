import style from './logo.module.scss'
import logo from '../../assets/logo.jpeg'


const Logo = () => {
    return (
        <div className={style.container}>
            <img src={logo} alt="logo" width={50}/>
        </div>
    );
};

export default Logo;