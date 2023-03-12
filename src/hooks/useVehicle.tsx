import { useCallback, useState } from "react"
import { toast } from "react-toastify"
import instance from "../config/config"
import { Vehicle } from "../types/types"
import { useVehiclesContext } from "./useVehiclesContext"

export const useVehicle = (method: 'post' | 'put' | null, vehicleId?: string) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const { vehicles, setVehicles, setFetchDetail } = useVehiclesContext()

    const vehiclesDispatch = useCallback((vehicle: Vehicle) => {
        const url = vehicleId ? `/${vehicleId}` : ''
        setLoading(true)
        instance[method!](url, vehicle)
            .then(response => {
                updateVehiclesState(response.data)
                toast.success(`Vehicle ${method === 'post' ? 'registered' : 'updated'} successfully!`)
                setLoading(false)
            })
            .catch((error: any) => {
                console.log(error)
                setError(prev => error.response.data.err)
                toast.error(error)
                setLoading(false)
            })
    }, [method, vehicleId, setError, setVehicles])

    const updateVehiclesState = (vehicle: Vehicle) => {
        const updateVehicle = {
            ano: vehicle.ano,
            marca: vehicle.marca,
            veiculo: vehicle.veiculo,
            _id: vehicle._id
        }
        const updatedVehicles = [...vehicles]
        const index = getVehicleIdx(vehicle._id!)
        if (index !== -1) {
            setFetchDetail(true)
            updatedVehicles[index] = updateVehicle
        } else {
            updatedVehicles.push(updateVehicle)
        }
        setVehicles(prev => updatedVehicles)
    }

    const getVehicleIdx = (vehicleId: string) => {
        return vehicles.findIndex(veh => veh._id === vehicleId)
    }

    const removeVehicle = useCallback(() => {
        instance.delete(`/${vehicleId}`)
            .then(() => {
                const index = getVehicleIdx(vehicleId!)
                const updatedVehicles = [...vehicles]
                updatedVehicles.splice(index, 1)
                setVehicles(prev => updatedVehicles)
                toast.success('Vehicle delete successfully')
            })
            .catch((error: any) => {
                console.log(error)
                setError(prev => error.response.data.err)
            })
    }, [vehicleId])

    return { vehiclesDispatch, removeVehicle, loading, error }

}