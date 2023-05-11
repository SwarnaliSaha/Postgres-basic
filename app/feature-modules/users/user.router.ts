import { Router } from "express";
import userService from "./user.service";
import { ResponseHandler } from "../../utility/response-handler";

const router = Router();

router.post('/',async(req,res,next)=>{
    try {
        const result = await userService.createUser(req.body);

        res.send(new ResponseHandler(result));
    } 
    catch (error) {
        console.log(error)
        next(error);
    }
})

export default router;