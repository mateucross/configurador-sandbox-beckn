"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetailService110 = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../common/constants");
const SearchResponse = require("./response/response.search.json");
const InitResponse = require("./response/response.init.json");
const ConfirmResponse = require("./response/response.confirm.json");
const SelectResponse = require("./response/response.select.json");
const StatusResponse = require("./response/response.status.json");
const UpdateResponse = require("./response/response.update.json");
const SupportResponse = require("./response/response.support.json");
const CancelResponse = require("./response/response.cancel.json");
const TrackResponse = require("./response/response.track.json");
const RatingResponse = require("./response/response.rating.json");
let RetailService110 = class RetailService110 {
    constructor() {
        this.search = (request_DTO) => {
            SearchResponse.context.bpp_id = constants_1.BPP_ID;
            SearchResponse.context.bpp_uri = constants_1.BPP_URI;
            return SearchResponse;
        };
        this.select = (request_DTO) => {
            SelectResponse.context.bpp_id = constants_1.BPP_ID;
            SelectResponse.context.bpp_uri = constants_1.BPP_URI;
            return SelectResponse;
        };
        this.init = (request_DTO) => {
            InitResponse.context.bpp_id = constants_1.BPP_ID;
            InitResponse.context.bpp_uri = constants_1.BPP_URI;
            return InitResponse;
        };
        this.confirm = (request_DTO) => {
            ConfirmResponse.context.bpp_id = constants_1.BPP_ID;
            ConfirmResponse.context.bpp_uri = constants_1.BPP_URI;
            return ConfirmResponse;
        };
        this.status = (request_DTO) => {
            StatusResponse.context.bpp_id = constants_1.BPP_ID;
            StatusResponse.context.bpp_uri = constants_1.BPP_URI;
            return StatusResponse;
        };
        this.cancel = (request_DTO) => {
            CancelResponse.context.bpp_id = constants_1.BPP_ID;
            CancelResponse.context.bpp_uri = constants_1.BPP_URI;
            return CancelResponse;
        };
        this.update = (request_DTO) => {
            UpdateResponse.context.bpp_id = constants_1.BPP_ID;
            UpdateResponse.context.bpp_uri = constants_1.BPP_URI;
            return UpdateResponse;
        };
        this.support = (request_DTO) => {
            SupportResponse.context.bpp_id = constants_1.BPP_ID;
            SupportResponse.context.bpp_uri = constants_1.BPP_URI;
            return SupportResponse;
        };
        this.rating = (request_DTO) => {
            RatingResponse.context.bpp_id = constants_1.BPP_ID;
            RatingResponse.context.bpp_uri = constants_1.BPP_URI;
            return RatingResponse;
        };
        this.track = (request_DTO) => {
            TrackResponse.context.bpp_id = constants_1.BPP_ID;
            TrackResponse.context.bpp_uri = constants_1.BPP_URI;
            return TrackResponse;
        };
    }
};
RetailService110 = __decorate([
    (0, common_1.Injectable)()
], RetailService110);
exports.RetailService110 = RetailService110;
//# sourceMappingURL=retail.service-1-1-0.js.map