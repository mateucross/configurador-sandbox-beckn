"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Three_D_PrintingService = void 0;
const common_1 = require("@nestjs/common");
const SearchResponse = require("./response/response.search.json");
const InitResponse = require("./response/response.init.json");
const ConfirmResponse = require("./response/response.confirm.json");
const StatusResponseStatusDispatched = require("./response/response.status-dispatched.json");
const StatusResponseStatusPrinterSetup = require("./response/response.status-printer-setup.json");
const UpdateResponse = require("./response/response.update.json");
const SupportResponse = require("./response/response.support.json");
const CancelResponse = require("./response/response.cancel.json");
const TrackResponse = require("./response/response.track.json");
const RatingResponse = require("./response/response.rating.json");
const SelectResponse1 = require("./response/response.select-1.json");
const SelectResponse2 = require("./response/response.select-2.json");
let Three_D_PrintingService = class Three_D_PrintingService {
    constructor() {
        this.search = (industry_4_0_Request_DTO) => {
            return SearchResponse;
        };
        this.select = (industry_4_0_Request_DTO) => {
            var _a, _b, _c, _d, _e, _f;
            const Select1 = (_c = (_b = (_a = industry_4_0_Request_DTO === null || industry_4_0_Request_DTO === void 0 ? void 0 : industry_4_0_Request_DTO.message) === null || _a === void 0 ? void 0 : _a.order) === null || _b === void 0 ? void 0 : _b.tags) === null || _c === void 0 ? void 0 : _c.find((tag) => { var _a; return ((_a = tag === null || tag === void 0 ? void 0 : tag.descriptor) === null || _a === void 0 ? void 0 : _a.name) === "select-1"; });
            const Select2 = (_f = (_e = (_d = industry_4_0_Request_DTO === null || industry_4_0_Request_DTO === void 0 ? void 0 : industry_4_0_Request_DTO.message) === null || _d === void 0 ? void 0 : _d.order) === null || _e === void 0 ? void 0 : _e.tags) === null || _f === void 0 ? void 0 : _f.find((tag) => { var _a; return ((_a = tag === null || tag === void 0 ? void 0 : tag.descriptor) === null || _a === void 0 ? void 0 : _a.name) === "select-2"; });
            if (Select1) {
                return SelectResponse1;
            }
            if (Select2) {
                return SelectResponse2;
            }
        };
        this.init = (industry_4_0_Request_DTO) => {
            return InitResponse;
        };
        this.confirm = (industry_4_0_Request_DTO) => {
            return ConfirmResponse;
        };
        this.status = (industry_4_0_Request_DTO) => {
            var _a, _b;
            if (((_a = industry_4_0_Request_DTO === null || industry_4_0_Request_DTO === void 0 ? void 0 : industry_4_0_Request_DTO.context) === null || _a === void 0 ? void 0 : _a.key) === "dispatched") {
                return StatusResponseStatusDispatched;
            }
            else if (((_b = industry_4_0_Request_DTO === null || industry_4_0_Request_DTO === void 0 ? void 0 : industry_4_0_Request_DTO.context) === null || _b === void 0 ? void 0 : _b.key) === "printer-setup") {
                return StatusResponseStatusPrinterSetup;
            }
            return StatusResponseStatusDispatched;
        };
        this.cancel = (industry_4_0_Request_DTO) => {
            return CancelResponse;
        };
        this.update = (industry_4_0_Request_DTO) => {
            return UpdateResponse;
        };
        this.support = (industry_4_0_Request_DTO) => {
            return SupportResponse;
        };
        this.rating = (industry_4_0_Request_DTO) => {
            return RatingResponse;
        };
        this.track = (industry_4_0_Request_DTO) => {
            return TrackResponse;
        };
        this.getForm = () => {
            return {};
        };
        this.submitForm = (request) => {
            return {};
        };
    }
};
Three_D_PrintingService = __decorate([
    (0, common_1.Injectable)()
], Three_D_PrintingService);
exports.Three_D_PrintingService = Three_D_PrintingService;
//# sourceMappingURL=3D-printing.service.js.map