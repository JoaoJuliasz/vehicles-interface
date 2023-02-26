import React, { useContext, useState } from 'react';
import { VehiclesContext } from '../../context/Context';
import GetFilteredVehicles from './Executors/GetFilteredVehicles';

import styles from './searchbar.module.scss'

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('')

    const context = useContext(VehiclesContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchValue(value)
    }

    const onEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const keyCode = e.keyCode
        if (keyCode === 13) {
            filterVehiclesList()
        }
    }

    const filterVehiclesList = async () => {
        try {
            const response = await new GetFilteredVehicles(searchValue).execute()
            if (!response.data.message) {
                context?.setVehicles(response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={styles.container} >
            <input className={styles.input} type="text"
                onChange={handleChange}
                onKeyDown={onEnterPressed}
                placeholder="SEARCH for a vehicle" />
        </div>
    );
};

export default SearchBar;