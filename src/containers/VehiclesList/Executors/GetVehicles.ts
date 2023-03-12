import instance from "../../../config/config";

export default class GetVehicles {

    async execute() {
        // return instance.get('')
        return await instance.get('')
    }

}