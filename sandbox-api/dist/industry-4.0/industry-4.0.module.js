"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Industry40Module = void 0;
const common_1 = require("@nestjs/common");
const industry_4_0_controller_1 = require("./industry-4.0.controller");
const industry_4_0_service_1 = require("./industry-4.0.service");
let Industry40Module = class Industry40Module {
};
Industry40Module = __decorate([
    (0, common_1.Module)({
        controllers: [industry_4_0_controller_1.Industry40Controller],
        providers: [industry_4_0_service_1.Industry40Service],
    })
], Industry40Module);
exports.Industry40Module = Industry40Module;
//# sourceMappingURL=industry-4.0.module.js.map