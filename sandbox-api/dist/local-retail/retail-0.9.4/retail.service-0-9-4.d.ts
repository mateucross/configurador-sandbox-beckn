import { LocalRetail094ApiInterface } from "../local-retail-api.interface";
import { Local_Retail094_Request_DTO } from "../dto/0-9-4/local-retail-0-9-4-request.dto";
export declare class RetailService094 implements LocalRetail094ApiInterface {
    search: (request_DTO: Local_Retail094_Request_DTO) => {
        context: {
            domain: string;
            country: string;
            city: string;
            action: string;
            core_version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            message_id: string;
            transaction_id: string;
            timestamp: string;
            ttl: string;
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
                    id: string;
                    descriptor: {
                        name: string;
                    };
                    items: {
                        price: {
                            listed_value: string;
                            currency: string;
                            value: string;
                        };
                        matched: boolean;
                        id: string;
                        descriptor: {
                            images: string[];
                            name: string;
                            short_desc: string;
                            long_desc: string;
                        };
                        location_id: string;
                        recommended: boolean;
                        tags: {
                            waterbottle: string;
                            Category: string;
                            Trekking: string;
                            bottle: string;
                            Sipper: string;
                            water: string;
                            Hiking: string;
                        };
                        category_id: string;
                        fulfillment_id: string;
                    }[];
                }[];
                "bpp/fulfillments": {
                    id: string;
                    type: string;
                }[];
                "bpp/categories": {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                }[];
            };
        };
    };
    select: (request_DTO: Local_Retail094_Request_DTO) => {
        context: {
            domain: string;
            country: string;
            city: string;
            action: string;
            core_version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            message_id: string;
            transaction_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                    };
                    locations: {
                        id: string;
                    }[];
                };
                items: {
                    id: string;
                    descriptor: {
                        images: string[];
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    tags: {
                        waterbottle: string;
                        Category: string;
                        Trekking: string;
                        bottle: string;
                        Sipper: string;
                        water: string;
                        Hiking: string;
                    };
                    category_id: string;
                    fulfillment_id: string;
                    price: {
                        listed_value: string;
                        currency: string;
                        value: string;
                    };
                }[];
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
            };
        };
    };
    init: (request_DTO: Local_Retail094_Request_DTO) => {
        context: {
            domain: string;
            country: string;
            city: string;
            action: string;
            core_version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            message_id: string;
            transaction_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                provider: {
                    id: string;
                };
                items: {
                    id: string;
                    quantity: {
                        count: number;
                    };
                }[];
                fulfillment: {
                    type: string;
                    end: {
                        location: {
                            gps: string;
                            address: {
                                door: string;
                                building: string;
                                street: string;
                                city: string;
                                state: string;
                                country: string;
                                area_code: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
                    };
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
                billing: {
                    name: string;
                    phone: string;
                    address: {
                        door: string;
                        building: string;
                        city: string;
                        state: string;
                        country: string;
                        area_code: string;
                    };
                    email: string;
                };
                payment: {
                    params: {
                        amount: string;
                        currency: string;
                        bank_account_number: string;
                        bank_code: string;
                        bank_account_name: string;
                    };
                    status: string;
                    type: string;
                };
            };
        };
    };
    confirm: (request_DTO: Local_Retail094_Request_DTO) => {
        context: {
            domain: string;
            country: string;
            city: string;
            action: string;
            core_version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            message_id: string;
            transaction_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    id: string;
                };
                items: {
                    id: string;
                    quantity: {
                        count: number;
                    };
                }[];
                fulfillment: {
                    type: string;
                    end: {
                        location: {
                            gps: string;
                            address: {
                                door: string;
                                building: string;
                                street: string;
                                city: string;
                                state: string;
                                country: string;
                                area_code: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
                    };
                    state: {
                        descriptor: {
                            code: string;
                            short_desc: string;
                        };
                        updated_at: string;
                    };
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
                billing: {
                    name: string;
                    phone: string;
                    address: {
                        door: string;
                        building: string;
                        city: string;
                        state: string;
                        country: string;
                        area_code: string;
                    };
                    email: string;
                };
                payment: {
                    params: {
                        amount: string;
                        currency: string;
                        bank_account_number: string;
                        bank_code: string;
                        bank_account_name: string;
                    };
                    status: string;
                    type: string;
                };
            };
        };
    };
    status: (request_DTO: Local_Retail094_Request_DTO) => {
        context: {
            domain: string;
            country: string;
            city: string;
            action: string;
            core_version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            message_id: string;
            transaction_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    id: string;
                    locations: {
                        id: string;
                    }[];
                };
                items: {
                    id: string;
                    quantity: {
                        count: number;
                    };
                }[];
                fulfillment: {
                    type: string;
                    end: {
                        location: {
                            gps: string;
                            address: {
                                door: string;
                                building: string;
                                street: string;
                                city: string;
                                state: string;
                                country: string;
                                area_code: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
                    };
                    state: {
                        descriptor: {
                            code: string;
                            short_desc: string;
                        };
                        updated_at: string;
                    };
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
                billing: {
                    name: string;
                    phone: string;
                    address: {
                        door: string;
                        building: string;
                        city: string;
                        state: string;
                        country: string;
                        area_code: string;
                    };
                    email: string;
                };
                payment: {
                    params: {
                        amount: string;
                        currency: string;
                        bank_account_number: string;
                        bank_code: string;
                        bank_account_name: string;
                    };
                    status: string;
                    type: string;
                };
            };
        };
    };
    cancel: (request_DTO: Local_Retail094_Request_DTO) => {
        context: {
            domain: string;
            country: string;
            city: string;
            action: string;
            core_version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            message_id: string;
            transaction_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    id: string;
                    locations: {
                        id: string;
                    }[];
                };
                items: {
                    id: string;
                    quantity: {
                        count: number;
                    };
                }[];
                fulfillment: {
                    type: string;
                    end: {
                        location: {
                            gps: string;
                            address: {
                                door: string;
                                building: string;
                                street: string;
                                city: string;
                                state: string;
                                country: string;
                                area_code: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
                    };
                    state: {
                        descriptor: {
                            code: string;
                            short_desc: string;
                        };
                        updated_at: string;
                    };
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
                billing: {
                    name: string;
                    phone: string;
                    address: {
                        door: string;
                        building: string;
                        city: string;
                        state: string;
                        country: string;
                        area_code: string;
                    };
                    email: string;
                };
                payment: {
                    params: {
                        amount: string;
                        currency: string;
                        bank_account_number: string;
                        bank_code: string;
                        bank_account_name: string;
                    };
                    status: string;
                    type: string;
                };
            };
        };
    };
    update: (request_DTO: Local_Retail094_Request_DTO) => {
        context: {
            domain: string;
            country: string;
            city: string;
            action: string;
            core_version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            message_id: string;
            transaction_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    id: string;
                    locations: {
                        id: string;
                    }[];
                };
                items: {
                    id: string;
                    quantity: {
                        count: number;
                    };
                }[];
                fulfillment: {
                    type: string;
                    end: {
                        location: {
                            gps: string;
                            address: {
                                door: string;
                                building: string;
                                street: string;
                                city: string;
                                state: string;
                                country: string;
                                area_code: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
                    };
                    state: {
                        descriptor: {
                            code: string;
                            short_desc: string;
                        };
                        updated_at: string;
                    };
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
                billing: {
                    name: string;
                    phone: string;
                    address: {
                        door: string;
                        building: string;
                        city: string;
                        state: string;
                        country: string;
                        area_code: string;
                    };
                    email: string;
                };
                payment: {
                    params: {
                        amount: string;
                        currency: string;
                        bank_account_number: string;
                        bank_code: string;
                        bank_account_name: string;
                    };
                    status: string;
                    type: string;
                };
            };
        };
    };
    support: (request_DTO: Local_Retail094_Request_DTO) => {
        context: {
            domain: string;
            country: string;
            city: string;
            action: string;
            core_version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            message_id: string;
            transaction_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            phone: string;
            email: string;
        };
    };
    rating: (request_DTO: Local_Retail094_Request_DTO) => {
        context: {
            domain: string;
            country: string;
            city: string;
            action: string;
            core_version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            message_id: string;
            transaction_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            feedback_ack: boolean;
            rating_ack: boolean;
        };
    };
    track: (request_DTO: Local_Retail094_Request_DTO) => {
        context: {
            domain: string;
            country: string;
            city: string;
            action: string;
            core_version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            message_id: string;
            transaction_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            tracking: {
                url: string;
                status: string;
            };
        };
    };
}
