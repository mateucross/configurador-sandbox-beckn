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
exports.Industry40Controller = void 0;
const common_1 = require("@nestjs/common");
const industry_4_0_service_1 = require("./industry-4.0.service");
const request_dto_1 = require("./dto/request.dto");
const industry_4_0_modules_enum_1 = require("./industry-4.0-modules.enum");
let Industry40Controller = class Industry40Controller {
    constructor(industry40Service) {
        this.industry40Service = industry40Service;
    }
    search(industry40Request) {
        return this.industry40Service.get(industry40Request.context.domain).search(industry40Request);
    }
    init(industry40Request) {
        return this.industry40Service.get(industry40Request.context.domain).init(industry40Request);
    }
    cancel(industry40Request) {
        return this.industry40Service.get(industry40Request.context.domain).cancel(industry40Request);
    }
    confirm(industry40Request) {
        return this.industry40Service.get(industry40Request.context.domain).confirm(industry40Request);
    }
    rating(industry40Request) {
        return this.industry40Service.get(industry40Request.context.domain).rating(industry40Request);
    }
    select(industry40Request) {
        return this.industry40Service.get(industry40Request.context.domain).select(industry40Request);
    }
    status(industry40Request) {
        return this.industry40Service.get(industry40Request.context.domain).status(industry40Request);
    }
    support(industry40Request) {
        return this.industry40Service.get(industry40Request.context.domain).support(industry40Request);
    }
    track(industry40Request) {
        return this.industry40Service.get(industry40Request.context.domain).track(industry40Request);
    }
    update(industry40Request) {
        return this.industry40Service.get(industry40Request.context.domain).update(industry40Request);
    }
    getForm(industry40FormQuery) {
        return this.industry40Service.get(industry40FormQuery.domain).getForm();
    }
    submitForm(xinputFormBody) {
        return this.industry40Service.get(industry_4_0_modules_enum_1.Industry4_0ENUM.ASSEMBLY).submitForm(xinputFormBody);
    }
};
__decorate([
    (0, common_1.Post)("/search"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.Industry_4_0_Request_DTO]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "search", null);
__decorate([
    (0, common_1.Post)("/init"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.Industry_4_0_Request_DTO]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "init", null);
__decorate([
    (0, common_1.Post)("/cancel"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.Industry_4_0_Request_DTO]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)("/confirm"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.Industry_4_0_Request_DTO]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)("/rating"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.Industry_4_0_Request_DTO]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "rating", null);
__decorate([
    (0, common_1.Post)("/select"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.Industry_4_0_Request_DTO]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "select", null);
__decorate([
    (0, common_1.Post)("/status"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.Industry_4_0_Request_DTO]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "status", null);
__decorate([
    (0, common_1.Post)("/support"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.Industry_4_0_Request_DTO]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "support", null);
__decorate([
    (0, common_1.Post)("/track"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.Industry_4_0_Request_DTO]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "track", null);
__decorate([
    (0, common_1.Post)("/update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.Industry_4_0_Request_DTO]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "update", null);
__decorate([
    (0, common_1.Get)("/form"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "getForm", null);
__decorate([
    (0, common_1.Post)("/formsubmit"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Industry40Controller.prototype, "submitForm", null);
Industry40Controller = __decorate([
    (0, common_1.Controller)("industry-4.0"),
    __metadata("design:paramtypes", [industry_4_0_service_1.Industry40Service])
], Industry40Controller);
exports.Industry40Controller = Industry40Controller;
//# sourceMappingURL=industry-4.0.controller.js.map