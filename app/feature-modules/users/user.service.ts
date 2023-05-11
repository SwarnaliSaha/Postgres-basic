import userRepo from "./user.repo";
import { IUser } from "./user.type";

const createUser = async(user:IUser)=>await userRepo.create(user);

export default {
    createUser
}