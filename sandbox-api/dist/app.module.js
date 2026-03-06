"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const common_module_1 = require("./common/common.module");
const mobility_module_1 = require("./mobility/mobility.module");
const financial_services_module_1 = require("./financial-services/financial-services.module");
const dent_module_1 = require("./dent/dent.module");
const dhp_module_1 = require("./dhp/dhp.module");
const dsep_module_1 = require("./dsep/dsep.module");
const industry_4_0_module_1 = require("./industry-4.0/industry-4.0.module");
const odr_module_1 = require("./odr/odr.module");
const local_retail_module_1 = require("./local-retail/local-retail.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mobility_module_1.MobilityModule, common_module_1.CommonModule, financial_services_module_1.FinancialServicesModule, dsep_module_1.DsepModule, dent_module_1.DentModule, dhp_module_1.DHPModule, industry_4_0_module_1.Industry40Module, odr_module_1.ODRModule, local_retail_module_1.LocalRetailModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map