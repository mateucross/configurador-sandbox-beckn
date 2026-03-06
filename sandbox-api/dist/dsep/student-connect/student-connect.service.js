"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentConnectService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../common/constants");
const uuid_1 = require("uuid");
const cancelResponse = require("./response/response.cancel.json");
const confirmResponse = require("./response/response.confirm.json");
const initResponse = require("./response/response.init.json");
const searchResponse = require("./response/response.search.json");
const selectResponsePhsical = require("./response/response.select-physical.json");
const selectResponseVirtual = require("./response/response.select-virtual.json");
const statusResonse = require("./response/response.status.json");
const updateResponseSlot = require("./response/response.update-booking-slot.json");
const updateResponsePersonal = require("./response/response.update-person-details.json");
let StudentConnectService = class StudentConnectService {
    constructor() {
        this.search = (request) => {
            this.processResponse(searchResponse, request);
            return searchResponse;
        };
        this.select = (request) => {
            var _a, _b, _c, _d;
            const fulfillmentId = (_d = (_c = (_b = (_a = request === null || request === void 0 ? void 0 : request.message) === null || _a === void 0 ? void 0 : _a.order) === null || _b === void 0 ? void 0 : _b.fulfillments[0]) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : "";
            var response;
            if (fulfillmentId == "ful-02") {
                response = selectResponsePhsical;
            }
            else {
                response = selectResponseVirtual;
            }
            this.processResponse(response, request);
            return response;
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
            return null;
        };
        this.cancel = (request) => {
            var _a;
            this.processResponse(cancelResponse, request);
            cancelResponse.message.order.id = (_a = request === null || request === void 0 ? void 0 : request.message) === null || _a === void 0 ? void 0 : _a.order_id;
            return cancelResponse;
        };
        this.update = (request) => {
            var _a, _b;
            const updateTarget = (_b = (_a = request === null || request === void 0 ? void 0 : request.message) === null || _a === void 0 ? void 0 : _a.update_target) !== null && _b !== void 0 ? _b : "";
            var response;
            if (updateTarget.includes("time")) {
                response = updateResponseSlot;
            }
            else {
                response = updateResponsePersonal;
            }
            this.processResponse(response, request);
            return response;
        };
        this.rating = (request) => {
            return null;
        };
        this.support = (request) => {
            return null;
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
StudentConnectService = __decorate([
    (0, common_1.Injectable)()
], StudentConnectService);
exports.StudentConnectService = StudentConnectService;
//# sourceMappingURL=student-connect.service.js.map