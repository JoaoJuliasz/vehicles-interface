import { createContext } from 'react'
import { Vehicle } from '../types/types'


type VehiclesContextType = {
    vehicles: Vehicle[]
    setVehicles: React.Dispatch<React.SetStateAction<Vehicle[]>>
    detailedVehicleId: string
    setDetailedVehicleId: React.Dispatch<React.SetStateAction<string>>
}

const VehiclesContext = createContext<VehiclesContextType | null>(null)

const VehiclesProvider = VehiclesContext.Provider

export { VehiclesContext, VehiclesProvider }