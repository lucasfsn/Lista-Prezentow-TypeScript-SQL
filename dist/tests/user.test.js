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
const user_1 = require("../records/user");
let user;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    user = new user_1.User();
}));
test('User should not be logged in at the beginning', () => {
    expect(user.loggedIn).toEqual(false);
});
// test('User logged in state should not be modified outside of a class', () => {
//   expect(() => {
//     user.loggedIn = true;
//   }).toThrow();
// });
test('User should have no email at the beginning', () => {
    expect(user.email).toBeNull();
});
// test('User email should not be modified outside of a class', () => {
//   expect(() => {
//     user.email = '...';
//   }).toThrow();
// });
//# sourceMappingURL=user.test.js.map