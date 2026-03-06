import { MobilityApiInterface } from "src/mobility/mobility-api.interface";
import { CancelRequestDto } from "./dto/cancel-request.dto";
import { ConfirmRequestDto } from "./dto/confirm-request.dto";
import { InitRequestDto } from "./dto/init-request.dto";
import { RatingRequestDto } from "./dto/rating-request.dto";
import { SearchRequestDto } from "./dto/search-request.dto";
import { SelectReqDto } from "./dto/select-request.dto";
import { StatusRequestDto } from "./dto/status-request.dto";
import { SupportRequestDto } from "./dto/support-request.dto";
import { TrackRequestDto } from "./dto/track-request.dto";
import { UpdateRequestDto } from "./dto/update-request.dto";
export declare class OndcApiService implements MobilityApiInterface {
    search: (searchRequest: SearchRequestDto) => {
        context: {
            country: string;
            domain: string;
            timestamp: string;
            bap_id: string;
            transaction_id: string;
            message_id: string;
            city: string;
            core_version: string;
            action: string;
            bap_uri: string;
        };
        message: {
            catalog: {
                "bpp/descriptor": {
                    name: string;
                };
                "bpp/providers": {
                    locations: {
                        id: string;
                        gps: string;
                    }[];
                    items: {
                        id: string;
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        price: {
                            maximum_value: string;
                            currency: string;
                            minimum_value: string;
                            value: string;
                        };
                        tags: {
                            "groups/1/descriptor/name": string;
                            "groups/1/descriptor/code": string;
                            "groups/1/display": string;
                            "groups/1/list/1/descriptor/name": string;
                            "groups/1/list/1/value": string;
                            "groups/1/list/2/descriptor/name": string;
                            "groups/1/list/2/descriptor/code": string;
                            "groups/1/list/2/value": string;
                            "groups/1/list/3/descriptor/name": string;
                            "groups/1/list/3/descriptor/code": string;
                            "groups/1/list/3/value": string;
                            "groups/1/list/4/descriptor/name": string;
                            "groups/1/list/4/descriptor/short_desc": string;
                            "groups/1/list/4/descriptor/code": string;
                            "groups/1/list/4/value": string;
                            "groups/1/list/5/descriptor/name": string;
                            "groups/1/list/5/descriptor/short_desc": string;
                            "groups/1/list/5/descriptor/code": string;
                            "groups/1/list/5/value": string;
                            "groups/2/descriptor/name": string;
                            "groups/2/descriptor/code": string;
                            "groups/2/display": string;
                            "groups/2/list/1/descriptor/name": string;
                            "groups/2/list/1/descriptor/code": string;
                            "groups/2/list/1/value": string;
                            "groups/2/list/2/descriptor/name": string;
                            "groups/2/list/2/descriptor/code": string;
                            "groups/2/list/2/value": string;
                            "groups/2/list/3/descriptor/name": string;
                            "groups/2/list/3/descriptor/code": string;
                            "groups/2/list/3/value": string;
                            "groups/3/descriptor/name": string;
                            "groups/3/descriptor/code": string;
                            "groups/3/display": string;
                            "groups/3/list/1/descriptor/name": string;
                            "groups/3/list/1/descriptor/code": string;
                            "groups/3/list/1/value": string;
                            "groups/3/list/2/descriptor/name": string;
                            "groups/3/list/2/descriptor/code": string;
                            "groups/3/list/2/value": string;
                        };
                        fulfillment_id: string;
                        payment_id: string;
                    }[];
                    fulfillments: {
                        id: string;
                        start: {
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
                        vehicle: {
                            category: string;
                        };
                        tags: {
                            "groups/1/descriptor/code": string;
                            "groups/1/descriptor/name": string;
                            "groups/1/display": string;
                            "groups/1/list/1/descriptor/code": string;
                            "groups/1/list/1/descriptor/name": string;
                            "groups/1/list/1/value": string;
                            "groups/1/list/2/descriptor/code": string;
                            "groups/1/list/2/descriptor/name": string;
                            "groups/1/list/2/value": string;
                        };
                    }[];
                    payments: {
                        id: string;
                        type: string;
                        collected_by: string;
                    }[];
                    tags: {
                        "groups/1/descriptor/name": string;
                        "groups/1/descriptor/code": string;
                        "groups/1/display": string;
                        "groups/1/list/1/descriptor/name": string;
                        "groups/1/list/1/descriptor/code": string;
                        "groups/1/list/1/value": string;
                        "groups/1/list/2/descriptor/name": string;
                        "groups/1/list/2/descriptor/code": string;
                        "groups/1/list/2/value": string;
                        "groups/1/list/3/descriptor/name": string;
                        "groups/1/list/3/descriptor/code": string;
                        "groups/1/list/3/value": string;
                    };
                }[];
            };
        };
    };
    select: (selectRequestDto: SelectReqDto) => {
        context: {
            country: string;
            domain: string;
            timestamp: string;
            bap_id: string;
            message_id: string;
            transaction_id: string;
            city: string;
            core_version: string;
            action: string;
            bap_uri: string;
        };
        message: {
            order: {
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
                        "groups/1/descriptor/code": string;
                        "groups/1/display": string;
                        "groups/1/list/1/descriptor/name": string;
                        "groups/1/list/1/value": string;
                        "groups/1/list/2/descriptor/name": string;
                        "groups/1/list/2/descriptor/code": string;
                        "groups/1/list/2/value": string;
                        "groups/1/list/3/descriptor/name": string;
                        "groups/1/list/3/descriptor/code": string;
                        "groups/1/list/3/value": string;
                        "groups/1/list/4/descriptor/name": string;
                        "groups/1/list/4/descriptor/short_desc": string;
                        "groups/1/list/4/descriptor/code": string;
                        "groups/1/list/4/value": string;
                        "groups/1/list/5/descriptor/name": string;
                        "groups/1/list/5/descriptor/short_desc": string;
                        "groups/1/list/5/descriptor/code": string;
                        "groups/1/list/5/value": string;
                        "groups/2/descriptor/name": string;
                        "groups/2/descriptor/code": string;
                        "groups/2/display": string;
                        "groups/2/list/1/descriptor/name": string;
                        "groups/2/list/1/descriptor/code": string;
                        "groups/2/list/1/value": string;
                        "groups/2/list/2/descriptor/name": string;
                        "groups/2/list/2/descriptor/code": string;
                        "groups/2/list/2/value": string;
                        "groups/2/list/3/descriptor/name": string;
                        "groups/2/list/3/descriptor/code": string;
                        "groups/2/list/3/value": string;
                        "groups/3/descriptor/name": string;
                        "groups/3/descriptor/code": string;
                        "groups/3/display": string;
                        "groups/3/list/1/descriptor/name": string;
                        "groups/3/list/1/descriptor/code": string;
                        "groups/3/list/1/value": string;
                        "groups/3/list/2/descriptor/name": string;
                        "groups/3/list/2/descriptor/code": string;
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
                    ttl: string;
                };
                fulfillment: {
                    id: string;
                    state: {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                    };
                    start: {
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
                        rateable: boolean;
                        rating: string;
                    };
                    vehicle: {
                        category: string;
                    };
                };
            };
        };
    };
    init: (initRequestDto: InitRequestDto) => {
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
                        "groups/1/descriptor/code": string;
                        "groups/1/display": string;
                        "groups/1/list/1/descriptor/name": string;
                        "groups/1/list/1/value": string;
                        "groups/1/list/2/descriptor/name": string;
                        "groups/1/list/2/descriptor/code": string;
                        "groups/1/list/2/value": string;
                        "groups/1/list/3/descriptor/name": string;
                        "groups/1/list/3/descriptor/code": string;
                        "groups/1/list/3/value": string;
                        "groups/1/list/4/descriptor/name": string;
                        "groups/1/list/4/descriptor/short_desc": string;
                        "groups/1/list/4/descriptor/code": string;
                        "groups/1/list/4/value": string;
                        "groups/1/list/5/descriptor/name": string;
                        "groups/1/list/5/descriptor/short_desc": string;
                        "groups/1/list/5/descriptor/code": string;
                        "groups/1/list/5/value": string;
                        "groups/2/descriptor/name": string;
                        "groups/2/descriptor/code": string;
                        "groups/2/display": string;
                        "groups/2/list/1/descriptor/name": string;
                        "groups/2/list/1/descriptor/code": string;
                        "groups/2/list/1/value": string;
                        "groups/2/list/2/descriptor/name": string;
                        "groups/2/list/2/descriptor/code": string;
                        "groups/2/list/2/value": string;
                        "groups/2/list/3/descriptor/name": string;
                        "groups/2/list/3/descriptor/code": string;
                        "groups/2/list/3/value": string;
                        "groups/3/descriptor/name": string;
                        "groups/3/descriptor/code": string;
                        "groups/3/display": string;
                        "groups/3/list/1/descriptor/name": string;
                        "groups/3/list/1/descriptor/code": string;
                        "groups/3/list/1/value": string;
                        "groups/3/list/2/descriptor/name": string;
                        "groups/3/list/2/descriptor/code": string;
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
                    start: {
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
                        rateable: boolean;
                        rating: string;
                    };
                    vehicle: {
                        category: string;
                    };
                    customer: {
                        person: {
                            name: string;
                            phone: string;
                            tags: {
                                "groups/1/descriptor/name": string;
                                "groups/1/descriptor/code": string;
                                "groups/1/display": string;
                                "groups/1/list/1/descriptor/code": string;
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
    confirm: (confirmRequestDto: ConfirmRequestDto) => {
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
                        "groups/1/descriptor/code": string;
                        "groups/1/display": string;
                        "groups/1/list/1/descriptor/name": string;
                        "groups/1/list/1/value": string;
                        "groups/1/list/2/descriptor/name": string;
                        "groups/1/list/2/descriptor/code": string;
                        "groups/1/list/2/value": string;
                        "groups/1/list/3/descriptor/name": string;
                        "groups/1/list/3/descriptor/code": string;
                        "groups/1/list/3/value": string;
                        "groups/1/list/4/descriptor/name": string;
                        "groups/1/list/4/descriptor/short_desc": string;
                        "groups/1/list/4/descriptor/code": string;
                        "groups/1/list/4/value": string;
                        "groups/1/list/5/descriptor/name": string;
                        "groups/1/list/5/descriptor/short_desc": string;
                        "groups/1/list/5/descriptor/code": string;
                        "groups/1/list/5/value": string;
                        "groups/2/descriptor/name": string;
                        "groups/2/descriptor/code": string;
                        "groups/2/display": string;
                        "groups/2/list/1/descriptor/name": string;
                        "groups/2/list/1/descriptor/code": string;
                        "groups/2/list/1/value": string;
                        "groups/2/list/2/descriptor/name": string;
                        "groups/2/list/2/descriptor/code": string;
                        "groups/2/list/2/value": string;
                        "groups/2/list/3/descriptor/name": string;
                        "groups/2/list/3/descriptor/code": string;
                        "groups/2/list/3/value": string;
                        "groups/3/descriptor/name": string;
                        "groups/3/descriptor/code": string;
                        "groups/3/display": string;
                        "groups/3/list/1/descriptor/name": string;
                        "groups/3/list/1/descriptor/code": string;
                        "groups/3/list/1/value": string;
                        "groups/3/list/2/descriptor/name": string;
                        "groups/3/list/2/descriptor/code": string;
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
                                "groups/1/descriptor/code": string;
                                "groups/1/display": string;
                                "groups/1/list/1/descriptor/code": string;
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
    status: (statusRequestDto: StatusRequestDto) => {
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
                        "groups/1/descriptor/code": string;
                        "groups/1/display": string;
                        "groups/1/list/1/descriptor/name": string;
                        "groups/1/list/1/value": string;
                        "groups/1/list/2/descriptor/name": string;
                        "groups/1/list/2/descriptor/code": string;
                        "groups/1/list/2/value": string;
                        "groups/1/list/3/descriptor/name": string;
                        "groups/1/list/3/descriptor/code": string;
                        "groups/1/list/3/value": string;
                        "groups/1/list/4/descriptor/name": string;
                        "groups/1/list/4/descriptor/short_desc": string;
                        "groups/1/list/4/descriptor/code": string;
                        "groups/1/list/4/value": string;
                        "groups/1/list/5/descriptor/name": string;
                        "groups/1/list/5/descriptor/short_desc": string;
                        "groups/1/list/5/descriptor/code": string;
                        "groups/1/list/5/value": string;
                        "groups/2/descriptor/name": string;
                        "groups/2/descriptor/code": string;
                        "groups/2/display": string;
                        "groups/2/list/1/descriptor/name": string;
                        "groups/2/list/1/descriptor/code": string;
                        "groups/2/list/1/value": string;
                        "groups/2/list/2/descriptor/name": string;
                        "groups/2/list/2/descriptor/code": string;
                        "groups/2/list/2/value": string;
                        "groups/2/list/3/descriptor/name": string;
                        "groups/2/list/3/descriptor/code": string;
                        "groups/2/list/3/value": string;
                        "groups/3/descriptor/name": string;
                        "groups/3/descriptor/code": string;
                        "groups/3/display": string;
                        "groups/3/list/1/descriptor/name": string;
                        "groups/3/list/1/descriptor/code": string;
                        "groups/3/list/1/value": string;
                        "groups/3/list/2/descriptor/name": string;
                        "groups/3/list/2/descriptor/code": string;
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
                                "groups/1/descriptor/code": string;
                                "groups/1/display": string;
                                "groups/1/list/1/descriptor/code": string;
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
    track: (trackRequest: TrackRequestDto) => {
        context: {
            country: string;
            bpp_uri: string;
            domain: string;
            timestamp: string;
            bap_id: string;
            bpp_id: string;
            message_id: string;
            city: string;
            core_version: string;
            action: string;
            bap_uri: string;
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
                        "groups/1/descriptor/code": string;
                        "groups/1/display": string;
                        "groups/1/list/1/descriptor/name": string;
                        "groups/1/list/1/value": string;
                        "groups/1/list/2/descriptor/name": string;
                        "groups/1/list/2/descriptor/code": string;
                        "groups/1/list/2/value": string;
                        "groups/1/list/3/descriptor/name": string;
                        "groups/1/list/3/descriptor/code": string;
                        "groups/1/list/3/value": string;
                        "groups/1/list/4/descriptor/name": string;
                        "groups/1/list/4/descriptor/short_desc": string;
                        "groups/1/list/4/descriptor/code": string;
                        "groups/1/list/4/value": string;
                        "groups/1/list/5/descriptor/name": string;
                        "groups/1/list/5/descriptor/short_desc": string;
                        "groups/1/list/5/descriptor/code": string;
                        "groups/1/list/5/value": string;
                        "groups/2/descriptor/name": string;
                        "groups/2/descriptor/code": string;
                        "groups/2/display": string;
                        "groups/2/list/1/descriptor/name": string;
                        "groups/2/list/1/descriptor/code": string;
                        "groups/2/list/1/value": string;
                        "groups/2/list/2/descriptor/name": string;
                        "groups/2/list/2/descriptor/code": string;
                        "groups/2/list/2/value": string;
                        "groups/2/list/3/descriptor/name": string;
                        "groups/2/list/3/descriptor/code": string;
                        "groups/2/list/3/value": string;
                        "groups/3/descriptor/name": string;
                        "groups/3/descriptor/code": string;
                        "groups/3/display": string;
                        "groups/3/list/1/descriptor/name": string;
                        "groups/3/list/1/descriptor/code": string;
                        "groups/3/list/1/value": string;
                        "groups/3/list/2/descriptor/name": string;
                        "groups/3/list/2/descriptor/code": string;
                        "groups/3/list/2/value": string;
                    };
                    fulfillment_id: string;
                    payment_id: string;
                }[];
                quote: {
                    value: string;
                    currency: string;
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
                                "groups/1/descriptor/code": string;
                                "groups/1/display": string;
                                "groups/1/list/1/descriptor/code": string;
                                "groups/1/list/1/descriptor/name": string;
                                "groups/1/list/1/value": string;
                            };
                        };
                    };
                };
                payments: {
                    id: string;
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_status: string;
                    };
                }[];
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
                        "groups/1/descriptor/code": string;
                        "groups/1/display": string;
                        "groups/1/list/1/descriptor/name": string;
                        "groups/1/list/1/value": string;
                        "groups/1/list/2/descriptor/name": string;
                        "groups/1/list/2/descriptor/code": string;
                        "groups/1/list/2/value": string;
                        "groups/1/list/3/descriptor/name": string;
                        "groups/1/list/3/descriptor/code": string;
                        "groups/1/list/3/value": string;
                        "groups/1/list/4/descriptor/name": string;
                        "groups/1/list/4/descriptor/short_desc": string;
                        "groups/1/list/4/descriptor/code": string;
                        "groups/1/list/4/value": string;
                        "groups/1/list/5/descriptor/name": string;
                        "groups/1/list/5/descriptor/short_desc": string;
                        "groups/1/list/5/descriptor/code": string;
                        "groups/1/list/5/value": string;
                        "groups/2/descriptor/name": string;
                        "groups/2/descriptor/code": string;
                        "groups/2/display": string;
                        "groups/2/list/1/descriptor/name": string;
                        "groups/2/list/1/descriptor/code": string;
                        "groups/2/list/1/value": string;
                        "groups/2/list/2/descriptor/name": string;
                        "groups/2/list/2/descriptor/code": string;
                        "groups/2/list/2/value": string;
                        "groups/2/list/3/descriptor/name": string;
                        "groups/2/list/3/descriptor/code": string;
                        "groups/2/list/3/value": string;
                        "groups/3/descriptor/name": string;
                        "groups/3/descriptor/code": string;
                        "groups/3/display": string;
                        "groups/3/list/1/descriptor/name": string;
                        "groups/3/list/1/descriptor/code": string;
                        "groups/3/list/1/value": string;
                        "groups/3/list/2/descriptor/name": string;
                        "groups/3/list/2/descriptor/code": string;
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
                                "groups/1/descriptor/code": string;
                                "groups/1/display": string;
                                "groups/1/list/1/descriptor/code": string;
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
    support: (supportRequest: SupportRequestDto) => {
        context: {
            country: string;
            bpp_uri: string;
            domain: string;
            timestamp: string;
            bap_id: string;
            bpp_id: string;
            message_id: string;
            city: string;
            core_version: string;
            action: string;
            bap_uri: string;
        };
        message: {
            phone: string;
            email: string;
            url: string;
        };
    };
    rating: (ratingRequest: RatingRequestDto) => {
        context: {
            country: string;
            bpp_uri: string;
            domain: string;
            timestamp: string;
            bap_id: string;
            bpp_id: string;
            message_id: string;
            city: string;
            core_version: string;
            action: string;
            bap_uri: string;
        };
        message: {
            feedback_ack: boolean;
            rating_ack: boolean;
        };
    };
    cancellationReasons: () => {
        context: {
            country: string;
            domain: string;
            timestamp: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            city: string;
            core_version: string;
            action: string;
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
            action: string;
            country: string;
            domain: string;
            timestamp: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            city: string;
            core_version: string;
        };
        message: {
            rating_categories: string[];
        };
    };
}
