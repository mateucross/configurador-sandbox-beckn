"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PharmacyApiService = void 0;
const common_1 = require("@nestjs/common");
const cancelResponse = require("./response/response.cancel.json");
const confirmResponse = require("./response/response.confirm.json");
const initResponse = require("./response/response.init.json");
const searchResponse = require("./response/response.search.json");
const selectResponse = require("./response/response.select.json");
const statusResonse = require("./response/response.status.json");
const supportResponse = require("./response/response.support.json");
const ratingResponse = require("./response/response.rating.json");
const updateResponse = require("./response/response.update.json");
const trackResponse = require("./response/response.track.json");
let PharmacyApiService = class PharmacyApiService {
    constructor() {
        this.search = function () {
            return searchResponse;
        };
        this.select = function () {
            return selectResponse;
        };
        this.init = function () {
            return initResponse;
        };
        this.confirm = function () {
            return confirmResponse;
        };
        this.status = function () {
            return statusResonse;
        };
        this.track = function () {
            return trackResponse;
        };
        this.cancel = function () {
            return cancelResponse;
        };
        this.update = function () {
            return updateResponse;
        };
        this.rating = function () {
            return ratingResponse;
        };
        this.support = function () {
            return supportResponse;
        };
    }
};
PharmacyApiService = __decorate([
    (0, common_1.Injectable)()
], PharmacyApiService);
exports.PharmacyApiService = PharmacyApiService;
//# sourceMappingURL=pharmacy-api.service.js.map