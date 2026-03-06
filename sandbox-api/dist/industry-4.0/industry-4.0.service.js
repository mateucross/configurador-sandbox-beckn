"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Industry40Service = void 0;
const common_1 = require("@nestjs/common");
const industry_4_0_modules_enum_1 = require("./industry-4.0-modules.enum");
const _3D_printing_service_1 = require("./3D-printing/3D-printing.service");
const domain_notfound_exception_1 = require("../common/exception/domain-notfound.exception");
const assembly_service_1 = require("./assembly/assembly.service");
let Industry40Service = class Industry40Service {
    get(domain) {
        switch (domain) {
            case industry_4_0_modules_enum_1.Industry4_0ENUM.THREE_D_PRINITING:
                return new _3D_printing_service_1.Three_D_PrintingService();
            case industry_4_0_modules_enum_1.Industry4_0ENUM.ASSEMBLY:
                return new assembly_service_1.AssemblyService();
            default:
                throw new domain_notfound_exception_1.DomainNotFoundException();
        }
    }
};
Industry40Service = __decorate([
    (0, common_1.Injectable)()
], Industry40Service);
exports.Industry40Service = Industry40Service;
//# sourceMappingURL=industry-4.0.service.js.map