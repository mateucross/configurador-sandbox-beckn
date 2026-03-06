"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobilityModule = void 0;
const ondc_module_1 = require("../ondc/ondc.module");
const umtc_module_1 = require("../umtc/umtc.module");
const common_1 = require("@nestjs/common");
const mobility_controller_1 = require("./mobility.controller");
const mobility_service_1 = require("./mobility.service");
let MobilityModule = class MobilityModule {
};
MobilityModule = __decorate([
    (0, common_1.Module)({
        imports: [ondc_module_1.OndcModule, umtc_module_1.UmtcModule],
        controllers: [mobility_controller_1.MobilityController],
        providers: [mobility_service_1.MobilityService],
    })
], MobilityModule);
exports.MobilityModule = MobilityModule;
//# sourceMappingURL=mobility.module.js.map