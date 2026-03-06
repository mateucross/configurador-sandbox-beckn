"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVApiService = void 0;
const common_1 = require("@nestjs/common");
const cancelResponse = require("./response/response.cancel.json");
const confirmResponse = require("./response/response.confirm.json");
const initResponse = require("./response/response.init.json");
const searchResponse = require("./response/response.search.json");
const selectResponse = require("./response/response.select.json");
const statusResonse = require("./response/response.status.json");
const supportResponse = require("./response/response.support.json");
const ratingResponse = require("./response/response.rating.json");
const updateStartResponse = require("./response/response.update.start.json");
const updateEndResponse = require("./response/response.update.end.json");
const cancellationResponse = require("./response/response.cancel.json");
const ratingCategories = require("./response/response.rating.json");
let EVApiService = class EVApiService {
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
            return "";
        };
        this.cancel = function () {
            return cancelResponse;
        };
        this.update = function (updateDto) {
            var _a, _b, _c, _d, _e;
            if (((_e = (_d = (_c = (_b = (_a = updateDto.message) === null || _a === void 0 ? void 0 : _a.order) === null || _b === void 0 ? void 0 : _b.fulfillments[0]) === null || _c === void 0 ? void 0 : _c.state) === null || _d === void 0 ? void 0 : _d.descriptor) === null || _e === void 0 ? void 0 : _e.code) === "end-charging") {
                return updateEndResponse;
            }
            else {
                return updateStartResponse;
            }
        };
        this.rating = function () {
            return ratingResponse;
        };
        this.support = function () {
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
EVApiService = __decorate([
    (0, common_1.Injectable)()
], EVApiService);
exports.EVApiService = EVApiService;
//# sourceMappingURL=ev-api.service.js.map