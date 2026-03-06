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
exports.DHPController = void 0;
const common_1 = require("@nestjs/common");
const request_dto_1 = require("./dto/request.dto");
const dhp_service_1 = require("./dhp.service");
let DHPController = class DHPController {
    constructor(service) {
        this.service = service;
    }
    search(dHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).search(dHPRequestDto);
    }
    select(dHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).select(dHPRequestDto);
    }
    init(dHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).init(dHPRequestDto);
    }
    confirm(dHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).confirm(dHPRequestDto);
    }
    status(dHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).status(dHPRequestDto);
    }
    track(dHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).track(dHPRequestDto);
    }
    cancel(dHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).cancel(dHPRequestDto);
    }
    support(dHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).support(dHPRequestDto);
    }
    update(dHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).update(dHPRequestDto);
    }
    rating(dHPRequestDto) {
        return this.service.get(dHPRequestDto.context.domain).rating(dHPRequestDto);
    }
};
__decorate([
    (0, common_1.Post)("/search"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DHPRequestDto]),
    __metadata("design:returntype", void 0)
], DHPController.prototype, "search", null);
__decorate([
    (0, common_1.Post)("/select"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DHPRequestDto]),
    __metadata("design:returntype", void 0)
], DHPController.prototype, "select", null);
__decorate([
    (0, common_1.Post)("/init"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DHPRequestDto]),
    __metadata("design:returntype", void 0)
], DHPController.prototype, "init", null);
__decorate([
    (0, common_1.Post)("/confirm"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DHPRequestDto]),
    __metadata("design:returntype", void 0)
], DHPController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)("/status"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DHPRequestDto]),
    __metadata("design:returntype", void 0)
], DHPController.prototype, "status", null);
__decorate([
    (0, common_1.Post)("/track"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DHPRequestDto]),
    __metadata("design:returntype", void 0)
], DHPController.prototype, "track", null);
__decorate([
    (0, common_1.Post)("/cancel"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DHPRequestDto]),
    __metadata("design:returntype", void 0)
], DHPController.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)("/support"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DHPRequestDto]),
    __metadata("design:returntype", void 0)
], DHPController.prototype, "support", null);
__decorate([
    (0, common_1.Post)("/update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DHPRequestDto]),
    __metadata("design:returntype", void 0)
], DHPController.prototype, "update", null);
__decorate([
    (0, common_1.Post)("/rating"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DHPRequestDto]),
    __metadata("design:returntype", void 0)
], DHPController.prototype, "rating", null);
DHPController = __decorate([
    (0, common_1.Controller)("/dhp"),
    __metadata("design:paramtypes", [dhp_service_1.DHPService])
], DHPController);
exports.DHPController = DHPController;
//# sourceMappingURL=dhp.controller.js.map