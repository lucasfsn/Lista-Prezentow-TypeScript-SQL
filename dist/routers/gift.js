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
exports.giftRouter = void 0;
const express_1 = require("express");
const gift_record_1 = require("../records/gift.record");
exports.giftRouter = (0, express_1.Router)();
exports.giftRouter
    .get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const giftsList = yield gift_record_1.GiftRecord.listAll();
    res.render('gifts/list', {
        giftsList,
    });
}))
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = Object.assign(Object.assign({}, req.body), { quantity: Number(req.body.quantity) });
    const newGift = new gift_record_1.GiftRecord(data);
    yield newGift.insert();
    res.redirect('/gift');
}));
//# sourceMappingURL=gift.js.map