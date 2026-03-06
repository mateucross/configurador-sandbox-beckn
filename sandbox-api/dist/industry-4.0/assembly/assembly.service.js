"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssemblyService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const uuid_1 = require("uuid");
const fs = require("fs");
const path_1 = require("path");
const dotenv = require("dotenv");
const cheerio = require("cheerio");
const constants_1 = require("../../common/constants");
const SearchResponse = require("./response/response.search.json");
const InitResponse = require("./response/response.init.json");
const ConfirmResponse = require("./response/response.confirm.json");
const SelectResponse1 = require("./response/response.select-1.json");
const SelectResponse2 = require("./response/response.select-2.json");
const StatusResponse = require("./response/response.status.json");
const UpdateResponse = require("./response/response.update.json");
const SupportResponse = require("./response/response.support.json");
const CancelResponse = require("./response/response.cancel.json");
const TrackResponse = require("./response/response.track.json");
const RatingResponse = require("./response/response.rating.json");
const constants_2 = require("../constants");
dotenv.config();
const orderStatus = [
    { statusCode: "ORDER_ACCEPTED", longDesc: "The order is accepted" },
    { statusCode: "IN_ASSEMBLY_LINE", longDesc: "The item is in assembly line" },
    { statusCode: "ITEM_DISPATCHED", longDesc: "The item is dispatched" },
    { statusCode: "DELIVERED", longDesc: "The order is delivered" },
];
let AssemblyService = class AssemblyService {
    constructor() {
        this.search = (industry_4_0_Request_DTO) => {
            SearchResponse.context.bpp_id = constants_1.BPP_ID;
            SearchResponse.context.bpp_uri = constants_1.BPP_URI;
            return SearchResponse;
        };
        this.select = (industry_4_0_Request_DTO) => {
            var _a, _b, _c, _d, _e, _f;
            const Select1 = (_c = (_b = (_a = industry_4_0_Request_DTO === null || industry_4_0_Request_DTO === void 0 ? void 0 : industry_4_0_Request_DTO.message) === null || _a === void 0 ? void 0 : _a.order) === null || _b === void 0 ? void 0 : _b.tags) === null || _c === void 0 ? void 0 : _c.find((tag) => { var _a; return ((_a = tag === null || tag === void 0 ? void 0 : tag.descriptor) === null || _a === void 0 ? void 0 : _a.name) === "select-1"; });
            const Select2 = (_f = (_e = (_d = industry_4_0_Request_DTO === null || industry_4_0_Request_DTO === void 0 ? void 0 : industry_4_0_Request_DTO.message) === null || _d === void 0 ? void 0 : _d.order) === null || _e === void 0 ? void 0 : _e.tags) === null || _f === void 0 ? void 0 : _f.find((tag) => { var _a; return ((_a = tag === null || tag === void 0 ? void 0 : tag.descriptor) === null || _a === void 0 ? void 0 : _a.name) === "select-2"; });
            if (Select1) {
                SelectResponse1.context.bpp_id = constants_1.BPP_ID;
                SelectResponse1.context.bpp_uri = constants_1.BPP_URI;
                SelectResponse1.message.order.items[0].xinput.form.url = `${process.env.BASE_URL}/industry-4.0/form?domain=supply-chain-services:assembly`;
                return SelectResponse1;
            }
            if (Select2) {
                SelectResponse2.context.bpp_id = constants_1.BPP_ID;
                SelectResponse2.context.bpp_uri = constants_1.BPP_URI;
                return SelectResponse2;
            }
        };
        this.init = (industry_4_0_Request_DTO) => {
            InitResponse.context.bpp_id = constants_1.BPP_ID;
            InitResponse.context.bpp_uri = constants_1.BPP_URI;
            return InitResponse;
        };
        this.confirm = async (industry_4_0_Request_DTO) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            ConfirmResponse.context.bpp_id = constants_1.BPP_ID;
            ConfirmResponse.context.bpp_uri = constants_1.BPP_URI;
            const orderId = (0, uuid_1.v4)();
            try {
                const data = await axios_1.default.post(`${constants_2.INDUSTRY_4_MACHINE_SIMULATOR_URL}/confirm`, {
                    order_id: orderId,
                    order_specification: {
                        width: "200",
                        height: "230",
                    },
                });
                if (((_a = data.data) === null || _a === void 0 ? void 0 : _a.message) === "Order Created" && ((_b = data.data) === null || _b === void 0 ? void 0 : _b.success)) {
                    ConfirmResponse.message.order.id = (_d = (_c = data.data) === null || _c === void 0 ? void 0 : _c.order_details) === null || _d === void 0 ? void 0 : _d.order_id;
                    ConfirmResponse.message.order.fulfillments[0].state.descriptor.code = (_f = (_e = data.data) === null || _e === void 0 ? void 0 : _e.order_details) === null || _f === void 0 ? void 0 : _f.status;
                    ConfirmResponse.message.order.fulfillments[0].state.descriptor.short_desc = (_h = (_g = data.data) === null || _g === void 0 ? void 0 : _g.order_details) === null || _h === void 0 ? void 0 : _h.status;
                    return ConfirmResponse;
                }
                else {
                    throw new Error("Order Not Created");
                }
            }
            catch (error) {
                console.log(error);
                throw new Error(error.message);
            }
        };
        this.status = async (industry_4_0_Request_DTO) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
            StatusResponse.context.bpp_id = constants_1.BPP_ID;
            StatusResponse.context.bpp_uri = constants_1.BPP_URI;
            if (constants_2.INDUSTRY_4_MACHINE_SIMULATOR_URL) {
                const data = await axios_1.default.post(`${constants_2.INDUSTRY_4_MACHINE_SIMULATOR_URL}/status`, { order_id: (_a = industry_4_0_Request_DTO.message) === null || _a === void 0 ? void 0 : _a.order_id });
                StatusResponse.message.order.id = (_c = (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.order_id;
                StatusResponse.message.order.fulfillments[0].state.descriptor.code = (_e = (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.status;
                StatusResponse.message.order.fulfillments[0].state.descriptor.short_desc = (_g = (_f = data === null || data === void 0 ? void 0 : data.data) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.status;
                StatusResponse.message.order.fulfillments[0].state.updated_at = new Date((_j = (_h = data === null || data === void 0 ? void 0 : data.data) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.current_update).toISOString();
            }
            else {
                const StatusRecord = JSON.parse(fs.readFileSync((0, path_1.join)(__dirname, "statusRecord.json"), { encoding: "utf-8" }));
                let requiredOrder = (_k = StatusRecord === null || StatusRecord === void 0 ? void 0 : StatusRecord.orders) === null || _k === void 0 ? void 0 : _k.find((elem) => { var _a; return (elem === null || elem === void 0 ? void 0 : elem.orderId) === ((_a = industry_4_0_Request_DTO === null || industry_4_0_Request_DTO === void 0 ? void 0 : industry_4_0_Request_DTO.message) === null || _a === void 0 ? void 0 : _a.order_id); });
                if (requiredOrder) {
                    if (requiredOrder.status.statusCode === "DELIVERED") {
                        StatusResponse.message.order.id = (_l = industry_4_0_Request_DTO === null || industry_4_0_Request_DTO === void 0 ? void 0 : industry_4_0_Request_DTO.message) === null || _l === void 0 ? void 0 : _l.order_id;
                        StatusResponse.message.order.fulfillments[0].state.descriptor.code = (_m = requiredOrder === null || requiredOrder === void 0 ? void 0 : requiredOrder.status) === null || _m === void 0 ? void 0 : _m.statusCode;
                        StatusResponse.message.order.fulfillments[0].state.descriptor.short_desc = (_o = requiredOrder === null || requiredOrder === void 0 ? void 0 : requiredOrder.status) === null || _o === void 0 ? void 0 : _o.longDesc;
                        StatusResponse.message.order.fulfillments[0].state.updated_at = new Date().toISOString();
                    }
                    else {
                        let oldOrderStatusIndex = 0;
                        orderStatus.find((elem, i) => {
                            var _a;
                            if ((elem === null || elem === void 0 ? void 0 : elem.statusCode) === ((_a = requiredOrder === null || requiredOrder === void 0 ? void 0 : requiredOrder.status) === null || _a === void 0 ? void 0 : _a.statusCode)) {
                                oldOrderStatusIndex = i;
                                return;
                            }
                        });
                        requiredOrder = Object.assign(Object.assign({}, requiredOrder), { status: {
                                statusCode: (_p = orderStatus[oldOrderStatusIndex + 1]) === null || _p === void 0 ? void 0 : _p.statusCode,
                                longDesc: (_q = orderStatus[oldOrderStatusIndex + 1]) === null || _q === void 0 ? void 0 : _q.longDesc,
                            } });
                        StatusResponse.message.order.id = (_r = industry_4_0_Request_DTO === null || industry_4_0_Request_DTO === void 0 ? void 0 : industry_4_0_Request_DTO.message) === null || _r === void 0 ? void 0 : _r.order_id;
                        StatusResponse.message.order.fulfillments[0].state.descriptor.code = (_s = requiredOrder === null || requiredOrder === void 0 ? void 0 : requiredOrder.status) === null || _s === void 0 ? void 0 : _s.statusCode;
                        StatusResponse.message.order.fulfillments[0].state.descriptor.short_desc = (_t = requiredOrder === null || requiredOrder === void 0 ? void 0 : requiredOrder.status) === null || _t === void 0 ? void 0 : _t.longDesc;
                        StatusResponse.message.order.fulfillments[0].state.updated_at = new Date().toISOString();
                        const newStatusRecord = (_u = StatusRecord === null || StatusRecord === void 0 ? void 0 : StatusRecord.orders) === null || _u === void 0 ? void 0 : _u.map((elem) => {
                            if ((elem === null || elem === void 0 ? void 0 : elem.orderId) === (requiredOrder === null || requiredOrder === void 0 ? void 0 : requiredOrder.orderId)) {
                                return requiredOrder;
                            }
                            return elem;
                        });
                        fs.writeFileSync((0, path_1.join)(__dirname, "statusRecord.json"), JSON.stringify({ orders: newStatusRecord }));
                    }
                }
            }
            return StatusResponse;
        };
        this.cancel = (industry_4_0_Request_DTO) => {
            CancelResponse.context.bpp_id = constants_1.BPP_ID;
            CancelResponse.context.bpp_uri = constants_1.BPP_URI;
            return CancelResponse;
        };
        this.update = (industry_4_0_Request_DTO) => {
            UpdateResponse.context.bpp_id = constants_1.BPP_ID;
            UpdateResponse.context.bpp_uri = constants_1.BPP_URI;
            return UpdateResponse;
        };
        this.support = (industry_4_0_Request_DTO) => {
            SupportResponse.context.bpp_id = constants_1.BPP_ID;
            SupportResponse.context.bpp_uri = constants_1.BPP_URI;
            return SupportResponse;
        };
        this.rating = (industry_4_0_Request_DTO) => {
            RatingResponse.context.bpp_id = constants_1.BPP_ID;
            RatingResponse.context.bpp_uri = constants_1.BPP_URI;
            return RatingResponse;
        };
        this.track = (industry_4_0_Request_DTO) => {
            TrackResponse.context.bpp_id = constants_1.BPP_ID;
            TrackResponse.context.bpp_uri = constants_1.BPP_URI;
            return TrackResponse;
        };
        this.getForm = () => {
            const textHTML = fs.readFileSync((0, path_1.join)(__dirname, "xinputForm.html"), { encoding: "utf-8" });
            const $ = cheerio.load(textHTML);
            $("form").attr("action", `${process.env.BASE_URL}/industry-4.0/formsubmit`);
            return { textHtml: $.html() };
        };
        this.submitForm = (request) => {
            console.log(request);
            return { success: true };
        };
    }
};
AssemblyService = __decorate([
    (0, common_1.Injectable)()
], AssemblyService);
exports.AssemblyService = AssemblyService;
//# sourceMappingURL=assembly.service.js.map