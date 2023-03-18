import instance from "../../../config/config";

export default class GetVehicles {

    async execute() {
        return await instance.get('')
    }

}