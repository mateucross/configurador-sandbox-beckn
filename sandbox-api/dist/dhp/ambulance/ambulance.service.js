"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbulanceService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../common/constants");
const uuid_1 = require("uuid");
const cancelResponse = require("./response/response.cancel.json");
const confirmResponse = require("./response/response.confirm.json");
const initResponse = require("./response/response.init.json");
const searchResponse = require("./response/response.search.json");
const selectResponse = require("./response/response.select.json");
const statusResonse = require("./response/response.status.json");
const ratingResponse = require("./response/response.rating.json");
const supportResponse = require("./response/response.support.json");
const updateResponse = require("./response/response.update.json");
const trackResponse = require("./response/response.track.json");
let AmbulanceService = class AmbulanceService {
    constructor() {
        this.search = (request) => {
            this.processResponse(searchResponse, request);
            return searchResponse;
        };
        this.select = (request) => {
            this.processResponse(selectResponse, request);
            return selectResponse;
        };
        this.init = (request) => {
            this.processResponse(initResponse, request);
            return initResponse;
        };
        this.confirm = (request) => {
            this.processResponse(confirmResponse, request);
            confirmResponse.message.order.id = (0, uuid_1.v4)();
            return confirmResponse;
        };
        this.status = (request) => {
            var _a;
            this.processResponse(statusResonse, request);
            statusResonse.message.order.id = (_a = request === null || request === void 0 ? void 0 : request.message) === null || _a === void 0 ? void 0 : _a.order_id;
            return statusResonse;
        };
        this.track = (request) => {
            this.processResponse(trackResponse, request);
            return trackResponse;
        };
        this.cancel = (request) => {
            var _a;
            this.processResponse(cancelResponse, request);
            cancelResponse.message.order.id = (_a = request === null || request === void 0 ? void 0 : request.message) === null || _a === void 0 ? void 0 : _a.order_id;
            return cancelResponse;
        };
        this.update = (request) => {
            var _a;
            this.processResponse(updateResponse, request);
            updateResponse.message.order.id = (_a = request === null || request === void 0 ? void 0 : request.message) === null || _a === void 0 ? void 0 : _a.order_id;
            return updateResponse;
        };
        this.rating = (request) => {
            this.processResponse(ratingResponse, request);
            return ratingResponse;
        };
        this.support = (request) => {
            this.processResponse(supportResponse, request);
            return supportResponse;
        };
    }
    processResponse(response, request) {
        response.context.bpp_id = constants_1.BPP_ID;
        response.context.bpp_uri = constants_1.BPP_URI;
        response.context.bap_id = request.context.bap_id;
        response.context.bap_uri = request.context.bap_uri;
        return response;
    }
};
AmbulanceService = __decorate([
    (0, common_1.Injectable)()
], AmbulanceService);
exports.AmbulanceService = AmbulanceService;
//# sourceMappingURL=ambulance.service.js.map