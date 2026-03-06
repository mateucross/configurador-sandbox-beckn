"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DentService = void 0;
const domain_notfound_exception_1 = require("../common/exception/domain-notfound.exception");
const ev_api_service_1 = require("../ev/ev-api.service");
const common_1 = require("@nestjs/common");
const dent_type_enum_1 = require("./dent-type.enum");
let DentService = class DentService {
    get(domain) {
        switch (domain) {
            case dent_type_enum_1.DentTypeEnum.DENTEVCHARGIN:
                return new ev_api_service_1.EVApiService();
            default:
                throw new domain_notfound_exception_1.DomainNotFoundException();
        }
    }
};
DentService = __decorate([
    (0, common_1.Injectable)()
], DentService);
exports.DentService = DentService;
//# sourceMappingURL=dent.service.js.map