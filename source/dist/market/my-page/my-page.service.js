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
exports.MyPageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ReviewImage_entity_1 = require("../../entity/review/ReviewImage.entity");
const ReviewImage_repository_1 = require("../../repository/review/ReviewImage.repository");
const Coupon_repository_1 = require("../../repository/coupon/Coupon.repository");
const CouponToProduct_repository_1 = require("../../repository/coupon/CouponToProduct.repository");
const OfflineCouponInstance_repository_1 = require("../../repository/offline-coupon/OfflineCouponInstance.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
const OrderMain_repository_1 = require("../../repository/order/OrderMain.repository");
const OrderDetail_repository_1 = require("../../repository/order/OrderDetail.repository");
const Review_repository_1 = require("../../repository/review/Review.repository");
const ReviewSetting_repository_1 = require("../../repository/review/ReviewSetting.repository");
const MemberPet_repository_1 = require("../../repository/member/MemberPet.repository");
const ProductOption_repository_1 = require("../../repository/product/ProductOption.repository");
const MemberMileage_repository_1 = require("../../repository/member/MemberMileage.repository");
const MemberMileageLog_repository_1 = require("../../repository/member/MemberMileageLog.repository");
const Banner_repository_1 = require("../../repository/banner/Banner.repository");
let MyPageService = class MyPageService {
    constructor(reviewImageRepository, couponRepository, couponToProductRepository, offlineCouponInstanceRepository, memberRepository, orderMainRepository, orderDetailRepository, reviewRepository, reviewSettingRepository, memberPetRepository, productOptionRepository, memberMileageRepository, memberMileageLogRepository, bannerRepository) {
        this.reviewImageRepository = reviewImageRepository;
        this.couponRepository = couponRepository;
        this.couponToProductRepository = couponToProductRepository;
        this.offlineCouponInstanceRepository = offlineCouponInstanceRepository;
        this.memberRepository = memberRepository;
        this.orderMainRepository = orderMainRepository;
        this.orderDetailRepository = orderDetailRepository;
        this.reviewRepository = reviewRepository;
        this.reviewSettingRepository = reviewSettingRepository;
        this.memberPetRepository = memberPetRepository;
        this.productOptionRepository = productOptionRepository;
        this.memberMileageRepository = memberMileageRepository;
        this.memberMileageLogRepository = memberMileageLogRepository;
        this.bannerRepository = bannerRepository;
    }
    async getMain() {
        try {
        }
        catch (error) {
            common_1.Logger.error('my_page : ', error);
            throw error;
        }
    }
    async getOrderList() {
        try {
        }
        catch (error) {
            common_1.Logger.error('my_page : ', error);
            throw error;
        }
    }
    async getReturnList() {
        try {
        }
        catch (error) {
            common_1.Logger.error('my_page : ', error);
            throw error;
        }
    }
    async getOrderDetail() {
        try {
        }
        catch (error) {
            common_1.Logger.error('my_page : ', error);
            throw error;
        }
    }
    async getMyReviewInfo(member_id, data) {
        try {
            let bbsInfo = {};
            const ordInfo = await this
                .orderDetailRepository
                .createQueryBuilder('od')
                .select([
                `od.order_detail_id as od_ix`,
                `om.order_id as oid`,
                `pc.product_class_id as cid`,
                `p.product_id as pid`,
                `p.product_name as pname`,
                `po.product_option_id as option_id`,
                `CONCAT(product_name, ': ',  
                  (select group_concat( pod.value separator '|' ) as product_name 
                  from product_option_detail as pod 
                  where pod.option_id = po.product_option_id)
                  ) as option_text`,
                `od.order_product_count as pcnt`,
                `po.product_price as listprice`,
                `od.product_sale_price as dcprice`,
                `od.estimated_mileage as reserve`,
                `CASE
                      WHEN od.order_state = 0 THEN "입금예정"
                      WHEN od.order_state = 1 THEN "입금확인"
                      WHEN od.order_state = 2 THEN "배송준비중"
                      WHEN od.order_state = 3 THEN "배송지연"
                      WHEN od.order_state = 4 THEN "배송중"
                      WHEN od.order_state = 5 THEN "배송완료"
                      WHEN od.order_state = 6 THEN "구매확정"
                      WHEN od.order_state = 7 THEN "교환상품발송예정"
                      WHEN od.order_state = 10 THEN "입금전취소완료"
                      WHEN od.order_state = 11 THEN "취소요청"
                      WHEN od.order_state = 12 THEN "취소완료"
                      WHEN od.order_state = 20 THEN "반품요청"
                      WHEN od.order_state = 21 THEN "반품승인"
                      WHEN od.order_state = 22 THEN "반품회수완료"
                      WHEN od.order_state = 23 THEN "반품확정"
                      WHEN od.order_state = 30 THEN "교환요청"
                      WHEN od.order_state = 31 THEN "교환승인"
                      WHEN od.order_state = 32 THEN "교환회수완료"
                      WHEN od.order_state = 33 THEN "교환확정"
                      WHEN od.order_state = 40 THEN "환불요청"
                      WHEN od.order_state = 41 THEN "환불완료"
                      else null
                  END as status`,
                `(select pii.image_url 
                   from product_image pii 
                   where pii.image_id = pi.image_id
                   and pii.image_mode = 1) as pimg`,
            ])
                .innerJoin("order_main", "om", "om.order_id = od.order_id")
                .leftJoin("member", "m", "m.member_id = om.member_id")
                .leftJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_to_class", "ptc", "ptc.product_id = p.product_id")
                .leftJoin("product_class", "pc", "ptc.product_class_id = pc.product_class_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .andWhere('om.order_id = :order_id', { order_id: data.oid })
                .andWhere('od.order_detail_id = :order_detail_id', { order_detail_id: data.odIx })
                .execute();
            console.log("ordInfo ::: " + ordInfo);
            const review_data = await this.reviewRepository.findOne({ order_etail_id: await this.orderDetailRepository.findOne({ order_detail_id: Number(data.odIx) }) });
            const modify = review_data !== undefined && review_data !== null;
            if (modify) {
                bbsInfo = await this.reviewRepository.createQueryBuilder('r')
                    .select([
                    `r.review_id as bbs_ix`,
                    `m.name as bbs_name`,
                    `m.member_id as bbs_id`,
                    `r.review_content as bbs_contents`,
                    `(select group_concat(image_url) 
                  from review_image ri
                  where ri.review_id = r.review_id 
                  ) as bbs_file`,
                    `p.product_id as pid`,
                    `po.product_option_id as option_id`,
                    `p.product_name as pname`,
                    `om.order_code as oid`,
                    `om.order_id as od_ix`,
                    `(select group_concat( pod.value separator '|' ) as product_name  
                    from product_option_detail as pod 
                    where pod.option_id = po.product_option_id) as option_text`,
                    `r.create_date as reg_date`,
                    `r.admin_puppy_name as petName`,
                    `m.member_code as petId`,
                    `r.admin_puppy_age as petBirthdate`,
                    `r.admin_puppy_weight as petWeight`,
                ])
                    .innerJoin("order_detail", "od", "od.order_detail_id = r.order_detail_id")
                    .innerJoin("order_main", "om", "om.order_id = od.order_id")
                    .leftJoin("member", "m", "m.member_id = om.member_id")
                    .leftJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                    .leftJoin("product", "p", "p.product_id = po.product_id")
                    .leftJoin("product_to_class", "ptc", "ptc.product_id = p.product_id")
                    .leftJoin("product_class", "pc", "ptc.product_class_id = pc.product_class_id")
                    .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                    .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                    .andWhere('od.order_detail_id = :order_detail_id', { order_detail_id: data.odIx })
                    .execute();
            }
            const petInfo = await this
                .memberPetRepository
                .createQueryBuilder(`mp`)
                .select([
                `mp.member_pet_id as petId`,
                `mp.name as name`,
                `mp.breed as breed`,
                `mp.gender as gender`,
                `mp.birth_date as birthDate`,
                `mp.is_neutralized as isNeutralized`,
                `mp.weight as weight`,
                `mp.pet_character as "character"`,
                `mp.member_id as ownerId`,
                `mp.image_url as image`,
            ])
                .leftJoin("member", "m", "m.member_id = mp.member_id")
                .leftJoin("order_main", "om", "m.member_id = om.member_id")
                .leftJoin("order_detail", "od", "od.order_id = om.order_id")
                .andWhere('od.order_detail_id = :order_detail_id', { order_detail_id: data.odIx });
            const review_config = await this
                .reviewSettingRepository
                .createQueryBuilder('rs')
                .select([
                `rs.class_mileage_normal as mileage_amount`,
                `rs.class_mileage_premium as mileage_amount_p`,
                `rs.is_acc_mileage_type as add_mileage_type`
            ])
                .execute();
            return {
                result: "success",
                data: {
                    ordInfo: await ordInfo,
                    modify: await modify,
                    bbsInfo: await bbsInfo,
                    config: review_config,
                    petInfo: {
                        list: await petInfo.execute(),
                        totalCount: await petInfo.getCount(),
                        page: 1,
                        pageSize: 10
                    }
                }
            };
        }
        catch (error) {
            common_1.Logger.error('my_page : ', error);
            throw error;
        }
    }
    async getMyReviewList(member_id) {
        try {
            const review = await this
                .reviewRepository
                .createQueryBuilder('r')
                .innerJoin("order_detail", "od", "od.order_detail_id = r.order_detail_id")
                .innerJoin("order_main", "om", "om.order_id = od.order_id")
                .leftJoin("member", "m", "m.member_id = om.member_id")
                .leftJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_to_class", "ptc", "ptc.product_id = p.product_id")
                .leftJoin("product_class", "pc", "ptc.product_class_id = pc.product_class_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .andWhere('r.member_id = :member_id', { member_id: member_id });
            const review_count = (await review.select([`count(*) as count`]).execute())[0]['count'];
            const review_data = await review.select([
                `r.review_star_point as valuation_goods`,
                `r.review_content as bbs_contents`,
                `po.product_option_id as option_id`,
                `p.product_name as pname`,
                `p.product_id as pid`,
                `om.order_code as oid`,
                `om.order_id as od_ix`,
                `r.review_id as bbs_ix`,
                `r.review_id as bbs_no`,
                `(select group_concat(image_url) 
                    from review_image ri
                    where ri.review_id = r.review_id 
                    ) as bbs_file`,
                `m.name as name`,
                `m.profile_image_url as profile_img`,
                `r.admin_puppy_name as petName`,
                `r.admin_puppy_age as petBirthdate`,
                `r.admin_puppy_weight as petWeight`,
                `r.create_date as regdate`,
                `(select group_concat( pod.value separator '|' ) as product_name 
                    from product_option_detail as pod 
                     where pod.option_id = po.product_option_id) as option_text`,
                `(select group_concat(image_url) 
                    from review_image ri
                    where ri.review_id = r.review_id 
                    ) as anotherImgs`,
                `(select count(*)
                  from review_comment rc
                  where rc.review_id = r.review_id) as cmtTotal`,
                `(select count(*)
                  from review_like rl
                  where rl.review_id = r.review_id) as likeTotal`,
                `po.product_price as listprice`,
                `od.product_sale_price as dcprice`
            ]).execute();
            const goodsList = await this
                .orderDetailRepository
                .createQueryBuilder('od')
                .select([
                `od.order_detail_id as od_ix`,
                `om.order_id as oid`,
                `pc.product_class_id as cid`,
                `p.product_id as pid`,
                `p.product_name as pname`,
                `DATE_SUB(od.confirm_date, INTERVAL -14 DAY) as review_writable_date`,
                `po.product_option_id as option_id`,
                `CONCAT(product_name, ': ', 
                    (select group_concat( pod.value separator '|' ) as product_name 
                    from product_option_detail as pod 
                    where pod.option_id = po.product_option_id)
                    ) as option_text`,
                `od.order_product_count as pcnt`,
                `po.product_price as listprice`,
                `od.product_sale_price as dcprice`,
                `od.estimated_mileage as reserve`,
                `CASE
                        WHEN od.order_state = 0 THEN "입금예정"
                        WHEN od.order_state = 1 THEN "입금확인"
                        WHEN od.order_state = 2 THEN "배송준비중"
                        WHEN od.order_state = 3 THEN "배송지연"
                        WHEN od.order_state = 4 THEN "배송중"
                        WHEN od.order_state = 5 THEN "배송완료"
                        WHEN od.order_state = 6 THEN "구매확정"
                        WHEN od.order_state = 7 THEN "교환상품발송예정"
                        WHEN od.order_state = 10 THEN "입금전취소완료"
                        WHEN od.order_state = 11 THEN "취소요청"
                        WHEN od.order_state = 12 THEN "취소완료"
                        WHEN od.order_state = 20 THEN "반품요청"
                        WHEN od.order_state = 21 THEN "반품승인"
                        WHEN od.order_state = 22 THEN "반품회수완료"
                        WHEN od.order_state = 23 THEN "반품확정"
                        WHEN od.order_state = 30 THEN "교환요청"
                        WHEN od.order_state = 31 THEN "교환승인"
                        WHEN od.order_state = 32 THEN "교환회수완료"
                        WHEN od.order_state = 33 THEN "교환확정"
                        WHEN od.order_state = 40 THEN "환불요청"
                        WHEN od.order_state = 41 THEN "환불완료"
                        else null
                    END as status`,
                ` (select distinct(pii.image_url)
                   from product_image pii 
                   where pii.image_id = pi.image_id
                   and pii.image_mode = 1) as pimg`,
            ])
                .innerJoin("order_main", "om", "om.order_id = od.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .innerJoin("product_to_class", "ptc", "ptc.product_id = p.product_id")
                .innerJoin("product_class", "pc", "ptc.product_class_id = pc.product_class_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .andWhere('om.member_id = :member_id', { member_id: member_id })
                .andWhere('od.order_state = 6')
                .execute();
            const review_config = await this
                .reviewSettingRepository
                .createQueryBuilder('rs')
                .select([
                `rs.class_mileage_normal as mileage_amount`,
                `rs.class_mileage_premium as mileage_amount_p`,
                `rs.is_acc_mileage_type as add_mileage_type`
            ]).execute();
            return {
                result: "success",
                data: {
                    reviewList: {
                        total: await review_count,
                        list: await review_data,
                        paging: {
                            first_page: 1,
                            prev_jump: 1,
                            prev_page: 1,
                            cur_page: 1,
                            next_page: 1,
                            next_jump: 1,
                            last_page: 1,
                            page_list: [
                                1
                            ],
                        },
                        per_page: 300
                    },
                    goodsList: goodsList,
                    config: review_config
                }
            };
        }
        catch (error) {
            common_1.Logger.error('my_page : ', error);
            throw error;
        }
    }
    async insertReview(member_id, data) {
        try {
            const over_yn = await this
                .orderDetailRepository
                .createQueryBuilder('od')
                .select([
                `case 
              when od.confirm_date is null then "X"
                when od.confirm_date is not null then 
                  case when datediff(now(),od.confirm_date) > 14
                   then "D"
                  else "O"
                  end
                end
              as over_value`
            ])
                .andWhere('od.order_detail_id = :oid', { oid: data.od_ix })
                .execute();
            switch (over_yn[0]['over_value']) {
                case "X":
                    throw "구매확정이 되지 않은 주문 건입니다. 리뷰를 작성할 수 없습니다.";
                    break;
                case "D":
                    throw "리뷰 작성 기한인 14일을 초과한 주문건입니다. 리뷰를 작성할 수 없습니다.";
                    break;
            }
            const review_config = await this
                .reviewSettingRepository
                .createQueryBuilder('rs')
                .select([
                `rs.class_mileage_normal as mileage_amount`,
                `rs.class_mileage_premium as mileage_amount_p`,
                `rs.is_acc_mileage_type as add_mileage_type`
            ])
                .execute();
            if (data.bbs_ix == "") {
                const review_result = await this.reviewRepository.save({
                    order_etail_id: await this.orderDetailRepository.findOne({ order_detail_id: Number(data.od_ix) }),
                    product_option_id: await this.productOptionRepository.findOne({ product_option_id: data.option_id }),
                    review_content: data.bbs_contents,
                    review_title: data.bbs_contents,
                    admin_name: data.petName,
                    admin_puppy_name: data.petName,
                    admin_puppy_age: data.petBirthdate,
                    admin_puppy_weight: data.petWeight,
                    is_admin: false,
                    is_open: true,
                    review_star_point: Number(data.valuation_goods),
                    review_type: data.bbsFile.length > 0 ? "포토 리뷰" : "상품 리뷰"
                });
                if (data.bbsFile.length > 0) {
                    for (let i of data.bbsFile) {
                        await this.reviewImageRepository.createQueryBuilder().update({ review_image_id: i }).set({
                            review_id: await this.reviewRepository.findOne({ review_id: review_result.review_id })
                        }).execute();
                    }
                }
                const last_mileage = (await this.memberMileageRepository
                    .createQueryBuilder('mm')
                    .select([`mileage as mileage`])
                    .andWhere('mm.member_id= :mid', { mid: member_id })
                    .execute())[0]['mileage'];
                await this.memberMileageRepository.createQueryBuilder().update().set({
                    mileage: data.bbsFile.length > 0 ? Number(last_mileage) + review_config[0].mileage_amount_p : Number(last_mileage) + review_config[0].mileage_amount
                }).where('member_id= :mid', { mid: member_id }).execute();
                await this.memberMileageLogRepository.createQueryBuilder().insert().values({
                    member: await this.memberRepository.findOne({ member_id: member_id }),
                    create_date: () => 'NOW()',
                    mileage_payment_use_state: true,
                    mileage_payment: data.bbsFile.length > 0 ? review_config[0].mileage_amount_p : review_config[0].mileage_amount,
                    mileage_description: data.bbsFile.length > 0 ? "포토 리뷰 적립" : "리뷰 적립",
                    order_detail_id: data.od_ix
                }).execute();
            }
            else {
                await this.reviewRepository.update({ review_id: data.bbs_ix }, {
                    order_etail_id: await this.orderDetailRepository.findOne({ order_detail_id: Number(data.od_ix) }),
                    product_option_id: await this.productOptionRepository.findOne({ product_option_id: data.option_id }),
                    review_content: data.bbs_contents,
                    review_title: data.bbs_contents,
                    create_date: () => 'NOW()',
                    admin_name: data.petName,
                    admin_puppy_name: data.petName,
                    admin_puppy_age: data.petBirthdate,
                    admin_puppy_weight: data.petWeight,
                    is_admin: false,
                    is_open: true,
                    review_star_point: Number(data.valuation_goods),
                    review_type: data.bbsFile.length > 0 ? "포토 리뷰" : "상품 리뷰"
                });
                if (data.bbsFile.length > 0) {
                    for (let i of data.bbsFile) {
                        await this.reviewImageRepository.createQueryBuilder().update({ review_image_id: i }).set({
                            review_id: await this.reviewRepository.findOne({ review_id: data.bbs_ix })
                        }).execute();
                    }
                }
            }
            return {
                data: {
                    result: "success",
                    data: "success"
                }
            };
        }
        catch (error) {
            common_1.Logger.error('my_page : ', error);
            throw error;
        }
    }
    async updateOrderStatus() {
        try {
        }
        catch (error) {
            common_1.Logger.error('my_page : ', error);
            throw error;
        }
    }
    async myPoints(member_id, data) {
        try {
            const mileage_data = await this
                .memberMileageLogRepository
                .query(`
              SELECT 
              (select sum(mml2.mileage_payment)
               from member_mileage_log as mml2
               where mml2.member_id = 3
               and mml2.mileage_payment_use_state = 1) as myMileAmount,
               (select sum(mml2.mileage_payment)
                from member_mileage_log as mml2
                where mml2.member_id = 3
                and mml2.mileage_payment_use_state = 2) as usedMileAmount,
               (select mm.mileage
                from member_mileage mm
                where mm.member_id = 3) as availMileAmount,
               (select sum(od.estimated_mileage)
                from order_detail od
                 left join review r
                 on r.order_detail_id = od.order_detail_id
                 where r.review_id is null) as myMileageWaitAmount
                FROM dual
              `);
            const mileage_log = await this
                .memberMileageLogRepository
                .createQueryBuilder('mml')
                .select([
                `CASE 
               WHEN mileage_payment_use_state = 1 THEN concat('+',mml.mileage_payment)
               WHEN mileage_payment_use_state = 0 THEN concat('-',mml.mileage_payment)
               END as total_mileage`,
                `mml.mileage_description as message`,
                `mml.create_date as date`,
                `mml.mileage_payment_use_state as state`,
                `CASE 
               WHEN mileage_payment_use_state = 1 THEN '적립'
               WHEN mileage_payment_use_state = 0 THEN '사용'
               END as state_desc`,
                `'' as mileage_desc`,
                `mml.mileage_description as gname`,
                `'' as log_type`,
                `'' as expire_date`
            ])
                .andWhere('mml.member_id = :mid', { mid: member_id })
                .execute();
            return {
                data: {
                    result: "success",
                    data: {
                        myPointInfo: {
                            myMileAmount: mileage_data[0].myMileAmount === null ? "0" : String(mileage_data[0].myMileAmount),
                            myMileageWaitAmount: mileage_data[0].myMileageWaitAmount === null ? "0" : String(mileage_data[0].myMileageWaitAmount),
                            availMileAmount: mileage_data[0].availMileAmount === null ? "0" : String(mileage_data[0].availMileAmount),
                            usedMileAmount: mileage_data[0].usedMileAmount === null ? "0" : String(mileage_data[0].usedMileAmount)
                        },
                        myPointList: {
                            list: mileage_log
                        }
                    }
                }
            };
        }
        catch (error) {
            common_1.Logger.error('my_page : ', error);
            throw error;
        }
    }
    async myCoupons(memberId) {
        try {
            const coupon = await this.couponRepository
                .createQueryBuilder('c')
                .select([
                `c.coupon_id as regist_ix`,
                `"C" as cupon_div`,
                `c.coupon_name as publish_name`,
                `CASE 
            WHEN c.discount_type = 0 THEN "0"
            WHEN c.discount_type = 1 THEN c.discount_text
            END
            as cupon_sale_value`,
                `CASE 
            WHEN c.minimum_purchase_amount = 0 THEN "없음"
            WHEN c.minimum_purchase_amount = 1 THEN c.minimum_purchase_amount_text
            END
            as publish_condition_price`,
                `CASE 
            WHEN c.discount_type = 0 THEN "0"
            WHEN c.discount_type = 1 THEN 
              CASE
                WHEN c.digit_number = 0 THEN c.discount_text
                WHEN c.digit_number = 1 THEN 10 * c.discount_text
                WHEN c.digit_number = 2 THEN 100 * c.discount_text
              END
            END
            as cupon_sale_type_percent`,
                `CASE
          WHEN c.coupon_date_range = 0 THEN c.use_range_start
          WHEN c.coupon_date_range = 1 THEN c.create_date
           WHEN c.coupon_date_range = 2 THEN ctm.create_date
           WHEN c.coupon_date_range = 3 THEN "제한 없음"
          END 
          as regist_start`,
                `CASE
          WHEN c.coupon_date_range = 0 THEN c.use_range_end
          WHEN c.coupon_date_range = 1 THEN 
           CASE
              WHEN c.use_range_enum = 0 THEN DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text DAY)
              WHEN c.use_range_enum = 1 THEN  DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text MONTH)
              WHEN c.use_range_enum = 2 THEN  DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text YEAR)
             END
           WHEN c.coupon_date_range = 2 THEN 
           CASE
              WHEN c.use_range_enum = 0 THEN DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text DAY)
              WHEN c.use_range_enum = 1 THEN  DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text MONTH)
              WHEN c.use_range_enum = 2 THEN  DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text YEAR)
             END
           WHEN c.coupon_date_range = 3 THEN "제한 없음"
          END as regist_end`,
                `CASE
          WHEN c.coupon_date_range = 0 THEN 
          IF(datediff(c.use_range_end,now()) > 0,
          concat(datediff(c.use_range_end,now())," 일전" ),
          "기간만료"
          )
          WHEN c.coupon_date_range = 1 THEN  
           CASE
              WHEN c.use_range_enum = 0 THEN 
              IF(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text DAY),now()) > 0,
              concat(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text DAY),now())," 일전" ),
              "기간만료"
              )
              WHEN c.use_range_enum = 1 THEN 
              IF(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text MONTH),now()) > 0 ,
              concat(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text MONTH),now())," 일전" ),
              "기간만료"
              )
              WHEN c.use_range_enum = 2 THEN 
              IF(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text YEAR),now()) > 0,
              concat(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text YEAR),now())," 일전" ),
              "기간만료"
              )
             END
           WHEN c.coupon_date_range = 2 THEN
           CASE
              WHEN c.use_range_enum = 0 THEN 
              IF(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text DAY),now()) >0 ,
              concat(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text DAY),now())," 일전" ),
              "기간만료"
              )
              WHEN c.use_range_enum = 1 THEN 
              IF(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text MONTH),now()) >0 ,
              concat(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text MONTH),now())," 일전" ),
              "기간만료"
              )
              WHEN c.use_range_enum = 2 THEN  
               IF(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text YEAR),now()) >0 ,
              concat(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text YEAR),now())," 일전" ),
              "기간만료"
              )
             END
           WHEN c.coupon_date_range = 3 THEN "제한 없음"
          END as dDay`
            ])
                .innerJoin('coupon_to_member', 'ctm', 'ctm.coupon_id = c.coupon_id')
                .andWhere('ctm.member_id = :id', { id: memberId })
                .execute();
            const banners = await this
                .bannerRepository
                .createQueryBuilder('b')
                .select([
                `bit.link_url as bd_link`,
                `bi.banner_image_url as imgSrc`
            ])
                .innerJoin('banner_item', 'bit', 'b.banner_id = bit.banner_id')
                .leftJoin('banner_image', 'bi', 'bi.banner_image_id = bit.banner_image_id')
                .andWhere('b.banner_point = 2')
                .andWhere('b.is_show = 1')
                .execute();
            return {
                data: {
                    result: "success",
                    data: {
                        coupons: coupon,
                        banner: banners
                    }
                }
            };
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async insertCoupon(member_id, data) {
        try {
            const coupon_list = await this.offlineCouponInstanceRepository
                .createQueryBuilder('of')
                .andWhere('of.instance_serial = :serial', { serial: data.coupon_num })
                .getCount();
            if (coupon_list > 0) {
                await this.offlineCouponInstanceRepository.update({ instance_serial: data.coupon_num }, { member: await this.memberRepository.findOne({ member_id }) });
                return {
                    data: {
                        result: "success"
                    }
                };
            }
            return {
                data: {
                    result: 'success',
                    data: 'fail'
                }
            };
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async imageUpload(images) {
        try {
            if (images.length === 1) {
                const data = new ReviewImage_entity_1.ReviewImageEntity();
                data.image_url = images[0].location;
                return {
                    image_id: (await this.reviewImageRepository.save(data)).review_image_id,
                    image_url: images[0].location
                };
            }
            const image_list = [];
            for (let i in images) {
                const image = new ReviewImage_entity_1.ReviewImageEntity();
                image.image_url = images[i].location;
                image_list.push({
                    image_id: (await this.reviewImageRepository.save(image)).review_image_id,
                    image_url: images[i].location
                });
            }
            return image_list;
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
            throw error;
        }
    }
};
MyPageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ReviewImage_repository_1.ReviewImageRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(Coupon_repository_1.CouponRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(CouponToProduct_repository_1.CouponToProductRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(OfflineCouponInstance_repository_1.OfflineCouponInstanceRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(OrderMain_repository_1.OrderMainRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(OrderDetail_repository_1.OrderDetailRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(Review_repository_1.ReviewRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(ReviewSetting_repository_1.ReviewSettingRepository)),
    __param(9, (0, typeorm_1.InjectRepository)(MemberPet_repository_1.MemberPetRepository)),
    __param(10, (0, typeorm_1.InjectRepository)(ProductOption_repository_1.ProductOptionRepository)),
    __param(11, (0, typeorm_1.InjectRepository)(MemberMileage_repository_1.MemberMileageRepository)),
    __param(12, (0, typeorm_1.InjectRepository)(MemberMileageLog_repository_1.MemberMileageLogRepository)),
    __param(13, (0, typeorm_1.InjectRepository)(Banner_repository_1.BannerRepository)),
    __metadata("design:paramtypes", [ReviewImage_repository_1.ReviewImageRepository,
        Coupon_repository_1.CouponRepository,
        CouponToProduct_repository_1.CouponToProductRepository,
        OfflineCouponInstance_repository_1.OfflineCouponInstanceRepository,
        Member_repository_1.MemberRepository,
        OrderMain_repository_1.OrderMainRepository,
        OrderDetail_repository_1.OrderDetailRepository,
        Review_repository_1.ReviewRepository,
        ReviewSetting_repository_1.ReviewSettingRepository,
        MemberPet_repository_1.MemberPetRepository,
        ProductOption_repository_1.ProductOptionRepository,
        MemberMileage_repository_1.MemberMileageRepository,
        MemberMileageLog_repository_1.MemberMileageLogRepository,
        Banner_repository_1.BannerRepository])
], MyPageService);
exports.MyPageService = MyPageService;
//# sourceMappingURL=my-page.service.js.map