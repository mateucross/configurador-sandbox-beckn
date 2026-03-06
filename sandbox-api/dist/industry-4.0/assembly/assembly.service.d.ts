import { Industry4_0ApiInterface } from "../industry-4.0-api.interface";
import { Industry_4_0_Request_DTO } from "../dto/request.dto";
export declare class AssemblyService implements Industry4_0ApiInterface {
    search: (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            version: string;
            action: string;
            bap_id: string;
            bap_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
            bpp_id: string;
            bpp_uri: string;
        };
        message: {
            catalog: {
                descriptor: {
                    name: string;
                };
                providers: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    categories: ({
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        parent_category_id?: undefined;
                    } | {
                        id: string;
                        parent_category_id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    })[];
                    fulfillments: {
                        id: string;
                        type: string;
                    }[];
                    locations: {
                        id: string;
                        city: {
                            code: number;
                            name: string;
                        };
                        gps: string;
                    }[];
                    rating: string;
                    items: {
                        id: string;
                        descriptor: {
                            images: {
                                url: string;
                                size_type: string;
                            }[];
                            name: string;
                        };
                        category_ids: string[];
                        location_ids: string[];
                        fulfillment_ids: string[];
                        tags: {
                            descriptor: {
                                code: string;
                                name: string;
                            };
                            list: {
                                descriptor: {
                                    name: string;
                                };
                                value: string;
                            }[];
                        }[];
                        price: {
                            currency: string;
                            value: string;
                        };
                    }[];
                }[];
            };
        };
    };
    select: (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            action: string;
            version: string;
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                provider: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                    };
                    category_ids: string[];
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                    }[];
                    xinput: {
                        required: boolean;
                        head: {
                            descriptor: {
                                name: string;
                            };
                            index: {
                                min: number;
                                cur: number;
                                max: number;
                            };
                            headings: string[];
                        };
                        form: {
                            mime_type: string;
                            url: string;
                            resubmit: boolean;
                            auth: {
                                descriptor: {
                                    code: string;
                                };
                                value: string;
                            };
                        };
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                }[];
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                };
            };
        };
    } | {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            action: string;
            version: string;
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                provider: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                    };
                    category_ids: string[];
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                    stops: {
                        type: string;
                        location: {
                            gps: string;
                            area_code: string;
                        };
                    }[];
                }[];
                quote: {
                    breakup: {
                        price: {
                            currency: string;
                            value: string;
                        };
                        title: string;
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                };
            };
        };
    };
    init: (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            action: string;
            version: string;
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                provider: {
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                    };
                    id: string;
                };
                items: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                    };
                    category_ids: string[];
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                    customer: {
                        contact: {
                            email: string;
                            phone: string;
                        };
                        person: {
                            name: string;
                        };
                    };
                    stops: {
                        type: string;
                        location: {
                            gps: string;
                            address: string;
                            city: {
                                name: string;
                            };
                            country: {
                                code: string;
                            };
                            area_code: string;
                            state: {
                                name: string;
                            };
                        };
                        contact: {
                            phone: string;
                        };
                    }[];
                }[];
                billing: {
                    name: string;
                    address: string;
                    state: {
                        name: string;
                    };
                    city: {
                        name: string;
                    };
                    email: string;
                    phone: string;
                };
                payments: {
                    collected_by: string;
                    params: {
                        amount: string;
                        currency: string;
                        bank_code: string;
                        bank_account_number: string;
                    };
                    status: string;
                    type: string;
                }[];
                quote: {
                    breakup: {
                        price: {
                            currency: string;
                            value: string;
                        };
                        title: string;
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                };
            };
        };
    };
    confirm: (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => Promise<{
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            action: string;
            version: string;
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                    };
                    id: string;
                };
                items: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                    };
                    category_ids: string[];
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                    state: {
                        descriptor: {
                            code: string;
                            short_desc: string;
                        };
                    };
                    customer: {
                        contact: {
                            email: string;
                            phone: string;
                        };
                        person: {
                            name: string;
                        };
                    };
                    stops: {
                        type: string;
                        location: {
                            gps: string;
                            address: string;
                            city: {
                                name: string;
                            };
                            country: {
                                code: string;
                            };
                            area_code: string;
                            state: {
                                name: string;
                            };
                        };
                        contact: {
                            phone: string;
                        };
                    }[];
                }[];
                billing: {
                    name: string;
                    address: string;
                    state: {
                        name: string;
                    };
                    city: {
                        name: string;
                    };
                    email: string;
                    phone: string;
                };
                payments: {
                    collected_by: string;
                    params: {
                        amount: string;
                        currency: string;
                        bank_code: string;
                        bank_account_number: string;
                        source_bank_code: string;
                        source_bank_account_number: string;
                        transaction_id: string;
                    };
                    status: string;
                    type: string;
                }[];
                quote: {
                    breakup: {
                        price: {
                            currency: string;
                            value: string;
                        };
                        title: string;
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                };
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
    }>;
    status: (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => Promise<{
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            action: string;
            version: string;
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                    };
                    id: string;
                };
                items: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                    };
                    category_ids: string[];
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                    state: {
                        descriptor: {
                            code: string;
                            short_desc: string;
                        };
                        updated_at: string;
                    };
                    customer: {
                        contact: {
                            email: string;
                            phone: string;
                        };
                        person: {
                            name: string;
                        };
                    };
                    stops: {
                        type: string;
                        location: {
                            gps: string;
                            address: string;
                            city: {
                                name: string;
                            };
                            country: {
                                code: string;
                            };
                            area_code: string;
                            state: {
                                name: string;
                            };
                        };
                        contact: {
                            phone: string;
                        };
                    }[];
                }[];
                billing: {
                    name: string;
                    address: string;
                    state: {
                        name: string;
                    };
                    city: {
                        name: string;
                    };
                    email: string;
                    phone: string;
                };
                payments: {
                    collected_by: string;
                    params: {
                        amount: string;
                        currency: string;
                        bank_code: string;
                        bank_account_number: string;
                        source_bank_code: string;
                        source_bank_account_number: string;
                        transaction_id: string;
                    };
                    status: string;
                    type: string;
                }[];
                quote: {
                    breakup: {
                        price: {
                            currency: string;
                            value: string;
                        };
                        title: string;
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                };
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
    }>;
    cancel: (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            action: string;
            version: string;
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    name: string;
                    short_desc: string;
                    long_desc: string;
                    images: {
                        url: string;
                        size_type: string;
                    }[];
                    id: string;
                };
                items: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                    };
                    category_ids: string[];
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    customer: {
                        contact: {
                            email: string;
                            phone: string;
                        };
                        person: {
                            name: string;
                        };
                    };
                    id: string;
                    state: {
                        descriptor: {
                            code: string;
                            short_desc: string;
                        };
                        updated_at: string;
                    };
                }[];
                billing: {
                    name: string;
                    address: string;
                    state: {
                        name: string;
                    };
                    city: {
                        name: string;
                    };
                    email: string;
                    phone: string;
                };
                payments: {
                    collected_by: string;
                    params: {
                        amount: string;
                        currency: string;
                        bank_code: string;
                        bank_account_number: string;
                        source_bank_code: string;
                        source_bank_account_number: string;
                        transaction_id: string;
                    };
                    status: string;
                    type: string;
                }[];
                quote: {
                    breakup: {
                        price: {
                            currency: string;
                            value: string;
                        };
                        title: string;
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                };
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
    update: (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            action: string;
            version: string;
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                    };
                    id: string;
                };
                items: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                    };
                    category_ids: string[];
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                    state: {
                        descriptor: {
                            code: string;
                            short_desc: string;
                        };
                    };
                    customer: {
                        contact: {
                            email: string;
                            phone: string;
                        };
                        person: {
                            name: string;
                        };
                    };
                    stops: {
                        type: string;
                        location: {
                            gps: string;
                            address: string;
                            city: {
                                name: string;
                            };
                            country: {
                                code: string;
                            };
                            area_code: string;
                            state: {
                                name: string;
                            };
                        };
                        contact: {
                            phone: string;
                        };
                    }[];
                }[];
                billing: {
                    name: string;
                    address: string;
                    state: {
                        name: string;
                    };
                    city: {
                        name: string;
                    };
                    email: string;
                    phone: string;
                };
                payments: {
                    collected_by: string;
                    params: {
                        amount: string;
                        currency: string;
                        bank_code: string;
                        bank_account_number: string;
                        source_bank_code: string;
                        source_bank_account_number: string;
                        transaction_id: string;
                    };
                    status: string;
                    type: string;
                }[];
                quote: {
                    breakup: {
                        price: {
                            currency: string;
                            value: string;
                        };
                        title: string;
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                };
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
    support: (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            action: string;
            version: string;
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            support: {
                ref_id: string;
                phone: string;
                email: string;
            };
        };
    };
    rating: (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            action: string;
            version: string;
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            feedback_form: {
                form: {
                    url: string;
                };
                required: string;
            };
        };
    };
    track: (industry_4_0_Request_DTO: Industry_4_0_Request_DTO) => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            action: string;
            version: string;
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
            ttl: string;
        };
        message: {
            tracking: {
                id: string;
                url: string;
                status: string;
            };
        };
    };
    getForm: () => {
        textHtml: string;
    };
    submitForm: (request: any) => {
        success: boolean;
    };
}
