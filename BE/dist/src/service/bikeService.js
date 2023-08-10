"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const bike_1 = require("../entity/bike");
class BikeService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(bike_1.Bike);
        this.getAll = async () => {
            return await this.repository.find();
        };
        this.save = async (data) => {
            return await this.repository.save(data);
        };
        this.delete = async (data) => {
            return await this.repository.delete({ id: data });
        };
        this.findById = async (data) => {
            let bikes = await this.repository.find({ where: { id: data } });
            console.log('student', bikes);
            return bikes;
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.findByName = async (name) => {
            return await this.repository.find({
                where: {
                    name
                },
            });
        };
        this.AVG = async () => {
            let data = await this.repository.find({
                order: { price: 'ASC' }
            });
            console.log(data);
            return data;
        };
        this.DESC = async () => {
            let data = await this.repository.find({
                order: { price: 'DESC' }
            });
            console.log(data);
            return data;
        };
    }
}
exports.default = new BikeService();
//# sourceMappingURL=bikeService.js.map