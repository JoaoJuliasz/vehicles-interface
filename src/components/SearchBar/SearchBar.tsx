import React, { useState, useEffect } from 'react';
import { useVehiclesContext } from '../../hooks/useVehiclesContext';
import { Vehicle } from '../../types/types';
import AutoComplete from '../AutoComplete/AutoComplete';
import GetFilteredVehicles from './Executors/GetFilteredVehicles';

import styles from './searchbar.module.scss'

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('')
    const [autoComplete, setAutoComplete] = useState<Vehicle[]>([])

    const { setDetailedVehicleId } = useVehiclesContext()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (!value) {
            setAutoComplete([])
        }
        setSearchValue(value)
    }

    const selectAutoCompleteItem = (vehicleId: string) => {
        setDetailedVehicleId(vehicleId)
        setAutoComplete([])
        setSearchValue(prev => '')
    }

    const filterVehiclesList = async () => {
        try {
            const response = await new GetFilteredVehicles(searchValue).execute()
            if (!response.data.message) {
                setAutoComplete(prev => response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleFocus = () => {
        if (searchValue) {
            filterVehiclesList()
        }
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchValue) {
                filterVehiclesList()
            }
        }, 200)

        return () => clearTimeout(delayDebounceFn)
    }, [searchValue])

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <input className={styles.input} type="text"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    value={searchValue}
                    placeholder="SEARCH for a vehicle" />
            </div>
            {autoComplete.length > 0 ?
                <AutoComplete autoComplete={autoComplete} setAutoComplete={setAutoComplete} handleClick={selectAutoCompleteItem} />
                : null
            }
        </div>
    );
};

export default SearchBar;