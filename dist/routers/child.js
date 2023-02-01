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
exports.childRouter = void 0;
const express_1 = require("express");
const child_record_1 = require("../records/child.record");
const gift_record_1 = require("../records/gift.record");
const errors_1 = require("../utils/errors");
exports.childRouter = (0, express_1.Router)();
exports.childRouter
    .get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const childrenList = yield child_record_1.ChildRecord.listAll();
    const giftsList = yield gift_record_1.GiftRecord.listAll();
    res.render('children/list', { childrenList, giftsList });
}))
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newChild = new child_record_1.ChildRecord(req.body);
    yield newChild.insert();
    res.redirect('/child');
}))
    .patch('/gift/:childId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const child = yield child_record_1.ChildRecord.getOne(req.params.childId);
    if (child === null) {
        throw new errors_1.ValidationError('Child not found');
    }
    const gift = req.body.giftId === '' ? null : yield gift_record_1.GiftRecord.getOne(req.body.giftId);
    if (gift) {
        if (gift.quantity <= (yield gift.countGivenGifts())) {
            throw new errors_1.ValidationError('No gift available');
        }
    }
    child.giftId = (_a = gift === null || gift === void 0 ? void 0 : gift.id) !== null && _a !== void 0 ? _a : null;
    yield child.update();
    res.redirect('/child');
}));
//# sourceMappingURL=child.js.map