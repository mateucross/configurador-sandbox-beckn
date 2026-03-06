"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialServicesService = void 0;
const domain_notfound_exception_1 = require("../common/exception/domain-notfound.exception");
const credit_personal_api_service_1 = require("../personal-credit/credit-personal-api.service");
const credit_invoice_api_service_1 = require("../invoice-based-credit/credit-invoice-api.service");
const common_1 = require("@nestjs/common");
const financial_services_type_enum_1 = require("./financial-services-type.enum");
const health_insurance_api_service_1 = require("../health-insurance/health-insurance-api.service");
const mutual_funds_api_service_1 = require("../mutual-funds/mutual-funds-api.service");
let FinancialServicesService = class FinancialServicesService {
    get(domain) {
        switch (domain) {
            case financial_services_type_enum_1.FinancialServicesTypeEnum.CREDITPERSONAL:
                return new credit_personal_api_service_1.CreditPersonalApiService();
            case financial_services_type_enum_1.FinancialServicesTypeEnum.CREDITINVOICE:
                return new credit_invoice_api_service_1.CreditInvoiceApiService();
            case financial_services_type_enum_1.FinancialServicesTypeEnum.HEALTHINSURANCE:
                return new health_insurance_api_service_1.HealthInsuranceApiService();
            case financial_services_type_enum_1.FinancialServicesTypeEnum.MUTUALFUNDS:
                return new mutual_funds_api_service_1.MutualFundsApiService();
            default:
                throw new domain_notfound_exception_1.DomainNotFoundException();
        }
    }
};
FinancialServicesService = __decorate([
    (0, common_1.Injectable)()
], FinancialServicesService);
exports.FinancialServicesService = FinancialServicesService;
//# sourceMappingURL=financial-services.service.js.map