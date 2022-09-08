import { DeliveryCompanyRepository } from "../../repository/delivery/DeliveryCompany.repository";
export declare class DeliveryCompanyService {
    private deliveryCompanyRepository;
    constructor(deliveryCompanyRepository: DeliveryCompanyRepository);
    findAll(): Promise<import("../../entity/delivery/DeliveryCompany.entity").DeliveryCompanyEntity[]>;
    findId(id: string): Promise<any>;
    findName(name: string): Promise<any>;
    save(name: string): Promise<any>;
    update(id: string, name: string): Promise<any>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
