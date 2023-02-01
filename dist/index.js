"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const express_handlebars_1 = require("express-handlebars");
const method_override_1 = __importDefault(require("method-override"));
// import * as methodOverride from 'method-override'
const child_1 = require("./routers/child");
const gift_1 = require("./routers/gift");
const home_1 = require("./routers/home");
require("./utils/db");
const errors_1 = require("./utils/errors");
const handlebars_helpers_1 = require("./utils/handlebars-helpers");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'https://localhost:3000',
}));
app.use((0, method_override_1.default)('_method'));
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.static('public'));
app.engine('.hbs', (0, express_handlebars_1.engine)({
    extname: '.hbs',
    helpers: handlebars_helpers_1.handlebarsHelpers,
}));
app.set('view engine', '.hbs');
app.use('/', home_1.homeRouter);
app.use('/child', child_1.childRouter);
app.use('/gift', gift_1.giftRouter);
app.use(errors_1.handleError);
app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
});
//# sourceMappingURL=index.js.map