import Axios from "axios";


export const axiosAuthService = Axios.create({ baseURL: "https://blue-journalist-bbrpv.ineuron.app:4000"});