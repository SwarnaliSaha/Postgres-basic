import { sequelize } from "../../connection/connection";
import { DataTypes, InferAttributes, Model } from "sequelize";
import { IUser } from "./user.type";

const UserSchema = sequelize.define("user", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    fullName: {
        type: DataTypes.STRING,
    }
});

export class UserS extends Model<InferAttributes<UserS>> {
    declare email: string;
    declare fullName: string;
}

UserSchema.sync().then(()=>console.log('table created'))
.catch((e)=>console.log(e));

export {UserSchema};