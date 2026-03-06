"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ODRService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../common/constants");
const CancelResponse = require("./response/cancel.response.json");
const SearchResponse = require("./response/search.response.json");
const SelectResponse = require("./response/select.response.json");
const ConfirmResponse = require("./response/confirm.response.json");
const RatingResponse = require("./response/rating.response.json");
const SupportResponse = require("./response/support.response.json");
const TrackResponse = require("./response/track.response.json");
const InitConsentResponse = require("./response/init-consent-form.response.json");
const InitDisputeResponse = require("./response/init-dispute-details.response.json");
const InitRespondentResponse = require("./response/init-respondent.response.json");
const StatusCompletedResponse = require("./response/status-completed.response.json");
const StatusInProgressPaymentResponse = require("./response/status-in-progress-payment-after-hearing.response.json");
const StatusInProgressResponse = require("./response/status-in-progress.response.json");
const UpdateAgentResponse = require("./response/update-agent.response.json");
const UpdateHearingDateResponse = require("./response/update-hearing-date.response.json");
const uuid_1 = require("uuid");
let ODRService = class ODRService {
    constructor() {
        this.search = (odrRequest) => {
            SearchResponse.context.bpp_id = constants_1.BPP_ID;
            SearchResponse.context.bpp_uri = constants_1.BPP_URI;
            SearchResponse.context.bap_id = odrRequest.context.bap_id;
            SearchResponse.context.bap_uri = odrRequest.context.bap_uri;
            return SearchResponse;
        };
        this.select = (odrRequest) => {
            console.log("In Select Request");
            SelectResponse.context.bpp_id = constants_1.BPP_ID;
            SelectResponse.context.bpp_uri = constants_1.BPP_URI;
            SelectResponse.context.bap_id = odrRequest.context.bap_id;
            SelectResponse.context.bap_uri = odrRequest.context.bap_uri;
            return SelectResponse;
        };
        this.init = (odrRequest) => {
            var _a, _b, _c, _d, _e, _f;
            const { message } = odrRequest;
            console.log("In Init Request");
            const initConsent = (_b = (_a = message === null || message === void 0 ? void 0 : message.order) === null || _a === void 0 ? void 0 : _a.tags) === null || _b === void 0 ? void 0 : _b.find(tag => { var _a; return ((_a = tag === null || tag === void 0 ? void 0 : tag.descriptor) === null || _a === void 0 ? void 0 : _a.name) === "consent-form"; });
            const initDispute = (_d = (_c = message === null || message === void 0 ? void 0 : message.order) === null || _c === void 0 ? void 0 : _c.tags) === null || _d === void 0 ? void 0 : _d.find(tag => { var _a; return ((_a = tag === null || tag === void 0 ? void 0 : tag.descriptor) === null || _a === void 0 ? void 0 : _a.name) === "dispute-details"; });
            const initRespondent = (_f = (_e = message === null || message === void 0 ? void 0 : message.order) === null || _e === void 0 ? void 0 : _e.tags) === null || _f === void 0 ? void 0 : _f.find(tag => { var _a; return ((_a = tag === null || tag === void 0 ? void 0 : tag.descriptor) === null || _a === void 0 ? void 0 : _a.name) === "respondent"; });
            if (initConsent) {
                InitConsentResponse.context.bpp_id = constants_1.BPP_ID;
                InitConsentResponse.context.bpp_uri = constants_1.BPP_URI;
                InitConsentResponse.context.bap_id = odrRequest.context.bap_id;
                InitConsentResponse.context.bap_uri = odrRequest.context.bap_uri;
                return InitConsentResponse;
            }
            if (initDispute) {
                InitDisputeResponse.context.bpp_id = constants_1.BPP_ID;
                InitDisputeResponse.context.bpp_uri = constants_1.BPP_URI;
                InitDisputeResponse.context.bap_id = odrRequest.context.bap_id;
                InitDisputeResponse.context.bap_uri = odrRequest.context.bap_uri;
                return InitDisputeResponse;
            }
            if (initRespondent) {
                InitRespondentResponse.context.bpp_id = constants_1.BPP_ID;
                InitRespondentResponse.context.bpp_uri = constants_1.BPP_URI;
                InitRespondentResponse.context.bap_id = odrRequest.context.bap_id;
                InitRespondentResponse.context.bap_uri = odrRequest.context.bap_uri;
                return InitRespondentResponse;
            }
        };
        this.confirm = (odrRequest) => {
            console.log("In Confirm Request");
            ConfirmResponse.context.bpp_id = constants_1.BPP_ID;
            ConfirmResponse.context.bpp_uri = constants_1.BPP_URI;
            ConfirmResponse.context.bap_id = odrRequest.context.bap_id;
            ConfirmResponse.context.bap_uri = odrRequest.context.bap_uri;
            ConfirmResponse.message.order.id = (0, uuid_1.v4)();
            return ConfirmResponse;
        };
        this.status = (odrRequest) => {
            var _a, _b, _c;
            console.log("In Status Request");
            const { context } = odrRequest;
            const statusCompleted = (context === null || context === void 0 ? void 0 : context.key) === "completed";
            const statusInProgressPayment = (context === null || context === void 0 ? void 0 : context.key) === "in-progress-payment-after-hearing";
            const statusInProgress = (context === null || context === void 0 ? void 0 : context.key) === "in-progress";
            if (statusCompleted) {
                StatusCompletedResponse.context.bpp_id = constants_1.BPP_ID;
                StatusCompletedResponse.context.bpp_uri = constants_1.BPP_URI;
                StatusCompletedResponse.context.bap_id = odrRequest.context.bap_id;
                StatusCompletedResponse.context.bap_uri = odrRequest.context.bap_uri;
                StatusCompletedResponse.message.order.id = (_a = odrRequest === null || odrRequest === void 0 ? void 0 : odrRequest.message) === null || _a === void 0 ? void 0 : _a.order_id;
                return StatusCompletedResponse;
            }
            if (statusInProgressPayment) {
                StatusInProgressPaymentResponse.context.bpp_id = constants_1.BPP_ID;
                StatusInProgressPaymentResponse.context.bpp_uri = constants_1.BPP_URI;
                StatusInProgressPaymentResponse.context.bap_id = odrRequest.context.bap_id;
                StatusInProgressPaymentResponse.context.bap_uri = odrRequest.context.bap_uri;
                StatusInProgressPaymentResponse.message.order.id = (_b = odrRequest === null || odrRequest === void 0 ? void 0 : odrRequest.message) === null || _b === void 0 ? void 0 : _b.order_id;
                return StatusInProgressPaymentResponse;
            }
            if (statusInProgress) {
                StatusInProgressResponse.context.bpp_id = constants_1.BPP_ID;
                StatusInProgressResponse.context.bpp_uri = constants_1.BPP_URI;
                StatusInProgressResponse.context.bap_id = odrRequest.context.bap_id;
                StatusInProgressResponse.context.bap_uri = odrRequest.context.bap_uri;
                StatusInProgressResponse.message.order.id = (_c = odrRequest === null || odrRequest === void 0 ? void 0 : odrRequest.message) === null || _c === void 0 ? void 0 : _c.order_id;
                return StatusInProgressResponse;
            }
        };
        this.cancel = (odrRequest) => {
            CancelResponse.context.bpp_id = constants_1.BPP_ID;
            CancelResponse.context.bpp_uri = constants_1.BPP_URI;
            CancelResponse.context.bap_id = odrRequest.context.bap_id;
            CancelResponse.context.bap_uri = odrRequest.context.bap_uri;
            return CancelResponse;
        };
        this.support = (odrRequest) => {
            SupportResponse.context.bpp_id = constants_1.BPP_ID;
            SupportResponse.context.bpp_uri = constants_1.BPP_URI;
            SupportResponse.context.bap_id = odrRequest.context.bap_id;
            SupportResponse.context.bap_uri = odrRequest.context.bap_uri;
            return SupportResponse;
        };
        this.rating = (odrRequest) => {
            RatingResponse.context.bpp_id = constants_1.BPP_ID;
            RatingResponse.context.bpp_uri = constants_1.BPP_URI;
            RatingResponse.context.bap_id = odrRequest.context.bap_id;
            RatingResponse.context.bap_uri = odrRequest.context.bap_uri;
            return RatingResponse;
        };
        this.update = (odrRequest) => {
            var _a, _b, _c, _d;
            const { message } = odrRequest;
            const updateAgent = (_b = (_a = message === null || message === void 0 ? void 0 : message.order) === null || _a === void 0 ? void 0 : _a.tags) === null || _b === void 0 ? void 0 : _b.find(tag => { var _a; return ((_a = tag === null || tag === void 0 ? void 0 : tag.descriptor) === null || _a === void 0 ? void 0 : _a.name) === "agent"; });
            const updateHearingDate = (_d = (_c = message === null || message === void 0 ? void 0 : message.order) === null || _c === void 0 ? void 0 : _c.tags) === null || _d === void 0 ? void 0 : _d.find(tag => { var _a; return ((_a = tag === null || tag === void 0 ? void 0 : tag.descriptor) === null || _a === void 0 ? void 0 : _a.name) === "hearing-date"; });
            if (updateAgent) {
                UpdateAgentResponse.context.bpp_id = constants_1.BPP_ID;
                UpdateAgentResponse.context.bpp_uri = constants_1.BPP_URI;
                UpdateAgentResponse.context.bap_id = odrRequest.context.bap_id;
                UpdateAgentResponse.context.bap_uri = odrRequest.context.bap_uri;
                return UpdateAgentResponse;
            }
            if (updateHearingDate) {
                UpdateHearingDateResponse.context.bpp_id = constants_1.BPP_ID;
                UpdateHearingDateResponse.context.bpp_uri = constants_1.BPP_URI;
                UpdateHearingDateResponse.context.bap_id = odrRequest.context.bap_id;
                UpdateHearingDateResponse.context.bap_uri = odrRequest.context.bap_uri;
                return UpdateHearingDateResponse;
            }
        };
        this.track = (odrRequest) => {
            TrackResponse.context.bpp_id = constants_1.BPP_ID;
            TrackResponse.context.bpp_uri = constants_1.BPP_URI;
            TrackResponse.context.bap_id = odrRequest.context.bap_id;
            TrackResponse.context.bap_uri = odrRequest.context.bap_uri;
            return TrackResponse;
        };
    }
};
ODRService = __decorate([
    (0, common_1.Injectable)()
], ODRService);
exports.ODRService = ODRService;
//# sourceMappingURL=odr.service.js.map