"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosticsModule = void 0;
const common_1 = require("@nestjs/common");
const diagnostics_api_service_1 = require("./diagnostics-api.service");
const diagnostics_service_1 = require("./diagnostics.service");
let DiagnosticsModule = class DiagnosticsModule {
};
DiagnosticsModule = __decorate([
    (0, common_1.Module)({
        providers: [diagnostics_api_service_1.DiagnosticsApiService, diagnostics_service_1.DiagnosticsService],
    })
], DiagnosticsModule);
exports.DiagnosticsModule = DiagnosticsModule;
//# sourceMappingURL=diagnostics.module.js.map