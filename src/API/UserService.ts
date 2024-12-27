import axios from "axios";
import {IUser} from "../models/IUser";

class UserService {
    async getAllUsers() {
        const response = await axios.get<IUser[]>("users.json");
        return response.data;
    }
}

export default new UserService();
