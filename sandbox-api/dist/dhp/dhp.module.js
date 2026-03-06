"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DHPModule = void 0;
const common_1 = require("@nestjs/common");
const pharmacy_module_1 = require("../pharmacy/pharmacy.module");
const consultation_module_1 = require("../consultation/consultation.module");
const diagnostics_module_1 = require("../diagnostics/diagnostics.module");
const dhp_controller_1 = require("./dhp.controller");
const dhp_service_1 = require("./dhp.service");
const ambulance_module_1 = require("./ambulance/ambulance.module");
const bloodbank_module_1 = require("./bloodbank/bloodbank.module");
let DHPModule = class DHPModule {
};
DHPModule = __decorate([
    (0, common_1.Module)({
        imports: [pharmacy_module_1.PharmacyModule, consultation_module_1.ConsultationModule, diagnostics_module_1.DiagnosticsModule, ambulance_module_1.AmbulanceModule, bloodbank_module_1.BloodbankModule],
        controllers: [dhp_controller_1.DHPController],
        providers: [dhp_service_1.DHPService],
    })
], DHPModule);
exports.DHPModule = DHPModule;
//# sourceMappingURL=dhp.module.js.map