"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.uploadS3 = void 0;
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const uploadS3 = (folder) => {
    return {
        storage: (0, multer_s3_1.default)({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.AWS_S3_BUCKET_NAME,
            contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
            acl: 'public-read',
            key: (req, file, cb) => {
                cb(null, `${folder}/${Date.now()}_${file.originalname}`);
            }
        })
    };
};
exports.uploadS3 = uploadS3;
exports.schema = {
    schema: {
        type: 'object',
        properties: {
            images: {
                type: 'string',
                format: 'binary'
            },
        },
    },
};
//# sourceMappingURL=awsS3.js.map