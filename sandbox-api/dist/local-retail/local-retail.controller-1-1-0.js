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
exports.LocalRetailController110 = void 0;
const common_1 = require("@nestjs/common");
const local_retail_service_1 = require("./local-retail.service");
const local_retail_1_1_0_request_dto_1 = require("./dto/1-1-0/local-retail-1-1-0-request.dto");
let LocalRetailController110 = class LocalRetailController110 {
    constructor(localRetailService) {
        this.localRetailService = localRetailService;
    }
    search(request) {
        return this.localRetailService.get110(request.context.domain).search(request);
    }
    init(request) {
        return this.localRetailService.get110(request.context.domain).init(request);
    }
    cancel(request) {
        return this.localRetailService.get110(request.context.domain).cancel(request);
    }
    confirm(request) {
        return this.localRetailService.get110(request.context.domain).confirm(request);
    }
    rating(request) {
        return this.localRetailService.get110(request.context.domain).rating(request);
    }
    select(request) {
        return this.localRetailService.get110(request.context.domain).select(request);
    }
    status(request) {
        return this.localRetailService.get110(request.context.domain).status(request);
    }
    support(request) {
        return this.localRetailService.get110(request.context.domain).support(request);
    }
    track(request) {
        return this.localRetailService.get110(request.context.domain).track(request);
    }
    update(request) {
        return this.localRetailService.get110(request.context.domain).update(request);
    }
};
__decorate([
    (0, common_1.Post)("/search"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_retail_1_1_0_request_dto_1.Local_Retail110_Request_DTO]),
    __metadata("design:returntype", void 0)
], LocalRetailController110.prototype, "search", null);
__decorate([
    (0, common_1.Post)("/init"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_retail_1_1_0_request_dto_1.Local_Retail110_Request_DTO]),
    __metadata("design:returntype", void 0)
], LocalRetailController110.prototype, "init", null);
__decorate([
    (0, common_1.Post)("/cancel"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_retail_1_1_0_request_dto_1.Local_Retail110_Request_DTO]),
    __metadata("design:returntype", void 0)
], LocalRetailController110.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)("/confirm"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_retail_1_1_0_request_dto_1.Local_Retail110_Request_DTO]),
    __metadata("design:returntype", void 0)
], LocalRetailController110.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)("/rating"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_retail_1_1_0_request_dto_1.Local_Retail110_Request_DTO]),
    __metadata("design:returntype", void 0)
], LocalRetailController110.prototype, "rating", null);
__decorate([
    (0, common_1.Post)("/select"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_retail_1_1_0_request_dto_1.Local_Retail110_Request_DTO]),
    __metadata("design:returntype", void 0)
], LocalRetailController110.prototype, "select", null);
__decorate([
    (0, common_1.Post)("/status"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_retail_1_1_0_request_dto_1.Local_Retail110_Request_DTO]),
    __metadata("design:returntype", void 0)
], LocalRetailController110.prototype, "status", null);
__decorate([
    (0, common_1.Post)("/support"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_retail_1_1_0_request_dto_1.Local_Retail110_Request_DTO]),
    __metadata("design:returntype", void 0)
], LocalRetailController110.prototype, "support", null);
__decorate([
    (0, common_1.Post)("/track"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_retail_1_1_0_request_dto_1.Local_Retail110_Request_DTO]),
    __metadata("design:returntype", void 0)
], LocalRetailController110.prototype, "track", null);
__decorate([
    (0, common_1.Post)("/update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_retail_1_1_0_request_dto_1.Local_Retail110_Request_DTO]),
    __metadata("design:returntype", void 0)
], LocalRetailController110.prototype, "update", null);
LocalRetailController110 = __decorate([
    (0, common_1.Controller)("retail/1.1.0"),
    __metadata("design:paramtypes", [local_retail_service_1.LocalRetailService])
], LocalRetailController110);
exports.LocalRetailController110 = LocalRetailController110;
//# sourceMappingURL=local-retail.controller-1-1-0.js.map