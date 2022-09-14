"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const common_1 = require("@nestjs/common");
const book_entity_1 = require("../entity/book.entity");
const typeorm_1 = require("typeorm");
let BookRepository = class BookRepository extends typeorm_1.Repository {
    async findById(flight_uuid, phone) {
        try {
            return await this.createQueryBuilder()
                .select([
                `flight_uuid`,
                `name`,
                `phone`
            ])
                .andWhere(`flight_uuid like '%${flight_uuid}%'`)
                .andWhere(`phone like '%${phone}%'`)
                .execute();
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async createBook(body) {
        try {
            return await this.createQueryBuilder()
                .insert()
                .into('bookList')
                .values([
                {
                    flight_uuid: `${body.flight_uuid}`,
                    name: `${body.name}`,
                    phone: `${body.phone}`
                },
            ])
                .execute();
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async deleteById(query) {
        try {
            return await this.createQueryBuilder()
                .delete()
                .from('bookList')
                .where(`phone = '${query}'`)
                .execute();
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
};
BookRepository = __decorate([
    (0, typeorm_1.EntityRepository)(book_entity_1.BookEntity)
], BookRepository);
exports.BookRepository = BookRepository;
//# sourceMappingURL=book.repository.js.map