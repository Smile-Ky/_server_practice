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
exports.OrderManagerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const OrderDetail_repository_1 = require("../../../repository/order/OrderDetail.repository");
const OrderMain_repository_1 = require("../../../repository/order/OrderMain.repository");
const OrderPayment_repository_1 = require("../../../repository/order/OrderPayment.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const OrderRefund_repository_1 = require("../../../repository/order/OrderRefund.repository");
const OrderDetail_Entity_1 = require("../../../entity/order/OrderDetail.Entity");
const MemberAddress_repository_1 = require("../../../repository/member/MemberAddress.repository");
const ProductOption_repository_1 = require("../../../repository/product/ProductOption.repository");
const ProductOptionDetail_repository_1 = require("../../../repository/product/ProductOptionDetail.repository");
const ProductBrand_repository_1 = require("../../../repository/product/ProductBrand.repository");
const DeliveryCompany_repository_1 = require("../../../repository/delivery/DeliveryCompany.repository");
const OrderHistory_repository_1 = require("../../../repository/order/OrderHistory.repository");
const OrderHistory_Entity_1 = require("../../../entity/order/OrderHistory.Entity");
let OrderManagerService = class OrderManagerService {
    constructor(orderDetailRepository, orderMainRepository, orderPaymentRepository, memberRepository, orderRefundRepository, memberAddressRepository, productOptionRepository, productOptionDetailRepository, productBrandRepository, deliveryCompanyRepository, orderHistoryRepository) {
        this.orderDetailRepository = orderDetailRepository;
        this.orderMainRepository = orderMainRepository;
        this.orderPaymentRepository = orderPaymentRepository;
        this.memberRepository = memberRepository;
        this.orderRefundRepository = orderRefundRepository;
        this.memberAddressRepository = memberAddressRepository;
        this.productOptionRepository = productOptionRepository;
        this.productOptionDetailRepository = productOptionDetailRepository;
        this.productBrandRepository = productBrandRepository;
        this.deliveryCompanyRepository = deliveryCompanyRepository;
        this.orderHistoryRepository = orderHistoryRepository;
    }
    async getSelectOrder(order_code) {
        try {
            const order_info = await this.orderDetailRepository.query(`select om.*, 
        m.name, 
        mg.group_name, 
        ma.address_number, 
        ma.address, 
        ma.address_detail,
        (select case when count(od1.order_state) > 0 then 'y' when count(od1.order_state) <= 0 then 'n' end
        from order_detail od1
        join order_main om1
        on om1.order_id = od1.order_id
        where om1.order_code = '${order_code}'
        and od1.order_state = 0
      ) as deposit_yn
                from order_main om
                join member m 
                on m.member_id  = om.member_id
                join member_address ma
                on m.member_id = ma.member_id
                join member_group mg
                on mg.group_id = m.member_group_id
                where om.order_code = '${order_code}'
                `);
            const item_info = await this.orderDetailRepository.query(`select 
          p.product_name as product_name,
          od.*,
          CASE 
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
          END as order_state,
          od.order_detail_id as order_detail_id,
          p.product_code as product_code,
          concat(pod.name," : ",pod.value) as option_name,
          pb.brand_name,
          po.product_sale_price as product_sale_price,
          od.product_sale_price as order_price,
          od.order_product_count,
          od.member_discount,
          od.planning_discount,
          od.coupon_discount,
          od.special_discount,
          om.order_use_mileage,
           ma.address_number,
           ma.address,
           ma.address_detail,
          (select c.coupon_name
          from coupon_to_member ctm
          join coupon c
          on ctm.coupon_id = c.coupon_id
          where ctm.order_detail_id = od.order_detail_id
         ) as coupon_name,
         (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as product_image_url                   
          from order_detail od
          join order_main om
          on od.order_id = om.order_id
          left join product_option po
          on po.product_option_id = od.product_option_id
          left join product p 
          on p.product_id = po.product_id         
          left join product_option_detail pod
          on od.product_option_detail_id = pod.product_option_detail_id
          left join product_brand pb
          on p.brand_id = pb.brand_id
          left join member_address ma
          on od.member_address = ma.address_id
          left join product_image pi
          on pi.product_id = p.product_id
          where om.order_code = '${order_code}'
          and od.order_state not in ('10','11','12','20','21','22','23','30','31','32','33','40','41')
         
          order by od.order_detail_id desc`);
            const claim_info = await this.orderDetailRepository.query(`select 
          p.product_name as product_name,
          od.*,
          CASE 
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
          END as order_state,
          od.order_detail_id as order_detail_id,
          p.product_code as product_code,
          concat(pod.name," : ",pod.value) as option_name,
          pb.brand_name,
          po.product_sale_price as product_sale_price,
          od.product_sale_price as order_price,
          od.order_product_count,
          od.member_discount,
          od.planning_discount,
          od.coupon_discount,
          od.special_discount,
          om.order_use_mileage,
          om.order_price ,
           ma.address_number,
           ma.address,
           ma.address_detail,
           (select c.coupon_name
          from coupon_to_member ctm
          join coupon c
          on ctm.coupon_id = c.coupon_id
          where ctm.order_detail_id = od.order_detail_id
         ) as coupon_name,
          (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as product_image_url       
         
          from order_detail od
          join order_main om
          on od.order_id = om.order_id
          left join product_option po
          on po.product_option_id = od.product_option_id
          left join product p 
          on p.product_id = po.product_id         
          left join product_option_detail pod
          on od.product_option_detail_id = pod.product_option_detail_id
          left join product_brand pb
          on p.brand_id = pb.brand_id
          left join member_address ma
          on od.member_address = ma.address_id
          left join product_image pi
          on pi.product_id = p.product_id
          where om.order_code = '${order_code}'
          and od.order_state in ('10','11','12','20','21','22','23','30','31','32','33','40','41')
         
          order by od.order_detail_id desc`);
            const exchange_info = await this.orderDetailRepository.query(`select 
          p.product_name as product_name,
          od.*,
          CASE 
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
          END as order_state,
          od.order_detail_id as order_detail_id,
          p.product_code as product_code,
          concat(pod.name," : ",pod.value) as option_name,
          pb.brand_name,
          po.product_sale_price as product_sale_price,
          od.product_sale_price as order_price,
          od.order_product_count,
          od.member_discount,
          od.planning_discount,
          od.coupon_discount,
          od.special_discount,
          om.order_use_mileage,
          om.order_price ,
           ma.address_number,
           ma.address,
           ma.address_detail,
           (select c.coupon_name
          from coupon_to_member ctm
          join coupon c
          on ctm.coupon_id = c.coupon_id
          where ctm.order_detail_id = od.order_detail_id
         ) as coupon_name,
          (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as product_image_url       
         
          from order_detail od
          join order_main om
          on od.order_id = om.order_id
          left join product_option po
          on po.product_option_id = od.product_option_id
          left join product p 
          on p.product_id = po.product_id         
          left join product_option_detail pod
          on od.product_option_detail_id = pod.product_option_detail_id
          left join product_brand pb
          on p.brand_id = pb.brand_id
          left join member_address ma
          on od.member_address = ma.address_id
          left join product_image pi
          on pi.product_id = p.product_id
          where om.order_code = '${order_code}'
          and od.order_state in ('30','31','32','33')
         
          order by od.order_detail_id desc`);
            const payment_list_info = await this.orderPaymentRepository.query(`select a.*
          from order_payment a
          join order_main b
          on a.order_id = b.order_id
          where b.order_code = '${order_code}'
          order by a.order_payment_id desc
          `);
            const payment_info = await this
                .orderMainRepository
                .createQueryBuilder("om")
                .select([
                `om.deposit_date as deposit_date`,
                `om.order_price as order_price`,
                `om.order_delivery as order_delivery_price`,
                `om.order_use_mileage as order_use_mileage`,
                `om.planning_discount as planning_discount `,
                `om.coupon_discount as coupon_discount`,
                `om.member_discount as member_discount`,
                `om.special_discount as special_discount`,
                `(om.planning_discount + om.coupon_discount + om.member_discount + om.special_discount) as total_discount`
            ])
                .andWhere("om.order_code = :orderCode", { orderCode: order_code })
                .execute();
            return {
                order_info: order_info[0],
                item_info,
                claim_info,
                payment_info: payment_info[0],
                payment_list_info,
                exchange_info
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/order/list ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async putOrderUserData(order_code, data) {
        try {
            await this.orderMainRepository.update({ order_code: order_code }, {
                order_email_address: data.order_email_address,
                order_user_phone: data.order_phone
            });
            return "변경이 완료되었습니다.";
        }
        catch (error) {
            common_1.Logger.log(`admin/group/manager ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async putStateChange(reqOrderStatusChangeDTO) {
        try {
            for (const it of reqOrderStatusChangeDTO.order_detail_id) {
                if (reqOrderStatusChangeDTO.order_status != "4") {
                    await this.orderDetailRepository.update({ order_detail_id: it }, {
                        order_state: reqOrderStatusChangeDTO.order_status
                    });
                }
                else {
                    await this.orderDetailRepository.update({ order_detail_id: it }, {
                        order_state: reqOrderStatusChangeDTO.order_status,
                        delivery_invoice_code: reqOrderStatusChangeDTO.delivery_invoice_code,
                        delivery_company_id: (await this.deliveryCompanyRepository.findOne({ delivery_company_code: reqOrderStatusChangeDTO.delivery_company_code })).delivery_company_id
                    });
                }
            }
            return reqOrderStatusChangeDTO.order_status;
        }
        catch (error) {
            common_1.Logger.log(`admin/group/manager ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async putStateChangeDeposit(req) {
        try {
            await this.orderDetailRepository
                .createQueryBuilder()
                .update(OrderDetail_Entity_1.OrderDetailEntity)
                .set({ order_state: "1" })
                .where("order_id = :val", { val: req.order_id })
                .execute();
            return "변경이 완료되었습니다.";
        }
        catch (error) {
            common_1.Logger.log(`admin/group/manager ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async postSeperateOrders(reqOrderSeparationDTO) {
        try {
            for (const i of reqOrderSeparationDTO) {
                const data = await this.orderDetailRepository.findOne({ order_detail_id: Number(i.order_detail_id) });
                if (data.order_product_count - Number(i.separation_value) > 0) {
                    await this.orderDetailRepository.update({ order_detail_id: data.order_detail_id }, {
                        order_product_count: data.order_product_count - i.separation_value,
                        product_sale_price: data.product_sale_price / data.order_product_count * (data.order_product_count - i.separation_value),
                        coupon_discount: data.coupon_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                        member_discount: data.member_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                        special_discount: data.special_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                        planning_discount: data.planning_discount / data.order_product_count * (data.order_product_count - i.separation_value)
                    });
                    data.order_detail_id = null;
                    data.product_sale_price = data.product_sale_price / data.order_product_count * i.separation_value;
                    data.coupon_discount = data.coupon_discount / data.order_product_count * i.separation_value;
                    data.member_discount = data.member_discount / data.order_product_count * i.separation_value;
                    data.special_discount = data.special_discount / data.order_product_count * i.separation_value;
                    data.planning_discount = data.planning_discount / data.order_product_count * i.separation_value;
                    data.order_main = await this.orderMainRepository.findOne({ order_id: Number(i.order_id) });
                    data.product_brand = await this.productBrandRepository.findOne({ brand_id: i.brand_id });
                    data.ProductOption = await this.productOptionRepository.findOne({ product_option_id: i.product_option_id });
                    data.ProductOptionDetail = await this.productOptionDetailRepository.findOne({ product_option_detail_id: i.product_option_detail_id });
                    data.order_product_count = i.separation_value;
                    await this.orderDetailRepository
                        .createQueryBuilder()
                        .insert()
                        .values(Object.assign({}, data))
                        .execute();
                }
            }
            return "성공";
        }
        catch (error) {
            common_1.Logger.log(`admin/group/manager ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findChangeRecord(orderId) {
        try {
            return await this.orderDetailRepository.query(`select a.order_history_id as order_history_id,
           CASE 
          WHEN a.changed_status = 0 THEN "입금예정"
          WHEN a.changed_status = 1 THEN "입금확인"
          WHEN a.changed_status = 2 THEN "배송준비중"
          WHEN a.changed_status = 3 THEN "배송지연"
          WHEN a.changed_status = 4 THEN "배송중"
          WHEN a.changed_status = 5 THEN "배송완료"
          WHEN a.changed_status = 6 THEN "구매확정"
          WHEN a.changed_status = 7 THEN "교환상품발송예정"
          WHEN a.changed_status = 10 THEN "입금전취소완료"
          WHEN a.changed_status = 11 THEN "취소요청"
          WHEN a.changed_status = 12 THEN "취소완료"
          WHEN a.changed_status = 20 THEN "반품요청"
          WHEN a.changed_status = 21 THEN "반품승인"
          WHEN a.changed_status = 22 THEN "반품회수완료"
          WHEN a.changed_status = 23 THEN "반품확정"
          WHEN a.changed_status = 30 THEN "교환요청"
          WHEN a.changed_status = 31 THEN "교환승인"
          WHEN a.changed_status = 32 THEN "교환회수완료"
          WHEN a.changed_status = 33 THEN "교환확정"
          WHEN a.changed_status = 40 THEN "환불요청"
          WHEN a.changed_status = 41 THEN "환불완료"
          else null 
          END as changed_status,
           a.changed_text as changed_text, 
           a.changed_user as changed_user,
           a.changed_date as changed_date,
           a.order_id as order_id,
           a.order_detail_id as order_detail_id
          from order_history a
          where a.order_id = '${orderId}'
          order by a.order_history_id desc`);
        }
        catch (error) {
            common_1.Logger.log(`/change/record/all/:orderId ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findChangeRecordByOrder(orderId, orderDetailId) {
        try {
            return await this.orderDetailRepository.query(`select a.order_history_id as order_history_id,
           CASE 
          WHEN a.changed_status = 0 THEN "입금예정"
          WHEN a.changed_status = 1 THEN "입금확인"
          WHEN a.changed_status = 2 THEN "배송준비중"
          WHEN a.changed_status = 3 THEN "배송지연"
          WHEN a.changed_status = 4 THEN "배송중"
          WHEN a.changed_status = 5 THEN "배송완료"
          WHEN a.changed_status = 6 THEN "구매확정"
          WHEN a.changed_status = 7 THEN "교환상품발송예정"
          WHEN a.changed_status = 10 THEN "입금전취소완료"
          WHEN a.changed_status = 11 THEN "취소요청"
          WHEN a.changed_status = 12 THEN "취소완료"
          WHEN a.changed_status = 20 THEN "반품요청"
          WHEN a.changed_status = 21 THEN "반품승인"
          WHEN a.changed_status = 22 THEN "반품회수완료"
          WHEN a.changed_status = 23 THEN "반품확정"
          WHEN a.changed_status = 30 THEN "교환요청"
          WHEN a.changed_status = 31 THEN "교환승인"
          WHEN a.changed_status = 32 THEN "교환회수완료"
          WHEN a.changed_status = 33 THEN "교환확정"
          WHEN a.changed_status = 40 THEN "환불요청"
          WHEN a.changed_status = 41 THEN "환불완료"
          else null 
          END as changed_status,
           a.changed_text as changed_text, 
           a.changed_user as changed_user,
           a.changed_date as changed_date,
           a.order_id as order_id,
           a.order_detail_id as order_detail_id
          from order_history a
          where a.order_id = '${orderId}'
          and a.order_detail_id = '${orderDetailId}'
          order by a.order_history_id desc`);
        }
        catch (error) {
            common_1.Logger.log(`/change/record/all/:orderId ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async postChangePageOn(reqOrderStatusChangePageDTO) {
        try {
            const odi = serializeArray(reqOrderStatusChangePageDTO.order_detail_id);
            const claim_infos = await this.orderDetailRepository.query(`select 
          p.product_name as product_name,
          od.*,
          CASE 
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
          END as order_state,
          od.order_detail_id as order_detail_id,
          p.product_code as product_code,
          concat(pod.name," : ",pod.value) as option_name,
          pb.brand_name,
          po.product_sale_price as product_sale_price,
          od.product_sale_price as order_price,
          od.order_product_count,
          od.member_discount,
          od.planning_discount,
          od.coupon_discount,
          od.special_discount,
          om.order_use_mileage,
          om.order_price ,
           ma.address_number,
           ma.address,
           ma.address_detail,
           (select c.coupon_name
          from coupon_to_member ctm
          join coupon c
          on ctm.coupon_id = c.coupon_id
          where ctm.order_detail_id = od.order_detail_id
         ) as coupon_name,
          (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as product_image_url       
         
          from order_detail od
          join order_main om
          on od.order_id = om.order_id
          left join product_option po
          on po.product_option_id = od.product_option_id
          left join product p 
          on p.product_id = po.product_id         
          left join product_option_detail pod
          on od.product_option_detail_id = pod.product_option_detail_id
          left join product_brand pb
          on p.brand_id = pb.brand_id
          left join member_address ma
          on od.member_address = ma.address_id
          left join product_image pi
          on pi.product_id = p.product_id
          where od.order_detail_id in ${odi}        
          order by od.order_detail_id desc`);
            switch (reqOrderStatusChangePageDTO.order_status) {
                case "11": {
                    const ref = await this.orderDetailRepository.query(`select sum(od.product_sale_price) as refund_price
          from order_detail od
          where 1=1
          and od.order_detail_id in  ${odi}`);
                    const return_delivery = await this.orderDetailRepository.query(`select 
            "" as return_delivery_name,
            "" as return_delivery_phone,
            "" as return_delivery_address_number,
            "" as return_delivery_address,
            "" as return_delivery_address_detail,
            "" as return_delivery_message
          from order_detail od
          where 1=1
          and od.order_detail_id in  ${odi}`);
                    const re_delivery = await this.orderDetailRepository.query(`select 
            "" as re_delivery_name,
            "" as re_delivery_phone,
            "" as re_delivery_address_number,
            "" as re_delivery_address,
            "" as re_delivery_address_detail,
            "" as re_delivery_message
          from order_detail od
          where 1=1
          and od.order_detail_id in  ${odi}`);
                    return {
                        claim_infos,
                        refund_price: ref[0].refund_price,
                        return_delivery_info: return_delivery[0],
                        re_delivery_info: re_delivery[0]
                    };
                }
                case "20": {
                    const ref = await this.orderDetailRepository.query(`select sum(od.product_sale_price) as refund_price
          from order_detail od
          where 1=1
          and od.order_detail_id in  ${odi}`);
                    const return_delivery = await this.orderDetailRepository.query(`select 
            od.recipient_name as return_delivery_name,
            od.recipient_phone as return_delivery_phone,
            od.recipient_address_number as return_delivery_address_number,
            od.recipient_address as return_delivery_address,
            od.recipient_address_detail as return_delivery_address_detail,
            od.delivery_message as return_delivery_message
          from order_detail od
          where 1=1
          and od.order_detail_id in  ${odi}`);
                    const re_delivery = await this.orderDetailRepository.query(`select 
            "" as re_delivery_name,
            "" as re_delivery_phone,
            "" as re_delivery_address_number,
            "" as re_delivery_address,
            "" as re_delivery_address_detail,
            "" as re_delivery_message
          from order_detail od
          where 1=1
          and od.order_detail_id in  ${odi}`);
                    return {
                        claim_infos,
                        refund_price: ref[0].refund_price,
                        return_delivery_info: return_delivery[0],
                        re_delivery_info: re_delivery[0]
                    };
                }
                case "30": {
                    const ref = await this.orderDetailRepository.query(`select sum(od.product_sale_price) as refund_price
          from order_detail od
          where 1=1
          and od.order_detail_id in  ${odi}`);
                    const return_delivery = await this.orderDetailRepository.query(`select 
            od.recipient_name as return_delivery_name,
            od.recipient_phone as return_delivery_phone,
            od.recipient_address_number as return_delivery_address_number,
            od.recipient_address as return_delivery_address,
            od.recipient_address_detail as return_delivery_address_detail,
            od.delivery_message as return_delivery_message
          from order_detail od
          where 1=1
          and od.order_detail_id in  ${odi}`);
                    const re_delivery = await this.orderDetailRepository.query(`select 
            od.recipient_name as re_delivery_name,
            od.recipient_phone as re_delivery_phone,
            od.recipient_address_number as re_delivery_address_number,
            od.recipient_address as re_delivery_address,
            od.recipient_address_detail as re_delivery_address_detail,
            od.delivery_message as re_delivery_message
          from order_detail od
          where 1=1
          and od.order_detail_id in  ${odi}`);
                    return {
                        claim_infos,
                        refund_price: ref[0].refund_price,
                        return_delivery_info: return_delivery[0],
                        re_delivery_info: re_delivery[0]
                    };
                }
            }
        }
        catch (error) {
            common_1.Logger.log(`/change/record/all/:orderId ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async postChangePageRun(reqOrderChangeFuncDTO) {
        try {
            let vx;
            common_1.Logger.error("req :::::::::::" + JSON.stringify(reqOrderChangeFuncDTO));
            switch (reqOrderChangeFuncDTO.order_changed_status) {
                case "11":
                case "12": {
                    for (const i of reqOrderChangeFuncDTO.order_detail) {
                        const data = await this.orderDetailRepository.findOne({ order_detail_id: Number(i.order_detail_id) });
                        if (data.order_product_count - Number(i.separation_value) > 0) {
                            await this.orderDetailRepository.update({ order_detail_id: data.order_detail_id }, {
                                order_product_count: data.order_product_count - i.separation_value,
                                product_sale_price: data.product_sale_price / data.order_product_count * (data.order_product_count - i.separation_value),
                                coupon_discount: data.coupon_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                                member_discount: data.member_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                                special_discount: data.special_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                                planning_discount: data.planning_discount / data.order_product_count * (data.order_product_count - i.separation_value)
                            });
                            data.order_detail_id = null;
                            data.product_sale_price = data.product_sale_price / data.order_product_count * i.separation_value;
                            data.coupon_discount = data.coupon_discount / data.order_product_count * i.separation_value;
                            data.member_discount = data.member_discount / data.order_product_count * i.separation_value;
                            data.special_discount = data.special_discount / data.order_product_count * i.separation_value;
                            data.planning_discount = data.planning_discount / data.order_product_count * i.separation_value;
                            data.order_main = await this.orderMainRepository.findOne({ order_id: Number(i.order_id) });
                            data.product_brand = await this.productBrandRepository.findOne({ brand_id: i.brand_id });
                            data.ProductOption = await this.productOptionRepository.findOne({ product_option_id: i.product_option_id });
                            data.ProductOptionDetail = await this.productOptionDetailRepository.findOne({ product_option_detail_id: i.product_option_detail_id });
                            data.order_product_count = i.separation_value;
                            data.order_state = reqOrderChangeFuncDTO.order_changed_status;
                            data.claim_method = "0";
                            data.claim_reason = "[" + reqOrderChangeFuncDTO.order_changed_reason + "]" + reqOrderChangeFuncDTO.order_detail_changed_reason;
                            const v = await this
                                .orderDetailRepository
                                .createQueryBuilder()
                                .insert()
                                .into(OrderDetail_Entity_1.OrderDetailEntity)
                                .values(Object.assign(Object.assign({}, data), { claim_date: () => "NOW()" })).execute();
                            await this.orderHistoryRepository
                                .createQueryBuilder()
                                .insert()
                                .values({
                                changed_date: () => "NOW()",
                                changed_text: "취소",
                                order_detail: await this.orderDetailRepository.findOne({ order_detail_id: v.raw.order_detail_id }),
                                order_main: data.order_main,
                                changed_user: "system",
                                changed_status: "취소"
                            }).execute();
                        }
                        else if (data.order_product_count - Number(i.separation_value) == 0) {
                            await this.orderDetailRepository.update({ order_detail_id: data.order_detail_id }, {
                                claim_method: "0",
                                claim_reason: "[" + reqOrderChangeFuncDTO.order_changed_reason + "]" + reqOrderChangeFuncDTO.order_detail_changed_reason,
                                order_state: reqOrderChangeFuncDTO.order_changed_status
                            });
                            await this.orderHistoryRepository
                                .createQueryBuilder()
                                .insert()
                                .values({
                                changed_date: () => "NOW()",
                                changed_text: "취소",
                                order_detail: await this.orderDetailRepository.findOne({ order_detail_id: data.order_detail_id }),
                                order_main: data.order_main,
                                changed_user: "system",
                                changed_status: "취소"
                            }).execute();
                        }
                    }
                    await this.orderRefundRepository
                        .createQueryBuilder()
                        .insert()
                        .values({
                        OrderMain: await this.orderMainRepository.findOne({ order_id: Number(reqOrderChangeFuncDTO.order_detail[0].order_id) }),
                        refund_price: Number(reqOrderChangeFuncDTO.refund_price)
                    })
                        .execute();
                    return "취소에 성공했습니다.";
                }
                case "20":
                case "21":
                case "22":
                case "23": {
                    for (const i of reqOrderChangeFuncDTO.order_detail) {
                        const data = await this.orderDetailRepository.findOne({ order_detail_id: Number(i.order_detail_id) });
                        if (data.order_product_count - Number(i.separation_value) > 0) {
                            await this.orderDetailRepository.update({ order_detail_id: data.order_detail_id }, {
                                order_product_count: data.order_product_count - i.separation_value,
                                product_sale_price: data.product_sale_price / data.order_product_count * (data.order_product_count - i.separation_value),
                                coupon_discount: data.coupon_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                                member_discount: data.member_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                                special_discount: data.special_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                                planning_discount: data.planning_discount / data.order_product_count * (data.order_product_count - i.separation_value)
                            });
                            data.order_detail_id = null;
                            data.product_sale_price = data.product_sale_price / data.order_product_count * i.separation_value;
                            data.coupon_discount = data.coupon_discount / data.order_product_count * i.separation_value;
                            data.member_discount = data.member_discount / data.order_product_count * i.separation_value;
                            data.special_discount = data.special_discount / data.order_product_count * i.separation_value;
                            data.planning_discount = data.planning_discount / data.order_product_count * i.separation_value;
                            data.order_main = await this.orderMainRepository.findOne({ order_id: Number(i.order_id) });
                            data.product_brand = await this.productBrandRepository.findOne({ brand_id: i.brand_id });
                            data.ProductOption = await this.productOptionRepository.findOne({ product_option_id: i.product_option_id });
                            data.ProductOptionDetail = await this.productOptionDetailRepository.findOne({ product_option_detail_id: i.product_option_detail_id });
                            data.order_product_count = i.separation_value;
                            data.return_delivery_message = reqOrderChangeFuncDTO.return_delivery_message;
                            data.return_delivery_name = reqOrderChangeFuncDTO.return_delivery_name;
                            data.return_delivery_phone = reqOrderChangeFuncDTO.return_delivery_phone;
                            data.return_delivery_address_number = reqOrderChangeFuncDTO.return_delivery_address_number;
                            data.return_delivery_address_detail = reqOrderChangeFuncDTO.return_delivery_address_detail;
                            data.return_delivery_address = reqOrderChangeFuncDTO.return_delivery_address;
                            data.claim_method = "0";
                            data.claim_reason = "[" + reqOrderChangeFuncDTO.order_changed_reason + "]" + reqOrderChangeFuncDTO.order_detail_changed_reason;
                            data.order_state = reqOrderChangeFuncDTO.order_changed_status;
                            const v = await this
                                .orderDetailRepository
                                .createQueryBuilder()
                                .insert()
                                .into(OrderDetail_Entity_1.OrderDetailEntity)
                                .values(Object.assign(Object.assign({}, data), { claim_date: () => "NOW()", re_origin_order: String(data.order_detail_id) })).execute();
                            await this.orderHistoryRepository
                                .createQueryBuilder()
                                .insert()
                                .values({
                                changed_date: () => "NOW()",
                                changed_text: "반품진행(",
                                order_detail: await this.orderDetailRepository.findOne({ order_detail_id: v.raw.order_detail_id }),
                                order_main: data.order_main,
                                changed_user: "system",
                                changed_status: "반품"
                            }).execute();
                        }
                        else if (data.order_product_count - Number(i.separation_value) == 0) {
                            await this.orderDetailRepository.update({ order_detail_id: data.order_detail_id }, {
                                claim_method: "0",
                                claim_reason: "[" + reqOrderChangeFuncDTO.order_changed_reason + "]" + reqOrderChangeFuncDTO.order_detail_changed_reason,
                                order_state: reqOrderChangeFuncDTO.order_changed_status
                            });
                            await this.orderHistoryRepository
                                .createQueryBuilder()
                                .insert()
                                .values({
                                changed_date: () => "NOW()",
                                changed_text: "반품진행(",
                                order_detail: await this.orderDetailRepository.findOne({ order_detail_id: Number(i.order_detail_id) }),
                                order_main: data.order_main,
                                changed_user: "system",
                                changed_status: "반품"
                            }).execute();
                        }
                    }
                    await this.orderRefundRepository
                        .createQueryBuilder()
                        .insert()
                        .values({
                        OrderMain: await this.orderMainRepository.findOne({ order_id: Number(reqOrderChangeFuncDTO.order_detail[0].order_id) }),
                        refund_price: Number(reqOrderChangeFuncDTO.refund_price)
                    })
                        .execute();
                    return "반품에 성공했습니다.";
                }
                case "30":
                case "31": {
                    let data = null;
                    for (const i of reqOrderChangeFuncDTO.order_detail) {
                        data = await this.orderDetailRepository.findOne({ order_detail_id: Number(i.order_detail_id) });
                        if (data.order_product_count - Number(i.separation_value) > 0) {
                            await this.orderDetailRepository.update({ order_detail_id: data.order_detail_id }, {
                                order_product_count: data.order_product_count - i.separation_value,
                                product_sale_price: data.product_sale_price / data.order_product_count * (data.order_product_count - i.separation_value),
                                coupon_discount: data.coupon_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                                member_discount: data.member_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                                special_discount: data.special_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                                planning_discount: data.planning_discount / data.order_product_count * (data.order_product_count - i.separation_value),
                                claim_method: data.claim_method = "0",
                                claim_reason: "[" + reqOrderChangeFuncDTO.order_changed_reason + "]" + reqOrderChangeFuncDTO.order_detail_changed_reason,
                                claim_date: () => "NOW()"
                            });
                            data.order_detail_id = null;
                            data.product_sale_price = data.product_sale_price / data.order_product_count * i.separation_value;
                            data.coupon_discount = 0;
                            data.member_discount = 0;
                            data.special_discount = 0;
                            data.planning_discount = 0;
                            data.order_main = await this.orderMainRepository.findOne({ order_id: Number(i.order_id) });
                            data.product_brand = await this.productBrandRepository.findOne({ brand_id: i.brand_id });
                            data.return_delivery_message = reqOrderChangeFuncDTO.return_delivery_message;
                            data.return_delivery_name = reqOrderChangeFuncDTO.return_delivery_name;
                            data.return_delivery_phone = reqOrderChangeFuncDTO.return_delivery_phone;
                            data.return_delivery_address_number = reqOrderChangeFuncDTO.return_delivery_address_number;
                            data.return_delivery_address_detail = reqOrderChangeFuncDTO.return_delivery_address_detail;
                            data.return_delivery_address = reqOrderChangeFuncDTO.return_delivery_address;
                            data.re_delivery_message = reqOrderChangeFuncDTO.re_delivery_message;
                            data.re_delivery_name = reqOrderChangeFuncDTO.re_delivery_name;
                            data.re_delivery_phone = reqOrderChangeFuncDTO.re_delivery_phone;
                            data.re_delivery_address_number = reqOrderChangeFuncDTO.re_delivery_address_number;
                            data.re_delivery_address_detail = reqOrderChangeFuncDTO.re_delivery_address_detail;
                            data.re_delivery_address = reqOrderChangeFuncDTO.re_delivery_address;
                            data.order_state = reqOrderChangeFuncDTO.order_changed_status;
                        }
                        for (const y of reqOrderChangeFuncDTO.change_order_detail) {
                            data.product_code = y.product_code;
                            data.ProductOption = await this.productOptionRepository.findOne({ product_option_id: y.product_option_id });
                            data.ProductOptionDetail = await this.productOptionDetailRepository.findOne({ product_option_detail_id: y.product_option_detail_id });
                            data.order_product_count = Number(y.order_product_count);
                            const v = await this
                                .orderDetailRepository
                                .createQueryBuilder()
                                .insert()
                                .into(OrderDetail_Entity_1.OrderDetailEntity)
                                .values(Object.assign({}, data)).execute();
                            await this.orderHistoryRepository
                                .createQueryBuilder()
                                .insert()
                                .into(OrderHistory_Entity_1.OrderHistoryEntity)
                                .values({
                                changed_date: () => "NOW()",
                                changed_text: "교환",
                                order_detail: await this.orderDetailRepository.findOne({ order_detail_id: v.raw.order_detail_id }),
                                order_main: data.order_main,
                                changed_user: "system",
                                changed_status: "교환"
                            }).execute();
                        }
                    }
                    return "교환에 성공했습니다.";
                }
            }
        }
        catch (error) {
            common_1.Logger.log(`/change/record/all/:orderId ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
OrderManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(OrderDetail_repository_1.OrderDetailRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(OrderMain_repository_1.OrderMainRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(OrderPayment_repository_1.OrderPaymentRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(OrderRefund_repository_1.OrderRefundRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(MemberAddress_repository_1.MemberAddressRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(ProductOption_repository_1.ProductOptionRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(ProductOptionDetail_repository_1.ProductOptionDetailRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(ProductBrand_repository_1.ProductBrandRepository)),
    __param(9, (0, typeorm_1.InjectRepository)(DeliveryCompany_repository_1.DeliveryCompanyRepository)),
    __param(10, (0, typeorm_1.InjectRepository)(OrderHistory_repository_1.OrderHistoryRepository)),
    __metadata("design:paramtypes", [OrderDetail_repository_1.OrderDetailRepository,
        OrderMain_repository_1.OrderMainRepository,
        OrderPayment_repository_1.OrderPaymentRepository,
        Member_repository_1.MemberRepository,
        OrderRefund_repository_1.OrderRefundRepository,
        MemberAddress_repository_1.MemberAddressRepository,
        ProductOption_repository_1.ProductOptionRepository,
        ProductOptionDetail_repository_1.ProductOptionDetailRepository,
        ProductBrand_repository_1.ProductBrandRepository,
        DeliveryCompany_repository_1.DeliveryCompanyRepository,
        OrderHistory_repository_1.OrderHistoryRepository])
], OrderManagerService);
exports.OrderManagerService = OrderManagerService;
function serializeArray(arrayData) {
    for (let i in arrayData) {
        arrayData[i] = JSON.stringify(arrayData[i]);
    }
    return `(${[...arrayData]})`;
}
//# sourceMappingURL=order-manager.service.js.map