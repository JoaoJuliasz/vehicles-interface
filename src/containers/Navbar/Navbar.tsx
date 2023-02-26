import SearchBar from '../../components/SearchBar/SearchBar';
const Navbar = () => {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                Logo
            </div>
            <SearchBar />
        </div>
    );
};

export default Navbar;