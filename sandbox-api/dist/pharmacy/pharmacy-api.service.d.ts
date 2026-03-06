import { DHPApiInterface } from "src/dhp/dhp-api.interface";
export declare class PharmacyApiService implements DHPApiInterface {
    search: () => {
        context: {
            domain: string;
            action: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            version: string;
            bap_id: string;
            bap_url: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
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
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    locations: {
                        id: string;
                        gps: string;
                    }[];
                    fulfillments: {
                        id: string;
                        type: string;
                        stops: {
                            type: string;
                            time: {
                                timestamp: string;
                            };
                        }[];
                    }[];
                    items: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        category_ids: string[];
                        fulfillment_ids: string[];
                        location_ids: string[];
                        price: {
                            value: string;
                            currency: string;
                        };
                        quantity: {
                            available: {
                                measure: {
                                    value: string;
                                    unit: string;
                                };
                            };
                            maximum: {
                                measure: {
                                    value: string;
                                    unit: string;
                                };
                            };
                        };
                        tags: {
                            descriptor: {
                                code: string;
                                name: string;
                            };
                            list: {
                                descriptor: {
                                    code: string;
                                };
                                value: string;
                            }[];
                        }[];
                    }[];
                }[];
            };
        };
    };
    select: () => {
        context: {
            domain: string;
            action: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            version: string;
            bap_id: string;
            bap_url: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                }[];
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
    init: () => {
        context: {
            domain: string;
            action: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            version: string;
            bap_id: string;
            bap_url: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
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
                        bank_account_number: string;
                        bank_code: string;
                        bank_account_name: string;
                    };
                    status: string;
                    type: string;
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            code: string;
                        };
                    };
                    cancellation_fee: {
                        percentage: string;
                    };
                    external_ref: {
                        mimetype: string;
                        url: string;
                    };
                }[];
            };
        };
    };
    confirm: () => {
        context: {
            domain: string;
            action: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            version: string;
            bap_id: string;
            bap_url: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
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
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
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
                        transaction_id: string;
                        bank_account_number: string;
                        bank_code: string;
                        bank_account_name: string;
                    };
                    status: string;
                    type: string;
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            code: string;
                        };
                    };
                    cancellation_fee: {
                        percentage: string;
                    };
                    external_ref: {
                        mimetype: string;
                        url: string;
                    };
                }[];
            };
        };
    };
    status: () => {
        context: {
            domain: string;
            action: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            version: string;
            bap_id: string;
            bap_url: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
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
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
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
                        transaction_id: string;
                        bank_account_number: string;
                        bank_code: string;
                        bank_account_name: string;
                    };
                    status: string;
                    type: string;
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            code: string;
                        };
                    };
                    cancellation_fee: {
                        percentage: string;
                    };
                    external_ref: {
                        mimetype: string;
                        url: string;
                    };
                }[];
            };
        };
    };
    track: () => {
        context: {
            domain: string;
            action: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            version: string;
            bap_id: string;
            bap_url: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            tracking: {
                id: string;
                url: string;
                status: string;
                location: {
                    descriptor: {
                        name: string;
                    };
                    gps: string;
                };
            };
        };
    };
    cancel: () => {
        context: {
            domain: string;
            action: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            version: string;
            bap_id: string;
            bap_url: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
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
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
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
                        transaction_id: string;
                        bank_account_number: string;
                        bank_code: string;
                        bank_account_name: string;
                    };
                    status: string;
                    type: string;
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            code: string;
                        };
                    };
                    cancellation_fee: {
                        percentage: string;
                    };
                    external_ref: {
                        mimetype: string;
                        url: string;
                    };
                }[];
            };
        };
    };
    update: () => {
        context: {
            domain: string;
            action: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            version: string;
            bap_id: string;
            bap_url: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
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
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
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
                        transaction_id: string;
                        bank_account_number: string;
                        bank_code: string;
                        bank_account_name: string;
                    };
                    status: string;
                    type: string;
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            code: string;
                        };
                    };
                    cancellation_fee: {
                        percentage: string;
                    };
                    external_ref: {
                        mimetype: string;
                        url: string;
                    };
                }[];
            };
        };
    };
    rating: () => {
        context: {
            domain: string;
            action: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            version: string;
            bap_id: string;
            bap_url: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            feedback_form: {
                form: {
                    url: string;
                    mime_type: string;
                };
                required: boolean;
            };
        };
    };
    support: () => {
        context: {
            domain: string;
            action: string;
            location: {
                country: {
                    code: string;
                };
                city: {
                    code: string;
                };
            };
            version: string;
            bap_id: string;
            bap_url: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            support: {
                ref_id: string;
                order_id: string;
                callback_phone: string;
                email: string;
                phone: string;
                url: string;
                docs: {
                    descriptor: {
                        name: string;
                        short_desc: string;
                    };
                    url: string;
                    mime_type: string;
                }[];
            };
        };
    };
}
