import { MobilityApiInterface } from "src/mobility/mobility-api.interface";
import { CancelRequestDto } from "./dto/cancel-request.dto";
import { ConfirmRequestDto } from "./dto/confirm.request.dto";
import { InitRequestDto } from "./dto/init-request.dto";
import { RatingRequestDto } from "./dto/rating-request.dto";
import { SearchRequestDto } from "./dto/search-request.dto";
import { SelectReqDto } from "./dto/select-request.dto";
import { StatusRequestDto } from "./dto/status-request.dto";
import { SupportRequestDto } from "./dto/support-request.dto";
import { TrackRequestDto } from "./dto/track-request.dto";
import { UpdateRequestDto } from "./dto/update-request.dto";
export declare class UmtcApiService implements MobilityApiInterface {
    search: (searchRequest: SearchRequestDto) => {
        context: {
            domain: string;
            core_version: string;
            action: string;
            bpp_id: string;
            bpp_uri: string;
            country: string;
            city: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            catalog: {
                "bpp/descriptor": {
                    name: string;
                    images: string[];
                };
                "bpp/providers": {
                    id: string;
                    descriptor: {
                        name: string;
                        images: string[];
                    };
                    items: ({
                        id: string;
                        descriptor: {
                            name: string;
                            images: string[];
                        };
                        fulfillment_id: string;
                        price: {
                            currency: string;
                            value: string;
                        };
                    } | {
                        id: string;
                        descriptor: {
                            name: string;
                            images: string[];
                        };
                        price: {
                            currency: string;
                            value: string;
                        };
                        fulfillment_id?: undefined;
                    })[];
                    fulfillments: ({
                        id: string;
                        start: {
                            location: {
                                descriptor: {
                                    name: string;
                                };
                                gps: string;
                            };
                            time?: undefined;
                        };
                        end: {
                            location: {
                                descriptor: {
                                    name: string;
                                };
                                gps: string;
                            };
                            time?: undefined;
                        };
                        vehicle: {
                            category: string;
                        };
                        tags: {
                            "groups/0/list/0/descriptor/name": string;
                            "groups/0/list/0/value": string;
                            "groups/0/list/1/descriptor/name": string;
                            "groups/0/list/1/value": string;
                            "groups/0/list/2/descriptor/name": string;
                            "groups/0/list/2/value": string;
                        };
                        tracking: boolean;
                    } | {
                        id: string;
                        start: {
                            location: {
                                descriptor: {
                                    name: string;
                                };
                                gps: string;
                            };
                            time: {
                                timestamp: string;
                            };
                        };
                        end: {
                            location: {
                                descriptor: {
                                    name: string;
                                };
                                gps: string;
                            };
                            time: {
                                timestamp: string;
                            };
                        };
                        vehicle: {
                            category: string;
                        };
                        tags: {
                            "groups/0/list/0/descriptor/name": string;
                            "groups/0/list/0/value": string;
                            "groups/0/list/1/descriptor/name": string;
                            "groups/0/list/1/value": string;
                            "groups/0/list/2/descriptor/name": string;
                            "groups/0/list/2/value": string;
                        };
                        tracking: boolean;
                    })[];
                    tags: {
                        "groups/0/list/0/descriptor/name": string;
                        "groups/0/list/0/value": string;
                        "groups/0/list/1/descriptor/name": string;
                        "groups/0/list/1/value": string;
                        "groups/0/list/1/display": string;
                    };
                }[];
            };
        };
    };
    select: (selectRequestDto: SelectReqDto) => {
        context: {
            domain: string;
            core_version: string;
            action: string;
            bpp_id: string;
            bpp_uri: string;
            country: string;
            city: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        images: string[];
                    };
                    fulfillment_id: string;
                    price: {
                        currency: string;
                        value: string;
                    };
                    tags: {
                        "groups/0/list/0/descriptor/name": string;
                        "groups/0/list/0/value": string;
                    };
                }[];
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                        images: string[];
                    };
                };
                fulfillment: {
                    id: string;
                    start: {
                        location: {
                            descriptor: {
                                name: string;
                            };
                            gps: string;
                        };
                    };
                    end: {
                        location: {
                            descriptor: {
                                name: string;
                            };
                            gps: string;
                        };
                    };
                    vehicle: {
                        category: string;
                    };
                    tags: {
                        "groups/0/list/0/descriptor/name": string;
                        "groups/0/list/0/value": string;
                        "groups/0/list/1/descriptor/name": string;
                        "groups/0/list/1/value": string;
                        "groups/0/list/2/descriptor/name": string;
                        "groups/0/list/2/value": string;
                    };
                    tracking: boolean;
                };
                quote: {
                    price: {
                        value: string;
                        currency: string;
                    };
                    breakup: {
                        title: string;
                        price: {
                            currency: string;
                            value: string;
                        };
                    }[];
                };
            };
        };
    };
    init: (initRequestDto: InitRequestDto) => {
        context: {
            domain: string;
            core_version: string;
            action: string;
            bpp_id: string;
            bpp_uri: string;
            country: string;
            city: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            order: {
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        images: string[];
                    };
                    fulfillment_id: string;
                    price: {
                        currency: string;
                        value: string;
                    };
                    tags: {
                        "groups/0/list/0/descriptor/name": string;
                        "groups/0/list/0/value": string;
                    };
                }[];
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                        images: string[];
                    };
                };
                fulfillment: {
                    id: string;
                    start: {
                        location: {
                            descriptor: {
                                name: string;
                            };
                            gps: string;
                        };
                    };
                    end: {
                        location: {
                            descriptor: {
                                name: string;
                            };
                            gps: string;
                        };
                    };
                    vehicle: {
                        category: string;
                    };
                    tags: {
                        "groups/0/list/0/descriptor/name": string;
                        "groups/0/list/0/value": string;
                        "groups/0/list/1/descriptor/name": string;
                        "groups/0/list/1/value": string;
                        "groups/0/list/2/descriptor/name": string;
                        "groups/0/list/2/value": string;
                    };
                    tracking: boolean;
                };
                documents: {
                    label: string;
                    url: string;
                }[];
                billing: {
                    name: string;
                    email: string;
                    phone: string;
                };
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                    breakup: {
                        title: string;
                        price: {
                            currency: string;
                            value: string;
                        };
                    }[];
                };
                payment: {
                    type: string;
                    uri: string;
                    tl_method: string;
                    status: string;
                };
            };
        };
    };
    confirm: (confirmRequestDto: ConfirmRequestDto) => {
        context: {
            domain: string;
            core_version: string;
            action: string;
            bpp_id: string;
            bpp_uri: string;
            country: string;
            city: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        images: string[];
                    };
                    fulfillment_id: string;
                    price: {
                        currency: string;
                        value: string;
                    };
                    tags: {
                        "groups/0/list/0/descriptor/name": string;
                        "groups/0/list/0/value": string;
                    };
                }[];
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                        images: string[];
                    };
                };
                fulfillment: {
                    id: string;
                    start: {
                        location: {
                            descriptor: {
                                name: string;
                            };
                            gps: string;
                        };
                    };
                    end: {
                        location: {
                            descriptor: {
                                name: string;
                            };
                            gps: string;
                        };
                    };
                    vehicle: {
                        category: string;
                    };
                    tags: {
                        "groups/0/list/0/descriptor/name": string;
                        "groups/0/list/0/value": string;
                        "groups/0/list/1/descriptor/name": string;
                        "groups/0/list/1/value": string;
                        "groups/0/list/2/descriptor/name": string;
                        "groups/0/list/2/value": string;
                    };
                    tracking: boolean;
                };
                documents: {
                    label: string;
                    url: string;
                }[];
                billing: {
                    name: string;
                    email: string;
                    phone: string;
                };
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                    breakup: {
                        title: string;
                        price: {
                            currency: string;
                            value: string;
                        };
                    }[];
                };
                payment: {
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                    };
                    status: string;
                };
            };
        };
    };
    status: (statusRequestDto: StatusRequestDto) => {
        context: {
            domain: string;
            core_version: string;
            action: string;
            bpp_id: string;
            bpp_uri: string;
            country: string;
            city: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        images: string[];
                    };
                    fulfillment_id: string;
                    price: {
                        currency: string;
                        value: string;
                    };
                }[];
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                        images: string[];
                    };
                };
                fulfillment: {
                    id: string;
                    start: {
                        location: {
                            descriptor: {
                                name: string;
                            };
                            gps: string;
                        };
                    };
                    end: {
                        location: {
                            descriptor: {
                                name: string;
                            };
                            gps: string;
                        };
                    };
                    vehicle: {
                        category: string;
                    };
                    tags: {
                        "groups/0/list/0/descriptor/name": string;
                        "groups/0/list/0/value": string;
                        "groups/0/list/1/descriptor/name": string;
                        "groups/0/list/1/value": string;
                        "groups/0/list/2/descriptor/name": string;
                        "groups/0/list/2/value": string;
                    };
                    tracking: boolean;
                };
                billing: {
                    name: string;
                    email: string;
                    phone: string;
                };
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                    breakup: {
                        title: string;
                        price: {
                            currency: string;
                            value: string;
                        };
                    }[];
                };
                payment: {
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                    };
                    status: string;
                };
            };
        };
    };
    track: (trackRequest: TrackRequestDto) => {
        context: {
            domain: string;
            core_version: string;
            action: string;
            bpp_id: string;
            bpp_uri: string;
            country: string;
            city: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            tracking: {
                content_type: string;
                url: string;
                status: string;
            };
        };
    };
    cancel: (cancelRequest: CancelRequestDto) => {
        context: {
            domain: string;
            core_version: string;
            action: string;
            bpp_id: string;
            bpp_uri: string;
            country: string;
            city: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        images: string[];
                    };
                    fulfillment_id: string;
                    price: {
                        currency: string;
                        value: string;
                    };
                    tags: {
                        "groups/0/list/0/descriptor/name": string;
                        "groups/0/list/0/value": string;
                    };
                }[];
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                        images: string[];
                    };
                };
                fulfillment: {
                    id: string;
                    start: {
                        location: {
                            descriptor: {
                                name: string;
                            };
                            gps: string;
                        };
                    };
                    end: {
                        location: {
                            descriptor: {
                                name: string;
                            };
                            gps: string;
                        };
                    };
                    vehicle: {
                        category: string;
                    };
                    tags: {
                        "groups/0/list/0/descriptor/name": string;
                        "groups/0/list/0/value": string;
                        "groups/0/list/1/descriptor/name": string;
                        "groups/0/list/1/value": string;
                        "groups/0/list/2/descriptor/name": string;
                        "groups/0/list/2/value": string;
                    };
                    tracking: boolean;
                };
                documents: {
                    label: string;
                    url: string;
                }[];
                billing: {
                    name: string;
                    email: string;
                    phone: string;
                };
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                    breakup: {
                        title: string;
                        price: {
                            currency: string;
                            value: string;
                        };
                    }[];
                };
                payment: {
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                        bank_account: string;
                        bank_code: string;
                    };
                    time: {
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                };
            };
        };
    };
    update: (updateRequest: UpdateRequestDto) => {
        context: {
            country: string;
            bpp_uri: string;
            domain: string;
            timestamp: string;
            bap_id: string;
            bpp_id: string;
            transaction_id: string;
            message_id: string;
            city: string;
            core_version: string;
            action: string;
            bap_uri: string;
        };
        message: {
            update_target: string;
            order: {
                id: string;
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        code: string;
                    };
                    tags: {
                        "groups/1/descriptor/name": string;
                        "groups/1/display": string;
                        "groups/1/list/1/descriptor/name": string;
                        "groups/1/list/1/value": string;
                        "groups/1/list/2/descriptor/name": string;
                        "groups/1/list/2/value": string;
                        "groups/1/list/3/descriptor/name": string;
                        "groups/1/list/3/value": string;
                        "groups/1/list/4/descriptor/name": string;
                        "groups/1/list/4/descriptor/short_desc": string;
                        "groups/1/list/4/value": string;
                        "groups/1/list/5/descriptor/name": string;
                        "groups/1/list/5/descriptor/short_desc": string;
                        "groups/1/list/5/value": string;
                        "groups/2/descriptor/name": string;
                        "groups/2/display": string;
                        "groups/2/list/1/descriptor/name": string;
                        "groups/2/list/1/value": string;
                        "groups/2/list/2/descriptor/name": string;
                        "groups/2/list/2/value": string;
                        "groups/2/list/3/descriptor/name": string;
                        "groups/2/list/3/value": string;
                        "groups/3/descriptor/name": string;
                        "groups/3/display": string;
                        "groups/3/list/1/descriptor/name": string;
                        "groups/3/list/1/value": string;
                        "groups/3/list/2/descriptor/name": string;
                        "groups/3/list/2/value": string;
                    };
                    fulfillment_id: string;
                    payment_id: string;
                }[];
                quote: {
                    value: string;
                    currency: string;
                    breakup: {
                        title: string;
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
                fulfillment: {
                    id: string;
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                    start: {
                        authorization: {
                            type: string;
                            token: string;
                        };
                        location: {
                            gps: string;
                            address: {
                                ward: string;
                                country: string;
                                building: string;
                                state: string;
                                city: string;
                                locality: string;
                                door: string;
                                area_code: string;
                                street: string;
                            };
                        };
                    };
                    end: {
                        location: {
                            gps: string;
                            address: {
                                ward: string;
                                country: string;
                                building: string;
                                state: string;
                                city: string;
                                locality: string;
                                door: string;
                                area_code: string;
                                street: string;
                            };
                        };
                    };
                    agent: {
                        name: string;
                        phone: string;
                        rateable: boolean;
                        rating: string;
                    };
                    vehicle: {
                        category: string;
                        registration: string;
                    };
                    customer: {
                        person: {
                            name: string;
                            phone: string;
                            tags: {
                                "groups/1/descriptor/name": string;
                                "groups/1/display": string;
                                "groups/1/list/1/descriptor/name": string;
                                "groups/1/list/1/value": string;
                            };
                        };
                    };
                };
                payment: {
                    id: string;
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_status: string;
                    };
                };
            };
        };
    };
    rating: (ratingRequest: RatingRequestDto) => {
        context: {
            domain: string;
            core_version: string;
            action: string;
            bpp_id: string;
            bpp_uri: string;
            country: string;
            city: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            rating_ack: boolean;
        };
    };
    support: (supportRequest: SupportRequestDto) => {
        context: {
            domain: string;
            core_version: string;
            action: string;
            bpp_id: string;
            bpp_uri: string;
            country: string;
            city: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            phone: string;
            email: string;
            url: string;
        };
    };
    cancellationReasons: () => {
        context: {
            domain: string;
            core_version: string;
            action: string;
            bpp_id: string;
            bpp_uri: string;
            country: string;
            city: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            cancellation_reasons: {
                id: string;
                descriptor: {
                    name: string;
                };
            }[];
        };
    };
    ratingCategories: () => {
        context: {
            domain: string;
            core_version: string;
            action: string;
            bpp_id: string;
            bpp_uri: string;
            country: string;
            city: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            rating_categories: string[];
        };
    };
}
