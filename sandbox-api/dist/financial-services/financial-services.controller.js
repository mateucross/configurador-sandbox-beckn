"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialServicesController = void 0;
const common_1 = require("@nestjs/common");
const request_dto_1 = require("./dto/request.dto");
const financial_services_service_1 = require("./financial-services.service");
let FinancialServicesController = class FinancialServicesController {
    constructor(service) {
        this.service = service;
    }
    search(financialServicesRequest) {
        return this.service.get(financialServicesRequest.context.domain).search(financialServicesRequest);
    }
    select(financialServicesRequest) {
        return this.service.get(financialServicesRequest.context.domain).select(financialServicesRequest);
    }
    init(financialServicesRequest) {
        return this.service.get(financialServicesRequest.context.domain).init(financialServicesRequest);
    }
    confirm(financialServicesRequest) {
        return this.service.get(financialServicesRequest.context.domain).confirm(financialServicesRequest);
    }
    status(financialServicesRequest) {
        return this.service.get(financialServicesRequest.context.domain).status(financialServicesRequest);
    }
    track(financialServicesRequest) {
        return this.service.get(financialServicesRequest.context.domain).track(financialServicesRequest);
    }
    cancel(financialServicesRequest) {
        return this.service.get(financialServicesRequest.context.domain).cancel(financialServicesRequest);
    }
    support(financialServicesRequest) {
        return this.service.get(financialServicesRequest.context.domain).support(financialServicesRequest);
    }
    update(financialServicesRequest) {
        return this.service.get(financialServicesRequest.context.domain).update(financialServicesRequest);
    }
    rating(financialServicesRequest) {
        return this.service.get(financialServicesRequest.context.domain).rating(financialServicesRequest);
    }
};
__decorate([
    (0, common_1.Post)("/search"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.FinancialServicesRequestDto]),
    __metadata("design:returntype", void 0)
], FinancialServicesController.prototype, "search", null);
__decorate([
    (0, common_1.Post)("/select"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.FinancialServicesRequestDto]),
    __metadata("design:returntype", void 0)
], FinancialServicesController.prototype, "select", null);
__decorate([
    (0, common_1.Post)("/init"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.FinancialServicesRequestDto]),
    __metadata("design:returntype", void 0)
], FinancialServicesController.prototype, "init", null);
__decorate([
    (0, common_1.Post)("/confirm"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.FinancialServicesRequestDto]),
    __metadata("design:returntype", void 0)
], FinancialServicesController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)("/status"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.FinancialServicesRequestDto]),
    __metadata("design:returntype", void 0)
], FinancialServicesController.prototype, "status", null);
__decorate([
    (0, common_1.Post)("/track"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.FinancialServicesRequestDto]),
    __metadata("design:returntype", void 0)
], FinancialServicesController.prototype, "track", null);
__decorate([
    (0, common_1.Post)("/cancel"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.FinancialServicesRequestDto]),
    __metadata("design:returntype", void 0)
], FinancialServicesController.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)("/support"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.FinancialServicesRequestDto]),
    __metadata("design:returntype", void 0)
], FinancialServicesController.prototype, "support", null);
__decorate([
    (0, common_1.Post)("/update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.FinancialServicesRequestDto]),
    __metadata("design:returntype", void 0)
], FinancialServicesController.prototype, "update", null);
__decorate([
    (0, common_1.Post)("/rating"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.FinancialServicesRequestDto]),
    __metadata("design:returntype", void 0)
], FinancialServicesController.prototype, "rating", null);
FinancialServicesController = __decorate([
    (0, common_1.Controller)("/financial-services"),
    __metadata("design:paramtypes", [financial_services_service_1.FinancialServicesService])
], FinancialServicesController);
exports.FinancialServicesController = FinancialServicesController;
//# sourceMappingURL=financial-services.controller.js.map