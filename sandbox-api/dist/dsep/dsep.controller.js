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
exports.DsepController = void 0;
const common_1 = require("@nestjs/common");
const request_dto_1 = require("./dto/request.dto");
const dsep_service_1 = require("./dsep.service");
let DsepController = class DsepController {
    constructor(dsepService) {
        this.dsepService = dsepService;
    }
    search(dsepRequest) {
        return this.dsepService.get(dsepRequest.context.domain).search(dsepRequest);
    }
    select(dsepRequest) {
        return this.dsepService.get(dsepRequest.context.domain).select(dsepRequest);
    }
    init(dsepRequest) {
        return this.dsepService.get(dsepRequest.context.domain).init(dsepRequest);
    }
    confirm(dsepRequest) {
        return this.dsepService.get(dsepRequest.context.domain).confirm(dsepRequest);
    }
    support(dsepRequest) {
        return this.dsepService.get(dsepRequest.context.domain).support(dsepRequest);
    }
    cancel(dsepRequest) {
        return this.dsepService.get(dsepRequest.context.domain).cancel(dsepRequest);
    }
    rating(dsepRequest) {
        return this.dsepService.get(dsepRequest.context.domain).rating(dsepRequest);
    }
    update(dsepRequest) {
        return this.dsepService.get(dsepRequest.context.domain).update(dsepRequest);
    }
    status(dsepRequest) {
        return this.dsepService.get(dsepRequest.context.domain).status(dsepRequest);
    }
    track(dsepRequest) {
        return this.dsepService.get(dsepRequest.context.domain).track(dsepRequest);
    }
};
__decorate([
    (0, common_1.Post)("/search"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DSEPRequestDto]),
    __metadata("design:returntype", void 0)
], DsepController.prototype, "search", null);
__decorate([
    (0, common_1.Post)("/select"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DSEPRequestDto]),
    __metadata("design:returntype", void 0)
], DsepController.prototype, "select", null);
__decorate([
    (0, common_1.Post)("/init"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DSEPRequestDto]),
    __metadata("design:returntype", void 0)
], DsepController.prototype, "init", null);
__decorate([
    (0, common_1.Post)("/confirm"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DSEPRequestDto]),
    __metadata("design:returntype", void 0)
], DsepController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)("/support"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DSEPRequestDto]),
    __metadata("design:returntype", void 0)
], DsepController.prototype, "support", null);
__decorate([
    (0, common_1.Post)("/cancel"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DSEPRequestDto]),
    __metadata("design:returntype", void 0)
], DsepController.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)("/rating"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DSEPRequestDto]),
    __metadata("design:returntype", void 0)
], DsepController.prototype, "rating", null);
__decorate([
    (0, common_1.Post)("/update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DSEPRequestDto]),
    __metadata("design:returntype", void 0)
], DsepController.prototype, "update", null);
__decorate([
    (0, common_1.Post)("/status"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DSEPRequestDto]),
    __metadata("design:returntype", void 0)
], DsepController.prototype, "status", null);
__decorate([
    (0, common_1.Post)("/track"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DSEPRequestDto]),
    __metadata("design:returntype", void 0)
], DsepController.prototype, "track", null);
DsepController = __decorate([
    (0, common_1.Controller)("dsep"),
    __metadata("design:paramtypes", [dsep_service_1.DsepService])
], DsepController);
exports.DsepController = DsepController;
//# sourceMappingURL=dsep.controller.js.map