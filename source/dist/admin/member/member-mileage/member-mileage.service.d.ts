import { MemberMileageRepository } from "../../../repository/member/MemberMileage.repository";
import { MileageSettingRepository } from "../../../repository/mileage/MileageSetting.repository";
import { MemberRepository } from "../../../repository/member/Member.repository";
import { MileageSaveFromDTO } from "./DTO/MileageSaveFromDTO";
import { MileageSettingEntity } from "../../../entity/mileage/MileageSetting.entity";
import { MileageSettingGroupPaymentRepository } from "../../../repository/mileage/MileageSettingGroupPayment.repository";
import { MemberGroupRepository } from "../../../repository/member/MemberGroup.repository";
import { MemberMileageLogRepository } from "../../../repository/member/MemberMileageLog.repository";
import { ReqMileageFindDTO } from "./DTO/ReqMileageFindDTO";
import { ReqMemberMileageFindDTO } from "./DTO/ReqMemberMileageFindDTO";
import { MemberMileageLogEntity } from "../../../entity/member/MemberMileageLog.entity";
import { ReqMileageLogSaveFromDTO } from "./DTO/ReqMileageLogSaveFromDTO";
export declare class MemberMileageService {
    private memberRepository;
    private memberMileageLogRepository;
    private memberMileageRepository;
    private mileageSettingRepository;
    private mileageSettingGroupPaymentRepository;
    private memberGroupRepository;
    constructor(memberRepository: MemberRepository, memberMileageLogRepository: MemberMileageLogRepository, memberMileageRepository: MemberMileageRepository, mileageSettingRepository: MileageSettingRepository, mileageSettingGroupPaymentRepository: MileageSettingGroupPaymentRepository, memberGroupRepository: MemberGroupRepository);
    mileageLogFindAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    mileageLogFind(data: ReqMileageFindDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    mileageLogMemberFindAll(memberId: string, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    mileageLogMemberFind(memberId: string, data: ReqMemberMileageFindDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    mileageLogCreate(data: ReqMileageLogSaveFromDTO): Promise<MemberMileageLogEntity>;
    mileageSetting_find(): Promise<{
        data: string;
    } | {
        mileage_setting_group_payment: any;
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): MileageSettingEntity;
        push(...items: MileageSettingEntity[]): number;
        concat(...items: ConcatArray<MileageSettingEntity>[]): MileageSettingEntity[];
        concat(...items: (MileageSettingEntity | ConcatArray<MileageSettingEntity>)[]): MileageSettingEntity[];
        join(separator?: string): string;
        reverse(): MileageSettingEntity[];
        shift(): MileageSettingEntity;
        slice(start?: number, end?: number): MileageSettingEntity[];
        sort(compareFn?: (a: MileageSettingEntity, b: MileageSettingEntity) => number): MileageSettingEntity[];
        splice(start: number, deleteCount?: number): MileageSettingEntity[];
        splice(start: number, deleteCount: number, ...items: MileageSettingEntity[]): MileageSettingEntity[];
        unshift(...items: MileageSettingEntity[]): number;
        indexOf(searchElement: MileageSettingEntity, fromIndex?: number): number;
        lastIndexOf(searchElement: MileageSettingEntity, fromIndex?: number): number;
        every<S extends MileageSettingEntity>(predicate: (value: MileageSettingEntity, index: number, array: MileageSettingEntity[]) => value is S, thisArg?: any): this is S[];
        every(predicate: (value: MileageSettingEntity, index: number, array: MileageSettingEntity[]) => unknown, thisArg?: any): boolean;
        some(predicate: (value: MileageSettingEntity, index: number, array: MileageSettingEntity[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: MileageSettingEntity, index: number, array: MileageSettingEntity[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: MileageSettingEntity, index: number, array: MileageSettingEntity[]) => U, thisArg?: any): U[];
        filter<S_1 extends MileageSettingEntity>(predicate: (value: MileageSettingEntity, index: number, array: MileageSettingEntity[]) => value is S_1, thisArg?: any): S_1[];
        filter(predicate: (value: MileageSettingEntity, index: number, array: MileageSettingEntity[]) => unknown, thisArg?: any): MileageSettingEntity[];
        reduce(callbackfn: (previousValue: MileageSettingEntity, currentValue: MileageSettingEntity, currentIndex: number, array: MileageSettingEntity[]) => MileageSettingEntity): MileageSettingEntity;
        reduce(callbackfn: (previousValue: MileageSettingEntity, currentValue: MileageSettingEntity, currentIndex: number, array: MileageSettingEntity[]) => MileageSettingEntity, initialValue: MileageSettingEntity): MileageSettingEntity;
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: MileageSettingEntity, currentIndex: number, array: MileageSettingEntity[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: MileageSettingEntity, currentValue: MileageSettingEntity, currentIndex: number, array: MileageSettingEntity[]) => MileageSettingEntity): MileageSettingEntity;
        reduceRight(callbackfn: (previousValue: MileageSettingEntity, currentValue: MileageSettingEntity, currentIndex: number, array: MileageSettingEntity[]) => MileageSettingEntity, initialValue: MileageSettingEntity): MileageSettingEntity;
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: MileageSettingEntity, currentIndex: number, array: MileageSettingEntity[]) => U_2, initialValue: U_2): U_2;
        find<S_2 extends MileageSettingEntity>(predicate: (this: void, value: MileageSettingEntity, index: number, obj: MileageSettingEntity[]) => value is S_2, thisArg?: any): S_2;
        find(predicate: (value: MileageSettingEntity, index: number, obj: MileageSettingEntity[]) => unknown, thisArg?: any): MileageSettingEntity;
        findIndex(predicate: (value: MileageSettingEntity, index: number, obj: MileageSettingEntity[]) => unknown, thisArg?: any): number;
        fill(value: MileageSettingEntity, start?: number, end?: number): MileageSettingEntity[];
        copyWithin(target: number, start: number, end?: number): MileageSettingEntity[];
        entries(): IterableIterator<[number, MileageSettingEntity]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<MileageSettingEntity>;
        includes(searchElement: MileageSettingEntity, fromIndex?: number): boolean;
        flatMap<U_3, This = undefined>(callback: (this: This, value: MileageSettingEntity, index: number, array: MileageSettingEntity[]) => U_3 | readonly U_3[], thisArg?: This): U_3[];
        flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[];
        [Symbol.iterator](): IterableIterator<MileageSettingEntity>;
        [Symbol.unscopables](): {
            copyWithin: boolean;
            entries: boolean;
            fill: boolean;
            find: boolean;
            findIndex: boolean;
            keys: boolean;
            values: boolean;
        };
        at(index: number): MileageSettingEntity;
        data?: undefined;
    }>;
    mileageSetting_create(data: MileageSaveFromDTO): Promise<MileageSettingEntity>;
    mileageSetting_update(data: MileageSaveFromDTO): Promise<{
        mileage_setting_id: string;
    }>;
}
