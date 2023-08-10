import {Router} from "express";
import BikeController from "../controller/bikeController";

const BikeRouter = Router();
BikeRouter.get('/', BikeController.findAll);
BikeRouter.post('/', BikeController.add);
BikeRouter.delete('/:id', BikeController.delete);
BikeRouter.put('/:id', BikeController.update);
BikeRouter.get('/:id', BikeController.findById);
BikeRouter.get('/:name', BikeController.findByName);
BikeRouter.get('/:price', BikeController.AVG);

export default BikeRouter;
