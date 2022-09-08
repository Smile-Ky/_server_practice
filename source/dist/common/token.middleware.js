"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("./jwt");
let TokenMiddleware = class TokenMiddleware {
    use(req, res, next) {
        if (req.originalUrl.split(`/`)[1] === "api") {
            if (req.originalUrl.split(`/`)[2] === "berry") {
                return next();
            }
            if (req.originalUrl.split(`/`)[3] !== "login" && req.originalUrl.split(`/`)[3] !== "logout") {
                if (req.cookies['user_id'] == undefined && req.cookies['user_id'] == null) {
                    return res.status(400).json({
                        code: 6001,
                        result: 6000,
                        message: "로그인이 되어 있지 않습니다."
                    });
                }
            }
        }
        console.log(req.cookies['access_token']);
        if (process.env.MODE === "DEV" || process.env.MODE === "QA") {
            common_1.Logger.log("Dev Mode");
            return next();
        }
        if (req.originalUrl.split(`/`)[1] === "admin") {
            if (req.originalUrl.split(`/`)[2] === "userLogin" ||
                req.originalUrl.split(`/`)[2] === "signup" ||
                req.originalUrl.split(`/`)[2] === "logout") {
                return next();
            }
            console.log(req.originalUrl.split('/'));
            if (!(0, jwt_1.readToken)(req.cookies['access_token'])) {
                return res.status(500).json({ code: 6001, result: 6000, message: '토큰이 없습니다.' });
            }
        }
        return next();
    }
};
TokenMiddleware = __decorate([
    (0, common_1.Injectable)()
], TokenMiddleware);
exports.TokenMiddleware = TokenMiddleware;
//# sourceMappingURL=token.middleware.js.map