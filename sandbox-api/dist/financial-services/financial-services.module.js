"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialServicesModule = void 0;
const common_1 = require("@nestjs/common");
const credit_personal_module_1 = require("../personal-credit/credit-personal.module");
const credit_invoice_module_1 = require("../invoice-based-credit/credit-invoice.module");
const financial_services_controller_1 = require("./financial-services.controller");
const financial_services_service_1 = require("./financial-services.service");
const health_insurance_module_1 = require("../health-insurance/health-insurance.module");
const mutual_funds_module_1 = require("../mutual-funds/mutual-funds.module");
let FinancialServicesModule = class FinancialServicesModule {
};
FinancialServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [credit_personal_module_1.CreditPersonalModule, credit_invoice_module_1.CreditInvoiceModule, health_insurance_module_1.HealthInsuranceModule, mutual_funds_module_1.MutualFundsModule],
        controllers: [financial_services_controller_1.FinancialServicesController],
        providers: [financial_services_service_1.FinancialServicesService],
    })
], FinancialServicesModule);
exports.FinancialServicesModule = FinancialServicesModule;
//# sourceMappingURL=financial-services.module.js.map