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
exports.DentController = void 0;
const common_1 = require("@nestjs/common");
const request_dto_1 = require("./dto/request.dto");
const dent_service_1 = require("./dent.service");
let DentController = class DentController {
    constructor(service) {
        this.service = service;
    }
    search(dentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).search(dentRequestDto);
    }
    select(dentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).select(dentRequestDto);
    }
    init(dentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).init(dentRequestDto);
    }
    confirm(dentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).confirm(dentRequestDto);
    }
    status(dentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).status(dentRequestDto);
    }
    track(dentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).track(dentRequestDto);
    }
    cancel(dentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).cancel(dentRequestDto);
    }
    support(dentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).support(dentRequestDto);
    }
    update(dentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).update(dentRequestDto);
    }
    rating(dentRequestDto) {
        return this.service.get(dentRequestDto.context.domain).rating(dentRequestDto);
    }
};
__decorate([
    (0, common_1.Post)("/search"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DentRequestDto]),
    __metadata("design:returntype", void 0)
], DentController.prototype, "search", null);
__decorate([
    (0, common_1.Post)("/select"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DentRequestDto]),
    __metadata("design:returntype", void 0)
], DentController.prototype, "select", null);
__decorate([
    (0, common_1.Post)("/init"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DentRequestDto]),
    __metadata("design:returntype", void 0)
], DentController.prototype, "init", null);
__decorate([
    (0, common_1.Post)("/confirm"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DentRequestDto]),
    __metadata("design:returntype", void 0)
], DentController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)("/status"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DentRequestDto]),
    __metadata("design:returntype", void 0)
], DentController.prototype, "status", null);
__decorate([
    (0, common_1.Post)("/track"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DentRequestDto]),
    __metadata("design:returntype", void 0)
], DentController.prototype, "track", null);
__decorate([
    (0, common_1.Post)("/cancel"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DentRequestDto]),
    __metadata("design:returntype", void 0)
], DentController.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)("/support"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DentRequestDto]),
    __metadata("design:returntype", void 0)
], DentController.prototype, "support", null);
__decorate([
    (0, common_1.Post)("/update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DentRequestDto]),
    __metadata("design:returntype", void 0)
], DentController.prototype, "update", null);
__decorate([
    (0, common_1.Post)("/rating"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.DentRequestDto]),
    __metadata("design:returntype", void 0)
], DentController.prototype, "rating", null);
DentController = __decorate([
    (0, common_1.Controller)("/dent"),
    __metadata("design:paramtypes", [dent_service_1.DentService])
], DentController);
exports.DentController = DentController;
//# sourceMappingURL=dent.controller.js.map