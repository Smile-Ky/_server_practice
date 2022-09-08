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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_repository_1 = require("../respository/book.repository");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async findById(flight_uuid, phone) {
        try {
            return await this.bookRepository.findById(flight_uuid, phone);
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async createBook(body) {
        try {
            return await this.bookRepository.createBook(body);
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async deleteById(query) {
        try {
            return await this.bookRepository.deleteById(query);
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_repository_1.BookRepository)),
    __metadata("design:paramtypes", [book_repository_1.BookRepository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map