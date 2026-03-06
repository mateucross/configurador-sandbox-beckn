"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GercomCoursesService = void 0;
const common_1 = require("@nestjs/common");
const SearchResponse = require("./response/response.searchByCategorySchool.json");
const Search2Response = require("./response/response.search2.json");
const InitResponse = require("./response/response.init.json");
const Init2Response = require("./response/response.init2.json");
const ConfirmResponse = require("./response/response.confirm.json");
const Confirm2Response = require("./response/response.confirm2.json");
const SelectResponse = require("./response/response.select.json");
const Select2Response = require("./response/response.select2.json");
const StatusResponse = require("./response/response.status.json");
const Status2Response = require("./response/response.status2.json");
const UpdateResponse = require("./response/response.update.json");
const Update2Response = require("./response/response.update2.json");
const SupportResponse = require("./response/response.support.json");
const Support2Response = require("./response/response.support2.json");
const RatingResponse = require("./response/response.rating.json");
const Rating2Response = require("./response/response.rating2.json");
const CancelResponse = require("./response/response.cancel.json");
const Cancel2Response = require("./response/response.cancel2.json");
const TrackResponse = require("./response/response.track.json");
const Track2Response = require("./response/response.track2.json");
let GercomCoursesService = class GercomCoursesService {
    constructor() {
        this.search = (dsepRequestDto) => {
            return SearchResponse;
        };
        this.select = (dsepRequestDto) => {
            const { message } = dsepRequestDto;
            const itemId = message?.order?.items?.[0]?.id;

            // Exemplo: ID do curso de Blockchain
            if (itemId === "d4975df5-b18c-4772-80ad-368669856d52") {
                return SelectResponse;
            }

            // Exemplo: ID do curso de Redes Quânticas
            if (itemId === "a1e6f3c4-2b3d-4e8f-9c6e-2f4b8e5d9c3a") {
                return Select2Response;
            }

            // Default → retorna um dos responses padrão
            return SelectResponse;
        };
        this.init = (dsepRequestDto) => {
            const { message } = dsepRequestDto;
            const itemId = message?.order?.items?.[0]?.id;

            // Exemplo: ID do curso de Blockchain
            if (itemId === "d4975df5-b18c-4772-80ad-368669856d52") {
                return InitResponse;
            }

            // Exemplo: ID do curso de Redes Quânticas
            if (itemId === "a1e6f3c4-2b3d-4e8f-9c6e-2f4b8e5d9c3a") {
                return Init2Response;
            }

            // Default → retorna um dos responses padrão
            return InitResponse;
        };
        this.confirm = (dsepRequestDto) => {
            const { message } = dsepRequestDto;
            const itemId = message?.order?.items?.[0]?.id;

            // Exemplo: ID do curso de Blockchain
            if (itemId === "d4975df5-b18c-4772-80ad-368669856d52") {
                return ConfirmResponse;
            }

            // Exemplo: ID do curso de Redes Quânticas
            if (itemId === "a1e6f3c4-2b3d-4e8f-9c6e-2f4b8e5d9c3a") {
                return Confirm2Response;
            }

            // Default → retorna um dos responses padrão
            return ConfirmResponse;
        };
        this.status = (dsepRequestDto) => {
            const { message } = dsepRequestDto;
            const orderId = message?.order_id;

            if (orderId === "gercom-order-12345") {
                return StatusResponse;
            }
            if (orderId === "gercom-order-67890") {
                return Status2Response;
            }
            return StatusResponse;
        };

        this.cancel = (dsepRequestDto) => {
            const { message } = dsepRequestDto;
            const orderId = message?.order_id;

            if (orderId === "gercom-order-12345") {
                return CancelResponse;
            }
            if (orderId === "gercom-order-67890") {
                return Cancel2Response;
            }
            return CancelResponse;
        };
        this.update = (dsepRequestDto) => {
            const { message } = dsepRequestDto;
            const orderId = message?.order?.id;

            if (orderId === "gercom-order-12345") {
                return UpdateResponse;
            }
            if (orderId === "gercom-order-67890") {
                return Update2Response;
            }
            return UpdateResponse;
        };
        this.support = (dsepRequestDto) => {
            const { message } = dsepRequestDto;
            const orderId = message?.support?.ref_id;

            if (orderId === "gercom-order-12345") {
                return SupportResponse;
            }
            if (orderId === "gercom-order-67890") {
                return Support2Response;
            }
            return SupportResponse;

        };
        this.rating = (dsepRequestDto) => {
            const { message } = dsepRequestDto;
            const orderId = message?.ratings?.[0]?.id;

            if (orderId === "gercom-order-12345") {
                return RatingResponse;
            }
            if (orderId === "gercom-order-67890") {
                return Rating2Response;
            }
            return RatingResponse;
        };
        this.track = (dsepRequestDto) => {
            const { message } = dsepRequestDto;
            const trackingId = message?.order_id;

            if (trackingId === "gercom-order-12345") {
                return TrackResponse;
            }
            if (trackingId === "gercom-order-67890") {
                return Track2Response;
            }
            return TrackResponse;
        };
    }
};
GercomCoursesService = __decorate([
    (0, common_1.Injectable)()
], GercomCoursesService);
exports.GercomCoursesService = GercomCoursesService;
