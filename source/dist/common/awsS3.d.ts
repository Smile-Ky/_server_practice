/// <reference types="multer" />
export declare const uploadS3: (folder: string) => {
    storage: import("multer").StorageEngine;
};
export declare const schema: {
    schema: {
        type: string;
        properties: {
            images: {
                type: string;
                format: string;
            };
        };
    };
};
