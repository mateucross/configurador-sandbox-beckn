"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsInternshipsService = void 0;
const common_1 = require("@nestjs/common");
const ConfirmResponse = require("./response/response.confirm.json");
const SearchWithTitleAndLocationReponse = require("./response/response.searchWithTitleAndLocation.json");
const SearchWithDeveloperTitle = require("./response/response.searchWithTitleDeveloper.json");
const SearchWithTitleEngineer = require("./response/response.searchWithTitleEngineer.json");
const SelectResponse = require("./response/response.select.json");
const StatusResponse = require("./response/response.status.json");
const InitResponse = require("./response/response.init.json");
const UpdateResponse = require("./response/response.update.json");
const SupportResponse = require("./response/response.support.json");
const RatingResponse = require("./response/response.rating.json");
const CancelResponse = require("./response/response.cancel.json");
const TrackResponse = require("./response/response.track.json");
const uuid_1 = require("uuid");
let JobsInternshipsService = class JobsInternshipsService {
    constructor() {
        this.search = (dsepRequestDto) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const { message } = dsepRequestDto;
            const isSearchWithTitleEngineer = ((_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.intent) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.descriptor) === null || _c === void 0 ? void 0 : _c.name) === "Engineer";
            const isSearchWithTitleAndLocation = !!((_f = (_e = (_d = message === null || message === void 0 ? void 0 : message.intent) === null || _d === void 0 ? void 0 : _d.item) === null || _e === void 0 ? void 0 : _e.descriptor) === null || _f === void 0 ? void 0 : _f.name) && !!((_h = (_g = message === null || message === void 0 ? void 0 : message.intent) === null || _g === void 0 ? void 0 : _g.item) === null || _h === void 0 ? void 0 : _h.location_id);
            if (isSearchWithTitleEngineer && !isSearchWithTitleAndLocation) {
                return SearchWithTitleEngineer;
            }
            if (isSearchWithTitleAndLocation) {
                return SearchWithTitleAndLocationReponse;
            }
            return SearchWithDeveloperTitle;
        };
        this.select = (dsepRequestDto) => {
            return SelectResponse;
        };
        this.init = (dsepRequestDto) => {
            return InitResponse;
        };
        this.confirm = (dsepRequestDto) => {
            ConfirmResponse.message.order.id = (0, uuid_1.v4)();
            console.log("confirmResponse=====>", ConfirmResponse);
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
JobsInternshipsService = __decorate([
    (0, common_1.Injectable)()
], JobsInternshipsService);
exports.JobsInternshipsService = JobsInternshipsService;
//# sourceMappingURL=jobs-internships.service.js.map