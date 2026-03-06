"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AppService = class AppService {
    async webhookService(body, ownAddress) {
        var _a, _b, _c;
        try {
            if (body.context.action.includes("on_")) {
                return;
            }
            let domainPath = "";
            if (body.context.domain.includes("financial") && !body.context.domain.includes("onest")) {
                domainPath = `financial-services`;
            }
            else if (body.context.domain.includes("dsep") || body.context.domain.includes("onest")) {
                domainPath = `dsep`;
            }
            else if (body.context.domain.includes("dent")) {
                domainPath = `dent`;
            }
            else if (body.context.domain.includes("dhp")) {
                domainPath = `dhp`;
            }
            else if (body.context.domain.includes("supply-chain-services")) {
                domainPath = `industry-4.0`;
            }
            else if (body.context.domain === "online-dispute-resolution:0.1.0") {
                domainPath = `odr`;
            }
            else if (body.context.domain.includes("mobility")) {
                domainPath = `mobility`;
            }
            else if (body.context.domain.includes("retail")) {
                const default_version = "1.1.0";
                let version = default_version;
                const current_version = (_a = body === null || body === void 0 ? void 0 : body.context) === null || _a === void 0 ? void 0 : _a.core_version;
                if (current_version) {
                    version = current_version;
                }
                domainPath = `retail/${version}`;
            }
            const fullPath = `/${domainPath}/${body.context.action}`.replace("//", "/");
            const destinationUrl = `${ownAddress}${fullPath}`;
            console.log("called", destinationUrl);
            const { data: responseData } = await axios_1.default.post(destinationUrl, body);
            if (!(responseData === null || responseData === void 0 ? void 0 : responseData.context)) {
                console.log(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }), "Invalid response from sandbox bpp api");
                return;
            }
            responseData.context.message_id = body.context.message_id;
            responseData.context.bap_id = body.context.bap_id;
            responseData.context.bap_uri = body.context.bap_uri;
            responseData.context.transaction_id = body.context.transaction_id;
            responseData.context.domain = body.context.domain;
            if ((_b = body === null || body === void 0 ? void 0 : body.context) === null || _b === void 0 ? void 0 : _b.bpp_id)
                responseData.context.bpp_id = body.context.bpp_id;
            if ((_c = body === null || body === void 0 ? void 0 : body.context) === null || _c === void 0 ? void 0 : _c.bpp_uri)
                responseData.context.bpp_uri = body.context.bpp_uri;
            let requestAction = null;
            switch (body.context.action) {
                case "search":
                    requestAction = "on_search";
                    break;
                case "select":
                    requestAction = "on_select";
                    break;
                case "init":
                    requestAction = "on_init";
                    break;
                case "confirm":
                    requestAction = "on_confirm";
                    break;
                case "status":
                    requestAction = "on_status";
                    break;
                case "track":
                    requestAction = "on_track";
                    break;
                case "cancel":
                    requestAction = "on_cancel";
                    break;
                case "update":
                    requestAction = "on_update";
                    break;
                case "rating":
                    requestAction = "on_rating";
                    break;
                case "support":
                    requestAction = "on_support";
                    break;
                case "get_cancellation_reasons":
                    requestAction = "cancellation_reasons";
                    break;
                case "get_rating_categories":
                    requestAction = "rating_categories";
                    break;
                default:
                    console.log(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }), "Invalid request action -> " + requestAction);
                    return;
            }
            const bppClientUrl = `${process.env.BPPCLIENTURL}/${requestAction}`;
            setTimeout(async () => {
                var _a, _b, _c, _d;
                console.log("\n\n", "-----------------------------------------------------------", "\n", new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }), `\n`, `\n`, `Making post request to: ${bppClientUrl}`, `\n`, `\n`, `Body: ${JSON.stringify(responseData)}`, `\n`, "-----------------------------------------------------------");
                try {
                    await axios_1.default.post(bppClientUrl, responseData);
                }
                catch (error) {
                    console.log("error=>", ((_d = (_c = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.errors) || error.message);
                }
            }, 2000);
        }
        catch (err) {
            console.log(err);
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
