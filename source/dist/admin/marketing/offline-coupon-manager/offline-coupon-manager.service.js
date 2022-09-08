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
exports.OfflineCouponManagerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Product_repository_1 = require("../../../repository/product/Product.repository");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const Coupon_repository_1 = require("../../../repository/coupon/Coupon.repository");
const OfflineCouponToCoupon_repository_1 = require("../../../repository/offline-coupon/OfflineCouponToCoupon.repository");
const OfflineCouponInstance_repository_1 = require("../../../repository/offline-coupon/OfflineCouponInstance.repository");
const OfflineCoupon_repository_1 = require("../../../repository/offline-coupon/OfflineCoupon.repository");
const respones_1 = require("../../../common/respones");
const OfflineCoupon_entity_1 = require("../../../entity/offline-coupon/OfflineCoupon.entity");
const OfflineCouponToCoupon_entity_1 = require("../../../entity/offline-coupon/OfflineCouponToCoupon.entity");
let OfflineCouponManagerService = class OfflineCouponManagerService {
    constructor(productRepository, memberGroupRepository, memberRepository, couponRepository, offlineCouponToCouponRepository, offlineCouponInstanceRepository, offlineCouponRepository) {
        this.productRepository = productRepository;
        this.memberGroupRepository = memberGroupRepository;
        this.memberRepository = memberRepository;
        this.couponRepository = couponRepository;
        this.offlineCouponToCouponRepository = offlineCouponToCouponRepository;
        this.offlineCouponInstanceRepository = offlineCouponInstanceRepository;
        this.offlineCouponRepository = offlineCouponRepository;
    }
    async findAll(page, pageSize) {
        try {
            const result = await this.offlineCouponRepository
                .createQueryBuilder("oc")
                .select([`oc.offline_coupon_id as offline_coupon_id`,
                `oc.name as name`,
                `oc.description as description`,
                `oc.coupon_start_date as coupon_start_date`,
                `oc.coupon_end_date as coupon_end_date`,
                `oc.issued_method as  issued_method`,
                `(select count(*) 
        from offline_coupon_instance oci      
        where oci.offline_coupon_id = oc.offline_coupon_id
        and oci.use_date is not null
        and oci.cancel_date is not null) as issued_use_count`,
                `oc.coupon_generation_count as issued_count`,
                `oc.create_date as create_date`
            ]);
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("oc.offline_coupon_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async find(req, page, pageSize) {
        try {
            const result = await this.offlineCouponRepository
                .createQueryBuilder("oc")
                .select([`oc.offline_coupon_id as offline_coupon_id`,
                `oc.name as name`,
                `oc.description as description`,
                `oc.coupon_start_date as coupon_start_date`,
                `oc.coupon_end_date as coupon_end_date`,
                `oc.issued_method as issued_method`,
                `(select count(*) 
        from offline_coupon_instance oci      
        where oci.offline_coupon_id = oc.offline_coupon_id
        and oci.use_date is not null
        and oci.cancel_date is not null) as issued_use_count`,
                `oc.coupon_generation_count as issued_count`,
                `oc.create_date as create_date`
            ])
                .leftJoin("offline_coupon_to_coupon", "octc", "octc.offline_coupon_id = oc.offline_coupon_id")
                .leftJoin("coupon", "c", "c.coupon_id = octc.coupon_id")
                .distinct(true);
            if (req.find_text != "") {
                switch (req.find_type) {
                    case "0":
                        result.andWhere(`oc.name like :name`, { name: `%${req.find_text}%` });
                        break;
                    case "1":
                        result.andWhere(`oc.description like :desc`, { desc: `%${req.find_text}%` });
                        break;
                }
            }
            req.issued_method != "0" ? result.andWhere(`oc.issued_method = :search`, { search: req.issued_method }) : "";
            if (req.is_use_date_start != "" && req.is_use_date_end != "") {
                result.andWhere("DATE(oc.coupon_start_date) BETWEEN :start AND :end", {
                    start: new Date(req.is_use_date_start),
                    end: new Date(req.is_use_date_end)
                });
                result.andWhere("DATE(oc.coupon_end_date) BETWEEN :start AND :end", {
                    start: new Date(req.is_use_date_start),
                    end: new Date(req.is_use_date_end)
                });
            }
            if (req.registration_range_start != "" && req.registration_range_end != "") {
                result.andWhere("DATE(c.issued_range_start) BETWEEN :start AND :end", {
                    start: new Date(req.registration_range_start),
                    end: new Date(req.registration_range_end)
                });
                result.andWhere("DATE(c.issued_range_end) BETWEEN :start AND :end", {
                    start: new Date(req.registration_range_start),
                    end: new Date(req.registration_range_end)
                });
            }
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("oc.offline_coupon_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findSimpleId(offlineCouponId) {
        try {
            const result = await this.offlineCouponRepository
                .createQueryBuilder("oc")
                .select([`oc.offline_coupon_id as offline_coupon_id`,
                `oc.name as name`,
                `oc.description as description`,
                `oc.coupon_start_date as coupon_start_date`,
                `oc.coupon_end_date as coupon_end_date`,
                `oc.issued_method as issued_method`,
                `(select count(*) 
        from offline_coupon_instance oci      
        where oci.offline_coupon_id = oc.offline_coupon_id
        and oci.use_date is not null
        and oci.cancel_date is not null) as issued_use_count`,
                `oc.coupon_generation_count as issued_count`,
                `oc.create_date as create_date`
            ]);
            result.andWhere(`oc.offline_coupon_id = :key`, { key: `${offlineCouponId}` });
            return {
                data: await result.execute()
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findFullId(offlineCouponId) {
        try {
            const result = await this.offlineCouponRepository
                .createQueryBuilder("oc")
                .select([`oc.offline_coupon_id as offline_coupon_id`,
                `oc.name as name`,
                `oc.description as description`,
                `oc.issued_method as issued_method`,
                `oc.coupon_serial as mileage_serial`,
                `oc.serial_method as mileage_serial_method`,
                `oc.coupon_generation_count as mileage_generation_count`,
                `oc.mileage_amount as mileage_amount`,
                `oc.coupon_serial as random_coupon_serial`,
                `oc.serial_method as random_coupon_serial_method`,
                `oc.coupon_generation_count as random_coupon_generation_count`,
                `oc.serial_method as same_coupon_serial_method`,
                `oc.coupon_start_date as coupon_start_date`,
                `oc.coupon_end_date as coupon_end_date`
            ]);
            result.andWhere(`oc.offline_coupon_id = :key`, { key: `${offlineCouponId}` });
            const list = await this.offlineCouponToCouponRepository
                .createQueryBuilder("octc")
                .select([
                `c.coupon_id as coupon_id`,
                `c.coupon_name as coupon_name`,
                `c.coupon_number as coupon_number`
            ])
                .innerJoin("coupon", "c", "c.coupon_id = octc.coupon_id")
                .andWhere(`octc.offline_coupon_id = :key`, { key: `${offlineCouponId}` });
            return {
                data: await result.execute(),
                random_coupon_list: await list.execute(),
                same_coupon_list: await list.execute()
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findPaymentCouponList() {
        try {
            const result = await this.couponRepository
                .createQueryBuilder("c")
                .select([`c.coupon_id as coupon_id`,
                `c.coupon_name as coupon_name`,
                `c.coupon_number as coupon_number`
            ])
                .andWhere(`c.offline_coupon_enable_yn = :key`, { key: `0` })
                .andWhere(`c.issued_method = :im`, { im: `2` })
                .andWhere(`c.delete_yn = :dy`, { dy: `0` })
                .orderBy("c.coupon_id", "DESC");
            return {
                data: await result.execute()
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async save(req) {
        try {
            const data = new OfflineCoupon_entity_1.OfflineCouponEntity();
            data.name = req.name;
            data.description = req.description;
            data.issued_method = req.issued_method;
            data.coupon_start_date = req.coupon_start_date;
            data.coupon_end_date = req.coupon_end_date;
            switch (req.issued_method) {
                case "0": {
                    data.coupon_serial = req.mileage_serial;
                    data.serial_method = Number(req.mileage_serial_method);
                    data.coupon_generation_count = req.mileage_generation_count;
                    data.mileage_amount = req.mileage_amount;
                    break;
                }
                case "1": {
                    data.coupon_serial = req.mileage_serial;
                    data.serial_method = Number(req.random_coupon_serial_method);
                    data.coupon_generation_count = req.random_coupon_generation_count;
                    break;
                }
                case "2": {
                    data.serial_method = Number(req.same_coupon_serial_method);
                    break;
                }
            }
            const result = await this.offlineCouponRepository.save(data);
            if (req.issued_method == "1" || req.issued_method == "2") {
                const sub = new OfflineCouponToCoupon_entity_1.OfflineCouponToCouponEntity();
                sub.offline_coupon = result;
                if (req.issued_method == "1") {
                    for (const i of req.random_coupon_List) {
                        await this.offlineCouponToCouponRepository
                            .createQueryBuilder("ctr")
                            .insert()
                            .into(OfflineCouponToCoupon_entity_1.OfflineCouponToCouponEntity)
                            .values({
                            coupon: await this.couponRepository.findOne({ coupon_id: i }),
                            offline_coupon: result
                        })
                            .execute();
                    }
                }
                else {
                    for (const i of req.same_coupon_List) {
                        common_1.Logger.error(i);
                        await this.offlineCouponToCouponRepository
                            .createQueryBuilder("ctr")
                            .insert()
                            .into(OfflineCouponToCoupon_entity_1.OfflineCouponToCouponEntity)
                            .values({
                            coupon: await this.couponRepository.findOne({ coupon_id: i }),
                            offline_coupon: result
                        })
                            .execute();
                    }
                }
            }
            return "저장이 완료되었습니다.";
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async update(req, offlineCouponId) {
        try {
            const data = new OfflineCoupon_entity_1.OfflineCouponEntity();
            data.name = req.name;
            data.description = req.description;
            data.issued_method = req.issued_method;
            data.coupon_start_date = req.coupon_start_date;
            data.coupon_end_date = req.coupon_end_date;
            switch (req.issued_method) {
                case "0": {
                    data.coupon_serial = req.mileage_serial;
                    data.serial_method = Number(req.mileage_serial_method);
                    data.coupon_generation_count = req.mileage_generation_count;
                    data.mileage_amount = req.mileage_amount;
                    break;
                }
                case "1": {
                    data.coupon_serial = req.mileage_serial;
                    data.serial_method = Number(req.random_coupon_serial_method);
                    data.coupon_generation_count = req.random_coupon_generation_count;
                    break;
                }
                case "2": {
                    data.serial_method = Number(req.same_coupon_serial_method);
                    break;
                }
            }
            await this.offlineCouponRepository.update({ offline_coupon_id: offlineCouponId }, Object.assign({}, data));
            const sub = new OfflineCouponToCoupon_entity_1.OfflineCouponToCouponEntity();
            const coupon = await this.offlineCouponRepository.findOne({ offline_coupon_id: offlineCouponId });
            await this.offlineCouponToCouponRepository.delete({ offline_coupon: coupon });
            sub.offline_coupon = coupon;
            if (req.issued_method == "1" || req.issued_method == "2") {
                if (req.issued_method == "1") {
                    for (const i in req.random_coupon_List) {
                        sub.coupon = await this.couponRepository.findOne({ coupon_id: i });
                        await this.couponRepository.save(sub);
                    }
                }
                else {
                    for (const i in req.same_coupon_List) {
                        sub.coupon = await this.couponRepository.findOne({ coupon_id: i });
                        await this.couponRepository.save(sub);
                    }
                }
            }
            return "수정이 완료되었습니다.";
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async delete(offlineCouponId) {
        try {
            const coupon = await this.offlineCouponRepository.findOne({ offline_coupon_id: offlineCouponId });
            await this.offlineCouponInstanceRepository.delete({ offline_coupon: coupon });
            await this.offlineCouponToCouponRepository.delete({ offline_coupon: coupon });
            await this.offlineCouponRepository.delete({ offline_coupon_id: offlineCouponId });
            return "삭제가 완료되었습니다.";
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findIssuanceAll(offlineCouponId, page, pageSize) {
        try {
            const result = await this.offlineCouponInstanceRepository
                .createQueryBuilder("oci")
                .select([`oci.offline_coupon_instance_id as offline_coupon_instance_id`,
                `oci.instance_serial as instance_serial`,
                `oc.coupon_start_date as coupon_start_date`,
                `oc.coupon_end_date as coupon_end_date`,
                `oci.state as state`,
                `m.member_id as member_id`,
                `m.name as user_name`,
                `oci.use_date as use_date`,
                `oci.create_date as create_date`
            ]).leftJoin("member", "m", "m.member_id = oci.member_id")
                .innerJoin("offline_coupon", "oc", "oc.offline_coupon_id = oci.offline_coupon_id")
                .andWhere(`oci.cancel_date is null`);
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("oci.offline_coupon_instance_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findIssuance(req, offlineCouponId, page, pageSize) {
        try {
            const result = await this.offlineCouponInstanceRepository
                .createQueryBuilder("oci")
                .select([`oci.offline_coupon_instance_id as offline_coupon_instance_id`,
                `oci.instance_serial as instance_serial`,
                `oc.coupon_start_date as coupon_start_date`,
                `oc.coupon_end_date as coupon_end_date`,
                `oci.state as state`,
                `m.member_id as member_id`,
                `m.name as user_name`,
                `oci.use_date as use_date`,
                `oci.create_date as create_date`
            ]).leftJoin("member", "m", "m.member_id = oci.member_id")
                .innerJoin("offline_coupon", "oc", "oc.offline_coupon_id = oci.offline_coupon_id")
                .andWhere(`oci.cancel_date is null`);
            if (req.find_text != null && req.find_text != "") {
                switch (req.find_type) {
                    case "0":
                        result.andWhere(`m.member_id like :key`, { key: `%${req.find_text}%` });
                        break;
                    case "1":
                        result.andWhere(`m.name like :key`, { key: `%${req.find_text}%` });
                        break;
                    case "2":
                        result.andWhere(`oci.instance_serial like :key`, { key: `%${req.find_text}%` });
                        break;
                }
            }
            req.state == "1" || req.state == "2" ? result.andWhere(`oci.state like :key`, { key: `${req.state}` }) : "";
            result.andWhere('DATE(oci.use_date) BETWEEN :start AND :end', {
                start: new Date(req.use_date_start),
                end: new Date(req.use_date_end)
            });
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("oci.offline_coupon_instance_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async cancelIssuance(req, offlineCouponId) {
        try {
            for (const i of req.couponToMemberList) {
                await this.offlineCouponInstanceRepository.update({ offline_coupon_instance_id: i }, { cancel_date: () => "NOW()" });
            }
            return "삭제에 성공하였습니다.";
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
OfflineCouponManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(MemberGroup_repository_1.MemberGroupRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(Coupon_repository_1.CouponRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(OfflineCouponToCoupon_repository_1.OfflineCouponToCouponRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(OfflineCouponInstance_repository_1.OfflineCouponInstanceRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(OfflineCoupon_repository_1.OfflineCouponRepository)),
    __metadata("design:paramtypes", [Product_repository_1.ProductRepository,
        MemberGroup_repository_1.MemberGroupRepository,
        Member_repository_1.MemberRepository,
        Coupon_repository_1.CouponRepository,
        OfflineCouponToCoupon_repository_1.OfflineCouponToCouponRepository,
        OfflineCouponInstance_repository_1.OfflineCouponInstanceRepository,
        OfflineCoupon_repository_1.OfflineCouponRepository])
], OfflineCouponManagerService);
exports.OfflineCouponManagerService = OfflineCouponManagerService;
//# sourceMappingURL=offline-coupon-manager.service.js.map