"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DsepModule = void 0;
const common_1 = require("@nestjs/common");
const dsep_service_1 = require("./dsep.service");
const dsep_controller_1 = require("./dsep.controller");
const student_connect_module_1 = require("./student-connect/student-connect.module");
let DsepModule = class DsepModule {
};
DsepModule = __decorate([
    (0, common_1.Module)({
        controllers: [dsep_controller_1.DsepController],
        providers: [dsep_service_1.DsepService],
        imports: [student_connect_module_1.StudentConnectModule],
    })
], DsepModule);
exports.DsepModule = DsepModule;
//# sourceMappingURL=dsep.module.js.map