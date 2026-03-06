"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GercomCoursesService = void 0;
const common_1 = require("@nestjs/common");
const SearchResponse = require("./response/response.searchByCategorySchool.json");
const InitResponse = require("./response/response.init.json");
const ConfirmResponse = require("./response/response.confirm.json");
const SelectResponse = require("./response/response.select.json");
const StatusResponse = require("./response/response.status.json");
const UpdateResponse = require("./response/response.update.json");
const SupportResponse = require("./response/response.support.json");
const RatingResponse = require("./response/response.rating.json");
const CancelResponse = require("./response/response.cancel.json");
const TrackResponse = require("./response/response.track.json");
let GercomCoursesService = class GercomCoursesService {
    constructor() {
        this.search = (dsepRequestDto) => {
            return SearchResponse;
        };
        this.select = (dsepRequestDto) => {
            return SelectResponse;
        };
        this.init = (dsepRequestDto) => {
            return InitResponse;
        };
        this.confirm = (dsepRequestDto) => {
            return ConfirmResponse;
        };
        this.status = (dsepRequestDto) => {
            var _a;
            StatusResponse.message.order.id = (_a = dsepRequestDto === null || dsepRequestDto === void 0 ? void 0 : dsepRequestDto.message) === null || _a === void 0 ? void 0 : _a.order_id;
            console.log("confirmResponse=====>", StatusResponse);
            return StatusResponse;
        };
        this.cancel = (dsepRequestDto) => {
            return CancelResponse;
        };
        this.update = (dsepRequestDto) => {
            return UpdateResponse;
        };
        this.support = (dsepRequestDto) => {
            return SupportResponse;
        };
        this.rating = (dsepRequestDto) => {
            return RatingResponse;
        };
        this.track = (dsepRequestDto) => {
            return TrackResponse;
        };
    }
};
GercomCoursesService = __decorate([
    (0, common_1.Injectable)()
], GercomCoursesService);
exports.GercomCoursesService = GercomCoursesService;
