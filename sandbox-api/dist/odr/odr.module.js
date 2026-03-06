"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ODRModule = void 0;
const common_1 = require("@nestjs/common");
const odr_service_1 = require("./odr.service");
const odr_controller_1 = require("./odr.controller");
let ODRModule = class ODRModule {
};
ODRModule = __decorate([
    (0, common_1.Module)({
        controllers: [odr_controller_1.ODRController],
        providers: [odr_service_1.ODRService],
    })
], ODRModule);
exports.ODRModule = ODRModule;
//# sourceMappingURL=odr.module.js.map