"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DHPService = void 0;
const domain_notfound_exception_1 = require("../common/exception/domain-notfound.exception");
const pharmacy_api_service_1 = require("../pharmacy/pharmacy-api.service");
const consultation_api_service_1 = require("../consultation/consultation-api.service");
const ambulance_service_1 = require("./ambulance/ambulance.service");
const bloodbank_service_1 = require("./bloodbank/bloodbank.service");
const common_1 = require("@nestjs/common");
const dhp_type_enum_1 = require("./dhp-type.enum");
const diagnostics_api_service_1 = require("../diagnostics/diagnostics-api.service");
let DHPService = class DHPService {
    get(domain) {
        switch (domain) {
            case dhp_type_enum_1.DHPTypeEnum.DHPPHARMACY:
                return new pharmacy_api_service_1.PharmacyApiService();
            case dhp_type_enum_1.DHPTypeEnum.DHPCONSULTATION:
                return new consultation_api_service_1.ConsultationApiService();
            case dhp_type_enum_1.DHPTypeEnum.DHPDIAGNOSTICS:
                return new diagnostics_api_service_1.DiagnosticsApiService();
            case dhp_type_enum_1.DHPTypeEnum.DHPAMBULANCE:
                return new ambulance_service_1.AmbulanceService();
            case dhp_type_enum_1.DHPTypeEnum.DHPBLOODBANK:
                return new bloodbank_service_1.BloodbankService();
            default:
                throw new domain_notfound_exception_1.DomainNotFoundException();
        }
    }
};
DHPService = __decorate([
    (0, common_1.Injectable)()
], DHPService);
exports.DHPService = DHPService;
//# sourceMappingURL=dhp.service.js.map