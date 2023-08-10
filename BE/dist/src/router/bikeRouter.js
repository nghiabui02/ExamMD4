"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bikeController_1 = __importDefault(require("../controller/bikeController"));
const BikeRouter = (0, express_1.Router)();
BikeRouter.get('/', bikeController_1.default.findAll);
BikeRouter.post('/', bikeController_1.default.add);
BikeRouter.delete('/:id', bikeController_1.default.delete);
BikeRouter.put('/:id', bikeController_1.default.update);
BikeRouter.get('/:id', bikeController_1.default.findById);
BikeRouter.get('/:name', bikeController_1.default.findByName);
BikeRouter.get('/:price', bikeController_1.default.AVG);
exports.default = BikeRouter;
//# sourceMappingURL=bikeRouter.js.map