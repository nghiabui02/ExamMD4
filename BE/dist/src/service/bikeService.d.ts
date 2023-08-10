import { Bike } from "../entity/bike";
declare class BikeService {
    private repository;
    getAll: () => Promise<Bike[]>;
    save: (data: any) => Promise<any>;
    delete: (data: any) => Promise<import("typeorm").DeleteResult>;
    findById: (data: any) => Promise<Bike[]>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findByName: (name: any) => Promise<Bike[]>;
    AVG: () => Promise<Bike[]>;
    DESC: () => Promise<Bike[]>;
}
declare const _default: BikeService;
export default _default;
