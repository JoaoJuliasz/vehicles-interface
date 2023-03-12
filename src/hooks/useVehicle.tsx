import { useCallback, useEffect, useState } from "react"
import instance from "../config/config"
import { Vehicle } from "../types/types"
import { useVehiclesContext } from "./useVehiclesContext"

export const useVehicle = (method: 'post' | 'put', vehicleId?: string) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const { setVehicles } = useVehiclesContext()

    const vehiclesDispatch = useCallback(async (vehicle: Vehicle) => {
        setLoading(true)
        try {
            console.warn(vehicle)
            const url = vehicleId ? `/${vehicleId}` : ''
            const response = await instance[method](url, vehicle)
            setVehicles(prev => ([...prev, response.data]))
            setLoading(false)
            return response
        } catch (error: any) {
            console.log(error)
            setError(prev => error.response.data.err)
            setLoading(false)
        }
    }, [method, vehicleId, setError, setVehicles])

    return { vehiclesDispatch, loading, error }

}