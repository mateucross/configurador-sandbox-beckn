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
exports.ODRController = void 0;
const common_1 = require("@nestjs/common");
const odr_dto_1 = require("./dto/odr.dto");
const odr_service_1 = require("./odr.service");
let ODRController = class ODRController {
    constructor(odrService) {
        this.odrService = odrService;
    }
    search(odrRequest) {
        return this.odrService.search(odrRequest);
    }
    select(odrRequest) {
        return this.odrService.select(odrRequest);
    }
    init(odrRequest) {
        return this.odrService.init(odrRequest);
    }
    confirm(odrRequest) {
        return this.odrService.confirm(odrRequest);
    }
    support(odrRequest) {
        return this.odrService.support(odrRequest);
    }
    cancel(odrRequest) {
        return this.odrService.cancel(odrRequest);
    }
    rating(odrRequest) {
        return this.odrService.rating(odrRequest);
    }
    update(odrRequest) {
        return this.odrService.update(odrRequest);
    }
    status(odrRequest) {
        return this.odrService.status(odrRequest);
    }
    track(odrRequest) {
        return this.odrService.track(odrRequest);
    }
};
__decorate([
    (0, common_1.Post)("/search"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [odr_dto_1.ODRClientDTO]),
    __metadata("design:returntype", void 0)
], ODRController.prototype, "search", null);
__decorate([
    (0, common_1.Post)("/select"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [odr_dto_1.ODRClientDTO]),
    __metadata("design:returntype", void 0)
], ODRController.prototype, "select", null);
__decorate([
    (0, common_1.Post)("/init"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [odr_dto_1.ODRClientDTO]),
    __metadata("design:returntype", void 0)
], ODRController.prototype, "init", null);
__decorate([
    (0, common_1.Post)("/confirm"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [odr_dto_1.ODRClientDTO]),
    __metadata("design:returntype", void 0)
], ODRController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)("/support"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [odr_dto_1.ODRClientDTO]),
    __metadata("design:returntype", void 0)
], ODRController.prototype, "support", null);
__decorate([
    (0, common_1.Post)("/cancel"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [odr_dto_1.ODRClientDTO]),
    __metadata("design:returntype", void 0)
], ODRController.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)("/rating"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [odr_dto_1.ODRClientDTO]),
    __metadata("design:returntype", void 0)
], ODRController.prototype, "rating", null);
__decorate([
    (0, common_1.Post)("/update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [odr_dto_1.ODRClientDTO]),
    __metadata("design:returntype", void 0)
], ODRController.prototype, "update", null);
__decorate([
    (0, common_1.Post)("/status"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [odr_dto_1.ODRClientDTO]),
    __metadata("design:returntype", void 0)
], ODRController.prototype, "status", null);
__decorate([
    (0, common_1.Post)("/track"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [odr_dto_1.ODRClientDTO]),
    __metadata("design:returntype", void 0)
], ODRController.prototype, "track", null);
ODRController = __decorate([
    (0, common_1.Controller)("odr"),
    __metadata("design:paramtypes", [odr_service_1.ODRService])
], ODRController);
exports.ODRController = ODRController;
//# sourceMappingURL=odr.controller.js.map