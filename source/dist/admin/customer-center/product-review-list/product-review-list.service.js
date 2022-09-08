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
exports.ProductReviewListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Product_repository_1 = require("../../../repository/product/Product.repository");
const ProductToClass_repository_1 = require("../../../repository/product/ProductToClass.repository");
const ProductOption_repository_1 = require("../../../repository/product/ProductOption.repository");
const ProductOptionDetail_repository_1 = require("../../../repository/product/ProductOptionDetail.repository");
const ProductIconToProduct_repository_1 = require("../../../repository/product/ProductIconToProduct.repository");
const ProductIcon_repository_1 = require("../../../repository/product/ProductIcon.repository");
const ProductRelated_repository_1 = require("../../../repository/product/ProductRelated.repository");
const ProductImage_repository_1 = require("../../../repository/product/ProductImage.repository");
const ProductBrand_repository_1 = require("../../../repository/product/ProductBrand.repository");
const ProductSearchKeyword_repository_1 = require("../../../repository/product/ProductSearchKeyword.repository");
const ProductClass_repository_1 = require("../../../repository/product/ProductClass.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const Review_repository_1 = require("../../../repository/review/Review.repository");
const ReviewSetting_repository_1 = require("../../../repository/review/ReviewSetting.repository");
const ReviewSettingToMemberGroup_repository_1 = require("../../../repository/review/ReviewSettingToMemberGroup.repository");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const ReviewComment_repository_1 = require("../../../repository/review/ReviewComment.repository");
const ReviewLike_repository_1 = require("../../../repository/review/ReviewLike.repository");
const ReviewImage_repository_1 = require("../../../repository/review/ReviewImage.repository");
const ReviewImage_entity_1 = require("../../../entity/review/ReviewImage.entity");
const Review_entity_1 = require("../../../entity/review/Review.entity");
const ReviewComment_entity_1 = require("../../../entity/review/ReviewComment.entity");
const respones_1 = require("../../../common/respones");
let ProductReviewListService = class ProductReviewListService {
    constructor(reviewRepository, reviewCommentRepository, reviewLikeRepository, reviewImageRepository, reviewSettingRepository, reviewSettingToMemberGroupRepository, memberRepository, memberGroupRepository, productRepository, productToClassRepository, productOptionRepository, productOptionDetailRepository, productIconToProductRepository, productIconRepository, productRelatedRepository, productImageRepository, productBrandRepository, productSearchKeywordRepository, productClassRepository) {
        this.reviewRepository = reviewRepository;
        this.reviewCommentRepository = reviewCommentRepository;
        this.reviewLikeRepository = reviewLikeRepository;
        this.reviewImageRepository = reviewImageRepository;
        this.reviewSettingRepository = reviewSettingRepository;
        this.reviewSettingToMemberGroupRepository = reviewSettingToMemberGroupRepository;
        this.memberRepository = memberRepository;
        this.memberGroupRepository = memberGroupRepository;
        this.productRepository = productRepository;
        this.productToClassRepository = productToClassRepository;
        this.productOptionRepository = productOptionRepository;
        this.productOptionDetailRepository = productOptionDetailRepository;
        this.productIconToProductRepository = productIconToProductRepository;
        this.productIconRepository = productIconRepository;
        this.productRelatedRepository = productRelatedRepository;
        this.productImageRepository = productImageRepository;
        this.productBrandRepository = productBrandRepository;
        this.productSearchKeywordRepository = productSearchKeywordRepository;
        this.productClassRepository = productClassRepository;
    }
    async findAll(page, pageSize) {
        try {
            const review = await this.reviewRepository
                .createQueryBuilder('review')
                .leftJoin('member', 'm', 'm.member_id = review.member_id')
                .innerJoin('product_option', 'po', 'po.product_option_id = review.product_option_id')
                .innerJoin('product', 'p', 'p.product_id = po.product_id')
                .leftJoin('product_image', 'pi', 'pi.product_id = p.product_id AND pi.image_mode = 0');
            const totalData = (await review.select('COUNT(review.review_id) AS `cnt`').execute())[0]['cnt'];
            review.select([
                `review.review_id as review_id`,
                `review.review_type as review_type`,
                `p.product_id as product_id`,
                `po.product_option_id as product_option_id`,
                `pi.image_id as product_image_id`,
                `pi.image_url as product_image_url`,
                `CONCAT(p.product_name, ': ', 
          (select group_concat( pod.value separator '|' ) as product_name 
           from product_option_detail as pod 
           where pod.option_id = po.product_option_id)) as product_name`,
                `review.review_star_point as star_point`,
                `review.review_title as title`,
                `review.review_content as review_content`,
                `(SELECT ri.image_url FROM review_image as ri 
        WHERE ri.is_main = true AND ri.review_id = review.review_id) as review_image`,
                `IF(review.is_write_admin_comment, '답변완료' ,'답변대기') as is_admin_comment`,
                `CASE
          WHEN is_admin=1 THEN '0000'
          WHEN is_admin=0 THEN m.member_id
          END as member_id`,
                `CASE
          WHEN is_admin=1 THEN review.admin_name
          WHEN is_admin=0 THEN m.name
          END as writer`,
                `review.is_open as is_open`,
                `review.create_date as create_date`,
            ]);
            return {
                data: await review
                    .orderBy('review.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
            throw error;
        }
    }
    async find(find, page, pageSize) {
        try {
            const review = await this.reviewRepository
                .createQueryBuilder('review')
                .leftJoin('member', 'm', 'm.member_id = review.member_id')
                .innerJoin('product_option', 'po', 'po.product_option_id = review.product_option_id')
                .innerJoin('product', 'p', 'p.product_id = po.product_id')
                .leftJoin('product_image', 'pi', 'pi.product_id = p.product_id AND pi.image_mode = 0');
            switch (find.review_type) {
                case "1":
                    review.andWhere('review.review_type = "일반 리뷰"');
                    break;
                case "2":
                    review.andWhere('review.review_type = "프리미엄 리뷰"');
                    break;
                case "3":
                    review.andWhere('review.review_type = "관리자 작성 리뷰"');
            }
            switch (find.is_admin_comment) {
                case "1":
                    review.andWhere('review.is_write_admin_comment = 1');
                    break;
                case "2":
                    review.andWhere('review.is_write_admin_comment = 0');
                    break;
            }
            if (find.write_date_start !== "" && find.write_date_end !== "") {
                review.andWhere('review.create_date BETWEEN :start AND :end', {
                    start: find.write_date_start,
                    end: find.write_date_end
                });
            }
            if (find.star_point_start !== "" && find.write_date_end !== "") {
                review.andWhere('review.review_star_point BETWEEN :point_start AND :point_end', {
                    point_start: Number(find.star_point_start),
                    point_end: Number(find.start_point_end)
                });
            }
            switch (find.find_type) {
                case "0":
                    review.andWhere('p.product_name like :text', { text: `%${find.find_text}%` });
                    break;
                case "1":
                    review.andWhere('IF(is_admin, review.admin_name, m.name) like :text', { text: `%${find.find_text}%` });
                    break;
                case "2":
                    review.andWhere('review.review_content like :text', { text: `%${find.find_text}%` });
                    break;
            }
            const totalData = (await review.select('COUNT(review.review_id) AS `cnt`').execute())[0]['cnt'];
            review.select([
                `review.review_id as review_id`,
                `review.review_type as review_type`,
                `p.product_id as product_id`,
                `po.product_option_id as product_option_id`,
                `pi.image_id as product_image_id`,
                `pi.image_url as product_image_url`,
                `CONCAT(p.product_name, ': ', 
          (select group_concat( pod.value separator '|' ) as product_name 
           from product_option_detail as pod 
           where pod.option_id = po.product_option_id)) as product_name`,
                `review.review_star_point as star_point`,
                `review.review_title as title`,
                `review.review_content as review_content`,
                `(SELECT ri.image_url FROM review_image as ri 
        WHERE ri.is_main = true AND ri.review_id = review.review_id) as review_image`,
                `IF(review.is_write_admin_comment, '답변완료' ,'답변대기') as is_admin_comment`,
                `CASE
          WHEN is_admin=1 THEN '0000'
          WHEN is_admin=0 THEN m.member_id
          END as member_id`,
                `CASE
          WHEN is_admin=1 THEN review.admin_name
          WHEN is_admin=0 THEN m.name
          END as writer`,
                `review.is_open as is_open`,
                `review.create_date as create_date`,
            ]);
            return {
                data: await review
                    .orderBy('review.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
            throw error;
        }
    }
    async findId(id) {
        try {
            const review = await this.reviewRepository
                .createQueryBuilder('review')
                .leftJoin('member', 'm', 'm.member_id = review.member_id')
                .innerJoin('product_option', 'po', 'po.product_option_id = review.product_option_id')
                .innerJoin('product', 'p', 'p.product_id = po.product_id')
                .select([
                `review.review_id as review_id`,
                `review.review_type as review_type`,
                `review.review_title as title`,
                `review.review_star_point as star_point`,
                `p.product_id as product_id`,
                `po.product_option_id as product_option_id`,
                `CONCAT(p.product_name, ': ', 
          (select group_concat( pod.value separator '|' ) as product_name 
           from product_option_detail as pod 
           where pod.option_id = po.product_option_id)) as product_name`,
                `CASE
          WHEN is_admin=1 THEN '0000'
          WHEN is_admin=0 THEN m.member_id
          END as member_id`,
                `CASE
          WHEN is_admin=1 THEN review.admin_name
          WHEN is_admin=0 THEN m.name
          END as writer`,
                `review.is_open as is_open`,
                `review.create_date as create_date`,
                `review.review_content as review_content`,
                `(SELECT rc.review_comment_id FROM review_comment as rc
          WHERE rc.review_id = review.review_id AND rc.is_admin = true) as admin_comment_id`,
                `'피리부는강아지' as admin_writer`,
                `(SELECT rc.comment_content FROM review_comment as rc
          WHERE rc.review_id = review.review_id AND rc.is_admin = true) as admin_comment`
            ])
                .andWhere('review.review_id = :id', { id });
            return (await review.execute())[0];
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
            throw error;
        }
    }
    async createUser(data) {
        try {
            const setting = (await this.reviewSettingRepository.find())[0];
            const member = await this.memberRepository
                .createQueryBuilder('member')
                .innerJoin('member_group', 'mg', 'mg.group_id = member.member_group_id')
                .select([
                `member.member_id as member_id`,
                `mg.group_name as group_name`
            ])
                .andWhere('member.member_code = :code', { code: data.member_code });
            const memberData = (await member.execute())[0];
            const createReview = new Review_entity_1.ReviewEntity();
            createReview.review_star_point = data.review_star_point;
            createReview.review_title = data.review_title;
            createReview.review_content = data.review_content;
            createReview.is_open = data.is_open;
            createReview.is_admin = false;
            createReview.member_id = await this.memberRepository
                .findOne({ member_code: data.member_code });
            createReview.product_option_id = await this.productOptionRepository
                .findOne({ product_option_id: data.product_option_id });
            switch (setting.is_acc_mileage_type) {
                case 0:
                    createReview.review_type = "일괄 리뷰";
                    break;
                case 1:
                    if (data.image_list.length > 0) {
                        createReview.review_type = "프리미엄 리뷰";
                    }
                    else {
                        createReview.review_type = "일반 리뷰";
                    }
                    break;
                case 2:
                    createReview.review_type = memberData.group_name;
                    break;
                default:
                    createReview.review_type = "상품 리뷰";
                    break;
            }
            const reviewSave = await this.reviewRepository.save(createReview);
            for (let i in data.image_list) {
                if (i === "0") {
                    await this.reviewImageRepository.update({ review_image_id: data.image_list[i] }, { is_main: true, review_id: reviewSave });
                }
                else {
                    await this.reviewImageRepository.update({ review_image_id: data.image_list[i] }, { review_id: reviewSave });
                }
            }
            return reviewSave;
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
            throw error;
        }
    }
    async createAdmin(data) {
        try {
            const createReview = new Review_entity_1.ReviewEntity();
            createReview.review_type = "관리자 작성 리뷰";
            createReview.is_admin = true;
            createReview.review_star_point = data.review_star_point;
            createReview.review_title = data.review_title;
            createReview.review_content = data.review_content;
            createReview.is_open = data.is_open;
            createReview.admin_name = data.admin_name;
            createReview.admin_puppy_name = data.admin_puppy_name;
            createReview.admin_puppy_age = data.admin_puppy_age;
            createReview.admin_puppy_weight = data.admin_puppy_weight;
            createReview.product_option_id = await this.productOptionRepository
                .findOne({ product_option_id: data.product_option_id });
            const reviewData = await this.reviewRepository.save(createReview);
            for (let i in data.image_list) {
                if (i === "0") {
                    await this.reviewImageRepository.update({ review_image_id: data.image_list[i] }, { is_main: true, review_id: reviewData });
                }
                else {
                    await this.reviewImageRepository.update({ review_image_id: data.image_list[i] }, { review_id: reviewData });
                }
            }
            return reviewData;
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
            throw error;
        }
    }
    async createComment(id, data) {
        try {
            const find = await this.reviewCommentRepository
                .createQueryBuilder('rc')
                .andWhere('rc.review_id = :id', { id })
                .andWhere('rc.is_admin = 1');
            const count = await find.getCount();
            if (count > 0) {
                throw '중복 된 답변이 이미 있습니다.';
            }
            const comment = new ReviewComment_entity_1.ReviewCommentEntity();
            comment.is_admin = true;
            comment.comment_content = data.comment_content;
            comment.review_id = await this.reviewRepository.findOne({ review_id: id });
            await this.reviewRepository.update({ review_id: id }, { is_write_admin_comment: true });
            return await this.reviewCommentRepository.save(comment);
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
            throw error;
        }
    }
    async updateOpen(id, data) {
        try {
            return await this.reviewRepository.update({ review_id: id }, { is_open: data });
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
            throw error;
        }
    }
    async updateReview(id, data) {
        try {
            const reviewUpdate = await this.reviewRepository.update({ review_id: id }, {
                review_star_point: data.review_star_point,
                review_title: data.review_title,
                review_content: data.review_content,
                is_open: data.is_open,
                update_date: (() => 'NOW()')
            });
            const find = await this.reviewRepository.findOne({ review_id: id });
            await this.reviewImageRepository.update({ review_id: find }, { review_id: null });
            for (let i in data.image_list) {
                if (i === "0") {
                    await this.reviewImageRepository.update({ review_image_id: data.image_list[i] }, { is_main: true, review_id: find });
                }
                else {
                    await this.reviewImageRepository.update({ review_image_id: data.image_list[i] }, { review_id: find });
                }
            }
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
            throw error;
        }
    }
    async updateComment(id, data) {
        try {
            await this.reviewRepository.update({ review_id: id }, { is_write_admin_comment: true });
            return await this.reviewCommentRepository.update({ review_comment_id: id }, { comment_content: data.comment_content });
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await this.reviewLikeRepository
                .query(`DELETE FROM review_like WHERE review_id = ${id}`);
            await this.reviewImageRepository
                .query(`DELETE FROM review_image WHERE review_id = ${id}`);
            await this.reviewCommentRepository
                .query(`DELETE FROM review_comment WHERE review_id = ${id}`);
            await this.reviewRepository
                .query(`DELETE FROM review WHERE review_id = ${id}`);
            return;
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
            throw error;
        }
    }
    async deleteComment(id) {
        try {
            const comment = await this.reviewCommentRepository
                .createQueryBuilder('rc');
            return await this.reviewCommentRepository.delete({ review_comment_id: id });
        }
        catch (error) {
            common_1.Logger.error('admin/product/review : ' + error);
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
ProductReviewListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Review_repository_1.ReviewRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(ReviewComment_repository_1.ReviewCommentRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(ReviewLike_repository_1.ReviewLikeRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(ReviewImage_repository_1.ReviewImageRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(ReviewSetting_repository_1.ReviewSettingRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(ReviewSettingToMemberGroup_repository_1.ReviewSettingToMemberGroupRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(MemberGroup_repository_1.MemberGroupRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __param(9, (0, typeorm_1.InjectRepository)(ProductToClass_repository_1.ProductToClassRepository)),
    __param(10, (0, typeorm_1.InjectRepository)(ProductOption_repository_1.ProductOptionRepository)),
    __param(11, (0, typeorm_1.InjectRepository)(ProductOptionDetail_repository_1.ProductOptionDetailRepository)),
    __param(12, (0, typeorm_1.InjectRepository)(ProductIconToProduct_repository_1.ProductIconToProductRepository)),
    __param(13, (0, typeorm_1.InjectRepository)(ProductIcon_repository_1.ProductIconRepository)),
    __param(14, (0, typeorm_1.InjectRepository)(ProductRelated_repository_1.ProductRelatedRepository)),
    __param(15, (0, typeorm_1.InjectRepository)(ProductImage_repository_1.ProductImageRepository)),
    __param(16, (0, typeorm_1.InjectRepository)(ProductBrand_repository_1.ProductBrandRepository)),
    __param(17, (0, typeorm_1.InjectRepository)(ProductSearchKeyword_repository_1.ProductSearchKeywordRepository)),
    __param(18, (0, typeorm_1.InjectRepository)(ProductClass_repository_1.ProductClassRepository)),
    __metadata("design:paramtypes", [Review_repository_1.ReviewRepository,
        ReviewComment_repository_1.ReviewCommentRepository,
        ReviewLike_repository_1.ReviewLikeRepository,
        ReviewImage_repository_1.ReviewImageRepository,
        ReviewSetting_repository_1.ReviewSettingRepository,
        ReviewSettingToMemberGroup_repository_1.ReviewSettingToMemberGroupRepository,
        Member_repository_1.MemberRepository,
        MemberGroup_repository_1.MemberGroupRepository,
        Product_repository_1.ProductRepository,
        ProductToClass_repository_1.ProductToClassRepository,
        ProductOption_repository_1.ProductOptionRepository,
        ProductOptionDetail_repository_1.ProductOptionDetailRepository,
        ProductIconToProduct_repository_1.ProductIconToProductRepository,
        ProductIcon_repository_1.ProductIconRepository,
        ProductRelated_repository_1.ProductRelatedRepository,
        ProductImage_repository_1.ProductImageRepository,
        ProductBrand_repository_1.ProductBrandRepository,
        ProductSearchKeyword_repository_1.ProductSearchKeywordRepository,
        ProductClass_repository_1.ProductClassRepository])
], ProductReviewListService);
exports.ProductReviewListService = ProductReviewListService;
//# sourceMappingURL=product-review-list.service.js.map