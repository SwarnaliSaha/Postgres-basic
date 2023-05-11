import { UserS, UserSchema } from "./user.schema";
import { IUser } from "./user.type";

const create = async(user : IUser)=>{
    const record = await UserS.create(user);
    return record;
} 

export default {
    create
}

