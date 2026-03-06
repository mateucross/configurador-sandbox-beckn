"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalRetailModule = void 0;
const common_1 = require("@nestjs/common");
const local_retail_controller_0_9_4_1 = require("./local-retail.controller-0-9-4");
const local_retail_controller_1_1_0_1 = require("./local-retail.controller-1-1-0");
const local_retail_service_1 = require("./local-retail.service");
let LocalRetailModule = class LocalRetailModule {
};
LocalRetailModule = __decorate([
    (0, common_1.Module)({
        controllers: [local_retail_controller_0_9_4_1.LocalRetailController094, local_retail_controller_1_1_0_1.LocalRetailController110],
        providers: [local_retail_service_1.LocalRetailService]
    })
], LocalRetailModule);
exports.LocalRetailModule = LocalRetailModule;
//# sourceMappingURL=local-retail.module.js.map