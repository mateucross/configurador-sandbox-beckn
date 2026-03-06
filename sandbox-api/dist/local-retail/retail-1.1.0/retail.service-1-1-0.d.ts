import { LocalRetail110ApiInterface } from "../local-retail-api.interface";
import { Local_Retail110_Request_DTO } from "../dto/1-1-0/local-retail-1-1-0-request.dto";
export declare class RetailService110 implements LocalRetail110ApiInterface {
    search: (request_DTO: Local_Retail110_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            action: string;
            version: string;
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
                descriptor: {
                    name: string;
                };
                providers: {
                    id: string;
                    descriptor: {
                        name: string;
                    };
                    locations: {
                        id: string;
                        gps: string;
                    }[];
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    fulfillments: {
                        id: string;
                        type: string;
                    }[];
                    items: {
                        id: string;
                        descriptor: {
                            images: {
                                url: string;
                            }[];
                            name: string;
                            short_desc: string;
                            long_desc: string;
                        };
                        matched: boolean;
                        price: {
                            listed_value: string;
                            currency: string;
                            value: string;
                        };
                        recommended: boolean;
                        location_ids: string[];
                        category_ids: string[];
                        fulfillment_ids: string[];
                        tags: {
                            descriptor: {
                                name: string;
                            };
                            list: {
                                descriptor: {
                                    name: string;
                                };
                                value: string;
                            }[];
                        }[];
                    }[];
                }[];
            };
        };
    };
    select: (request_DTO: Local_Retail110_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            action: string;
            version: string;
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
                        images: {
                            url: string;
                        }[];
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    category_ids: string[];
                    price: {
                        listed_value: string;
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    stops: {
                        location: {
                            gps: string;
                        };
                    }[];
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
    init: (request_DTO: Local_Retail110_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            action: string;
            version: string;
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
                        images: {
                            url: string;
                        }[];
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    category_ids: string[];
                    price: {
                        listed_value: string;
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    type: string;
                    stops: {
                        location: {
                            gps: string;
                            address: string;
                            city: {
                                name: string;
                            };
                            state: {
                                name: string;
                            };
                            country: {
                                code: string;
                            };
                            area_code: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
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
                billing: {
                    name: string;
                    phone: string;
                    email: string;
                    address: string;
                    city: {
                        name: string;
                    };
                    state: {
                        name: string;
                    };
                };
                payments: {
                    status: string;
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        bank_code: string;
                        bank_account_number: string;
                        transaction_id: string;
                    };
                }[];
            };
        };
    };
    confirm: (request_DTO: Local_Retail110_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            action: string;
            version: string;
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
                        images: {
                            url: string;
                        }[];
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    category_ids: string[];
                    price: {
                        listed_value: string;
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    type: string;
                    stops: {
                        location: {
                            gps: string;
                            address: string;
                            city: {
                                name: string;
                            };
                            state: {
                                name: string;
                            };
                            country: {
                                code: string;
                            };
                            area_code: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
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
                billing: {
                    name: string;
                    phone: string;
                    email: string;
                    address: string;
                    city: {
                        name: string;
                    };
                    state: {
                        name: string;
                    };
                };
                payments: {
                    status: string;
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        bank_code: string;
                        bank_account_number: string;
                        transaction_id: string;
                    };
                }[];
                cancellation_terms: {
                    cancellation_fee: {
                        amount: {
                            currency: string;
                            value: string;
                        };
                    };
                }[];
            };
        };
    };
    status: (request_DTO: Local_Retail110_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            action: string;
            version: string;
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
                        images: {
                            url: string;
                        }[];
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    category_ids: string[];
                    price: {
                        listed_value: string;
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    type: string;
                    stops: {
                        location: {
                            gps: string;
                            address: string;
                            city: {
                                name: string;
                            };
                            state: {
                                name: string;
                            };
                            country: {
                                code: string;
                            };
                            area_code: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
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
                billing: {
                    name: string;
                    phone: string;
                    email: string;
                    address: string;
                    city: {
                        name: string;
                    };
                    state: {
                        name: string;
                    };
                };
                payments: {
                    status: string;
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        bank_code: string;
                        bank_account_number: string;
                        transaction_id: string;
                    };
                }[];
                cancellation_terms: {
                    cancellation_fee: {
                        amount: {
                            currency: string;
                            value: string;
                        };
                    };
                }[];
            };
        };
    };
    cancel: (request_DTO: Local_Retail110_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            action: string;
            version: string;
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
                        images: {
                            url: string;
                        }[];
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    category_ids: string[];
                    price: {
                        listed_value: string;
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    type: string;
                    stops: {
                        location: {
                            gps: string;
                            address: string;
                            city: {
                                name: string;
                            };
                            state: {
                                name: string;
                            };
                            country: {
                                code: string;
                            };
                            area_code: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
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
                billing: {
                    name: string;
                    phone: string;
                    email: string;
                    address: string;
                    city: {
                        name: string;
                    };
                    state: {
                        name: string;
                    };
                };
                payments: {
                    status: string;
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        bank_code: string;
                        bank_account_number: string;
                        transaction_id: string;
                    };
                }[];
                cancellation_terms: {
                    cancellation_fee: {
                        amount: {
                            currency: string;
                            value: string;
                        };
                    };
                }[];
            };
        };
    };
    update: (request_DTO: Local_Retail110_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            action: string;
            version: string;
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
                        images: {
                            url: string;
                        }[];
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    category_ids: string[];
                    price: {
                        listed_value: string;
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    type: string;
                    stops: {
                        location: {
                            gps: string;
                            address: string;
                            city: {
                                name: string;
                            };
                            state: {
                                name: string;
                            };
                            country: {
                                code: string;
                            };
                            area_code: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
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
                billing: {
                    name: string;
                    phone: string;
                    email: string;
                    address: string;
                    city: {
                        name: string;
                    };
                    state: {
                        name: string;
                    };
                };
                payments: {
                    status: string;
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        bank_code: string;
                        bank_account_number: string;
                        transaction_id: string;
                    };
                }[];
                cancellation_terms: {
                    cancellation_fee: {
                        amount: {
                            currency: string;
                            value: string;
                        };
                    };
                }[];
            };
        };
    };
    support: (request_DTO: Local_Retail110_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            action: string;
            version: string;
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
            support: {
                ref_id: string;
                callback_phone: string;
                phone: string;
                email: string;
            };
        };
    };
    rating: (request_DTO: Local_Retail110_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            action: string;
            version: string;
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
            feedback_form: {
                form: {
                    url: string;
                };
            };
        };
    };
    track: (request_DTO: Local_Retail110_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            action: string;
            version: string;
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
