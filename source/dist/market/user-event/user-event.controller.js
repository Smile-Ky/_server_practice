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
exports.UserEventController = void 0;
const common_1 = require("@nestjs/common");
const user_event_service_1 = require("./user-event.service");
const swagger_1 = require("@nestjs/swagger");
const ReqFindComment_dto_1 = require("./DTO/ReqFindComment.dto");
const ReqAddCommentByUser_dto_1 = require("./DTO/ReqAddCommentByUser.dto");
const ReqCommentModify_dto_1 = require("./DTO/ReqCommentModify.dto");
const ReqDelComment_dto_1 = require("./DTO/ReqDelComment.dto");
let UserEventController = class UserEventController {
    constructor(userEventService) {
        this.userEventService = userEventService;
    }
    async getCommentList(data, req, res) {
        try {
            return res.status(200).json(await this.userEventService.getCommentList(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error: error });
        }
    }
    async addCommentByUser(data, req, res) {
        try {
            return res.status(200).json(await this.userEventService.addCommentByUser(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error: error });
        }
    }
    async commentModify(data, req, res) {
        try {
            return res.status(200).json(await this.userEventService.commentModify(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error: error });
        }
    }
    async delComment(data, req, res) {
        try {
            return res.status(200).json(await this.userEventService.delComment(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error: error });
        }
    }
};
__decorate([
    (0, common_1.Post)('/getCommentList'),
    (0, swagger_1.ApiOperation)({ summary: '댓글 목록 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqFindComment_dto_1.ReqFindCommentDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserEventController.prototype, "getCommentList", null);
__decorate([
    (0, common_1.Post)('/addCommentByUser'),
    (0, swagger_1.ApiOperation)({ summary: '댓글 추가' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqAddCommentByUser_dto_1.ReqAddCommentByUserDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserEventController.prototype, "addCommentByUser", null);
__decorate([
    (0, common_1.Post)('/commentModify'),
    (0, swagger_1.ApiOperation)({ summary: '댓글 수정' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCommentModify_dto_1.ReqCommentModifyDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserEventController.prototype, "commentModify", null);
__decorate([
    (0, common_1.Post)('/delComment'),
    (0, swagger_1.ApiOperation)({ summary: '댓글 삭제' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqDelComment_dto_1.ReqDelCommentDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserEventController.prototype, "delComment", null);
UserEventController = __decorate([
    (0, common_1.Controller)('api/event'),
    (0, swagger_1.ApiTags)('마켓 - 이벤트/기획전 댓글 정보'),
    __metadata("design:paramtypes", [user_event_service_1.UserEventService])
], UserEventController);
exports.UserEventController = UserEventController;
//# sourceMappingURL=user-event.controller.js.map