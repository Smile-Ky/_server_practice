"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database_pool = void 0;
require("dotenv/config");
const promise_1 = __importDefault(require("mysql2/promise"));
exports.database_pool = promise_1.default.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_NAME || 'root',
    password: process.env.DB_PASSWORD || 'test',
    database: process.env.DB_DATABASE || 'wkrdjq12',
    connectionLimit: 300
});
//# sourceMappingURL=database.js.map