"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UmtcApiService = void 0;
const common_1 = require("@nestjs/common");
const cancelResponse = require("./response/response.cancel.json");
const confirmResponse = require("./response/response.confirm.json");
const initResponse = require("./response/response.init.json");
const ratingResponse = require("./response/response.rating.json");
const searchResponse = require("./response/response.search.json");
const selectResponse = require("./response/response.select.json");
const statusResonse = require("./response/response.status.json");
const supportResponse = require("./response/response.support.json");
const trackResponse = require("./response/response.track.json");
const updateResponse = require("./response/response.update.json");
const cancellationResponse = require("./response/response.cancellation_reasons.json");
const ratingCategories = require("./response/response.rating_categories.json");
let UmtcApiService = class UmtcApiService {
    constructor() {
        this.search = function (searchRequest) {
            return searchResponse;
        };
        this.select = function (selectRequestDto) {
            return selectResponse;
        };
        this.init = function (initRequestDto) {
            return initResponse;
        };
        this.confirm = function (confirmRequestDto) {
            return confirmResponse;
        };
        this.status = function (statusRequestDto) {
            return statusResonse;
        };
        this.track = function (trackRequest) {
            return trackResponse;
        };
        this.cancel = function (cancelRequest) {
            return cancelResponse;
        };
        this.update = function (updateRequest) {
            return updateResponse;
        };
        this.rating = function (ratingRequest) {
            return ratingResponse;
        };
        this.support = function (supportRequest) {
            return supportResponse;
        };
        this.cancellationReasons = function () {
            return cancellationResponse;
        };
        this.ratingCategories = function () {
            return ratingCategories;
        };
    }
};
UmtcApiService = __decorate([
    (0, common_1.Injectable)()
], UmtcApiService);
exports.UmtcApiService = UmtcApiService;
//# sourceMappingURL=umtc-api.service.js.map