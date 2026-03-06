"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DentModule = void 0;
const common_1 = require("@nestjs/common");
const ev_module_1 = require("../ev/ev.module");
const dent_controller_1 = require("./dent.controller");
const dent_service_1 = require("./dent.service");
let DentModule = class DentModule {
};
DentModule = __decorate([
    (0, common_1.Module)({
        imports: [ev_module_1.EVModule],
        controllers: [dent_controller_1.DentController],
        providers: [dent_service_1.DentService],
    })
], DentModule);
exports.DentModule = DentModule;
//# sourceMappingURL=dent.module.js.map