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
exports.MobilityController = void 0;
const common_1 = require("@nestjs/common");
const request_dto_1 = require("./dto/request.dto");
const mobility_service_1 = require("./mobility.service");
let MobilityController = class MobilityController {
    constructor(service) {
        this.service = service;
    }
    search(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).search(mobilityRequest);
    }
    select(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).select(mobilityRequest);
    }
    init(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).init(mobilityRequest);
    }
    confirm(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).confirm(mobilityRequest);
    }
    status(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).status(mobilityRequest);
    }
    track(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).track(mobilityRequest);
    }
    cancel(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).cancel(mobilityRequest);
    }
    update(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).update(mobilityRequest);
    }
    support(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).support(mobilityRequest);
    }
    rating(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).rating(mobilityRequest);
    }
    cancellationReasons(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).cancellationReasons(mobilityRequest);
    }
    ratingCategories(mobilityRequest) {
        return this.service.get(mobilityRequest.context.domain).ratingCategories(mobilityRequest);
    }
};
__decorate([
    (0, common_1.Post)("/search"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "search", null);
__decorate([
    (0, common_1.Post)("/select"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "select", null);
__decorate([
    (0, common_1.Post)("/init"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "init", null);
__decorate([
    (0, common_1.Post)("/confirm"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)("/status"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "status", null);
__decorate([
    (0, common_1.Post)("/track"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "track", null);
__decorate([
    (0, common_1.Post)("/cancel"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)("/update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "update", null);
__decorate([
    (0, common_1.Post)("/support"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "support", null);
__decorate([
    (0, common_1.Post)("/rating"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "rating", null);
__decorate([
    (0, common_1.Post)("/get_cancellation_reasons"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "cancellationReasons", null);
__decorate([
    (0, common_1.Post)("/get_rating_categories"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.MobilityRequestDto]),
    __metadata("design:returntype", void 0)
], MobilityController.prototype, "ratingCategories", null);
MobilityController = __decorate([
    (0, common_1.Controller)("/mobility"),
    __metadata("design:paramtypes", [mobility_service_1.MobilityService])
], MobilityController);
exports.MobilityController = MobilityController;
//# sourceMappingURL=mobility.controller.js.map