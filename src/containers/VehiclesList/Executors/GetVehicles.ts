import instance from "../../../config/config";

export default class GetVehicles {


    async execute() {
        const response = await instance.get('')
        return response.data
    }

}