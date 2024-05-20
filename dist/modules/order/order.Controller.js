"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_Services_1 = require("./order.Services");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const result = yield order_Services_1.orderService.createOrder(data);
        res.status(200).json({
            "success": true,
            "message": "Order created successfully!",
            data: result,
        });
    }
    catch (e) {
        res.status(400).json({
            "success": false,
            "message": "Order creation failed!",
            error: e.message,
        });
    }
});
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get by email 
    const queryEmail = req.query.email;
    try {
        const result = yield order_Services_1.orderService.getOrder(queryEmail);
        res.status(200).json({
            "success": true,
            "message": "Order fetched successfully!",
            data: result,
        });
    }
    catch (e) {
        res.status(400).json({
            "success": false,
            "message": "Order fetch failed!",
            error: e.message,
        });
    }
});
exports.orderController = {
    createOrder,
    getOrder
};
