import {Request, Response} from "express";
import BikeService from "../service/bikeService";


class BikeController {
    findAll = async (req: Request, res: Response) => {
        let data
        if(req.params.score === "ASC"){
            data = await BikeService.AVG();
        }else if(req.params.score === "DESC"){
            data =await  BikeService.DESC()
        } else {
            data = await BikeService.getAll();
        }
        console.log(data)
        res.json(data);
    }

    add = async (req: Request, res: Response) => {
        let data = await BikeService.save(req.body);
        res.json(data);
    }
    delete = async (req: Request, res: Response) => {
        console.log(req.params.id)
        let data = await BikeService.delete(req.params.id);
        res.json(data);
    }
    update = async (req,res) => {
        await BikeService.update(req.params.id, req.body)
        res.json('complete')
    }
    findById = async (req: Request, res: Response) => {
        let data = await BikeService.findById(req.params.id);
        res.json(data)
    }
    findByName = async (req: Request, res: Response) => {
        let data = await BikeService.findByName(req.query.name);
        res.json(data)
    }
    AVG = async (req: Request, res: Response) => {
        let data = await BikeService.AVG();
        res.json(data);
    }
}

export default new BikeController();
