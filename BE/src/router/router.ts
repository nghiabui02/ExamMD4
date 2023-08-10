import {Router} from "express";
import BikeRouter from "./bikeRouter";

const router = Router();
router.use('/bikes', BikeRouter)
export default router;
