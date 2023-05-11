import connection from "./connection";
import { User } from "./model";

connection.sequelize.authenticate().then(()=>console.log("database is connected"))
.catch((error)=>console.log("unable to connect",error))

User.sync()
.then(()=>{
    User.create({
        email:"dfgnm",
        fullName:"fkjk"
    })
})
.then(()=>console.log("data is inserted successfully"));