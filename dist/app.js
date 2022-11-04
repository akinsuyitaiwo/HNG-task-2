"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const responses_1 = require("./utils/responses");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    try {
        const details = {
            slackUsername: "Akinsuyi Taiwo",
            backend: true,
            age: 25,
            bio: `I am a backend developer(nodejs). Asides coding i enjoy playing football and video games. I'm looking forward to getting better with being a developer.`
        };
        return res.json(details);
    }
    catch (error) {
        (0, responses_1.handleError)(error, req);
        return (0, responses_1.errorResponse)(res, 500, "server error");
    }
});
app.listen(3000, () => {
    console.log(`app is listening on ${port}`);
});
exports.default = app;
