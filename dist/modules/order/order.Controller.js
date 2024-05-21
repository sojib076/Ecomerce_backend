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
const order_Validator_1 = require("./order.Validator");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const ValidateData = order_Validator_1.createOrderValidator.parse(data);
        const result = yield order_Services_1.orderService.createOrder(ValidateData);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (e) {
        res.status(400).json({
            success: false,
            message: e === null || e === void 0 ? void 0 : e.message
        });
    }
});
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_Services_1.orderService.getOrders(req.query.email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (e) {
        res.status(400).json({
            success: false,
            message: "Order not found",
        });
    }
});
exports.orderController = {
    createOrder,
    getOrders,
};
