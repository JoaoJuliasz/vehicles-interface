import Logo from '../../components/Logo/Logo';
import SearchBar from '../../components/SearchBar/SearchBar';

import style from './navbar.module.scss'

const Navbar = () => {
    return (
        <div className={style.container}>
            <Logo />
            <SearchBar />
        </div>
    );
};

export default Navbar;