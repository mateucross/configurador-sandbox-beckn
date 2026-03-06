import { FinancialServicesRequestDto } from "./dto/request.dto";
import { FinancialServicesService } from "./financial-services.service";
export declare class FinancialServicesController {
    private readonly service;
    constructor(service: FinancialServicesService);
    search(financialServicesRequest: FinancialServicesRequestDto): any;
    select(financialServicesRequest: FinancialServicesRequestDto): any;
    init(financialServicesRequest: FinancialServicesRequestDto): any;
    confirm(financialServicesRequest: FinancialServicesRequestDto): any;
    status(financialServicesRequest: FinancialServicesRequestDto): any;
    track(financialServicesRequest: FinancialServicesRequestDto): any;
    cancel(financialServicesRequest: FinancialServicesRequestDto): any;
    support(financialServicesRequest: FinancialServicesRequestDto): any;
    update(financialServicesRequest: FinancialServicesRequestDto): any;
    rating(financialServicesRequest: FinancialServicesRequestDto): any;
}
