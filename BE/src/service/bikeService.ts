
import {AppDataSource} from "../data-source";
import {Bike} from "../entity/bike";
class BikeService{
    private repository = AppDataSource.getRepository(Bike)

    getAll = async () => {
        return await this.repository.find()
    }
    save = async (data) => {
        return await this.repository.save(data)
    }
    delete = async (data) => {
        return await this.repository.delete({id:data})
    }
    findById = async (data) => {
        let bikes =  await this.repository.find({where: {id: data}});
        console.log('student', bikes)
        return bikes
    }
    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
    findByName = async (name) =>{
        return await this.repository.find({
            where:{
                name
            },
        })
    }
    AVG = async () => {
        let data  =await this.repository.find({
            order:
                {price: 'ASC'}
        })
        console.log(data)
        return data
    }
    DESC = async () => {
        let data  =await this.repository.find({
            order:
                {price: 'DESC'}
        })
        console.log(data)
        return data
    }
}

export default new BikeService();
