"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalRetailService = void 0;
const common_1 = require("@nestjs/common");
const local_retail_modules_enum_1 = require("./local-retail-modules.enum");
const retail_service_0_9_4_1 = require("./retail-0.9.4/retail.service-0-9-4");
const retail_service_1_1_0_1 = require("./retail-1.1.0/retail.service-1-1-0");
const domain_notfound_exception_1 = require("../common/exception/domain-notfound.exception");
let LocalRetailService = class LocalRetailService {
    get094(domain) {
        switch (domain) {
            case local_retail_modules_enum_1.LocalRetailENUM.RETAIL094:
                return new retail_service_0_9_4_1.RetailService094();
            default:
                throw new domain_notfound_exception_1.DomainNotFoundException();
        }
    }
    get110(domain) {
        switch (domain) {
            case local_retail_modules_enum_1.LocalRetailENUM.RETAIL110:
                return new retail_service_1_1_0_1.RetailService110();
            default:
                throw new domain_notfound_exception_1.DomainNotFoundException();
        }
    }
};
LocalRetailService = __decorate([
    (0, common_1.Injectable)()
], LocalRetailService);
exports.LocalRetailService = LocalRetailService;
//# sourceMappingURL=local-retail.service.js.map