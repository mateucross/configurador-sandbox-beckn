"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobilityService = void 0;
const domain_notfound_exception_1 = require("../common/exception/domain-notfound.exception");
const ondc_api_service_1 = require("../ondc/ondc-api.service");
const umtc_api_service_1 = require("../umtc/umtc-api.service");
const common_1 = require("@nestjs/common");
const mobility_type_enum_1 = require("./mobility-type.enum");
let MobilityService = class MobilityService {
    get(domain) {
        switch (domain) {
            case mobility_type_enum_1.MobilityTypeEnum.ONDC:
                return new ondc_api_service_1.OndcApiService();
            case mobility_type_enum_1.MobilityTypeEnum.UMTC:
                return new umtc_api_service_1.UmtcApiService();
            case mobility_type_enum_1.MobilityTypeEnum.BECKN_MOBILITY:
                return new umtc_api_service_1.UmtcApiService();
            default:
                throw new domain_notfound_exception_1.DomainNotFoundException();
        }
    }
};
MobilityService = __decorate([
    (0, common_1.Injectable)()
], MobilityService);
exports.MobilityService = MobilityService;
//# sourceMappingURL=mobility.service.js.map