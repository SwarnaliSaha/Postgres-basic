import { Route,Routes } from "./router.type"
import Router from '../feature-modules/index'

export const routes : Routes =[
    new Route('/user',Router.UserRouter)
];
