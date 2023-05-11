import { UserSchema } from "./user.schema";

UserSchema.sync()
.then(()=>{
    UserSchema.create({
        email:"abc",
        fullName:"abc"
    })
})
.then(()=>console.log("data is inserted successfully"));