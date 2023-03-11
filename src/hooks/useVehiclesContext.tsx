import { useContext } from 'react'

import { VehiclesContext } from "../context/Context"

export const useVehiclesContext = () => {
    const context = useContext(VehiclesContext)

    return {
        vehicles: context?.vehicles!,
        setVehicles: context?.setVehicles!,
        detailedVehicleId: context?.detailedVehicleId!,
        setDetailedVehicleId: context?.setDetailedVehicleId!
    }

}