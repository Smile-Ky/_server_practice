"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readToken = exports.makeToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_secretKey = {
    secretKey: 'YoUrSeCrEtKeY',
};
const jwt_option = {
    algorithm: "HS256",
    expiresIn: "30m",
    issuer: "issuer"
};
const makeToken = (data) => {
    return jsonwebtoken_1.default.sign(data, jwt_secretKey.secretKey, {
        algorithm: "HS256",
        expiresIn: "30d",
        issuer: "issuer"
    });
};
exports.makeToken = makeToken;
const readToken = (data) => {
    let token_result = null;
    try {
        token_result = jsonwebtoken_1.default.verify(data, jwt_secretKey.secretKey);
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.readToken = readToken;
//# sourceMappingURL=jwt.js.map