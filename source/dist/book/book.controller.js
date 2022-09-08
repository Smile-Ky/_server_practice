"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
const create_book_dto_1 = require("./create-book.dto");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async findById(flight_uuid, phone, res) {
        try {
            if (flight_uuid === undefined)
                flight_uuid = "";
            if (phone === undefined)
                phone = "";
            return res.status(200).json(await this.bookService.findById(flight_uuid, phone));
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json(error);
        }
    }
    async createBook(body, res) {
        try {
            await this.bookService.createBook(body);
            return res.status(200).json(body.flight_uuid);
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json(error);
        }
    }
    async deleteById(query, res) {
        try {
            await this.bookService.deleteById(query);
            return res.status(200).json(await this.bookService.findById("", ""));
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json(error);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('flight_uuid')),
    __param(1, (0, common_1.Query)('phone')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.createBookDto, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('phone')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteById", null);
BookController = __decorate([
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map