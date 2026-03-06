import { DHPApiInterface } from "src/dhp/dhp-api.interface";
export declare class DiagnosticsApiService implements DHPApiInterface {
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
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                    };
                    location: {
                        gps: string;
                        address: string;
                        state: {
                            name: string;
                        };
                        city: {
                            name: string;
                        };
                        area_code: string;
                    }[];
                    rating: string;
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
                            code: string;
                            name: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                        category_ids: string[];
                        fulfillment_ids: string[];
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
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                    };
                    location: {
                        gps: string;
                        address: string;
                        state: {
                            name: string;
                        };
                        city: {
                            name: string;
                        };
                        area_code: string;
                    }[];
                    rating: string;
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
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    stops: {
                        type: string;
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            days: string;
                            schedule: {
                                holidays: string[];
                            };
                        };
                        location: {
                            gps: string;
                            address: string;
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                            area_code: string;
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
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                    };
                    rating: string;
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
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    stops: {
                        type: string;
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            days: string;
                            schedule: {
                                holidays: string[];
                            };
                        };
                        location: {
                            gps: string;
                            address: string;
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                            area_code: string;
                        };
                    }[];
                    customer: {
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                            dob: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    agent: {
                        person: {
                            id: string;
                            name: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
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
                    email: string;
                    phone: string;
                };
                payments: {
                    type: string;
                    url: string;
                    collected_by: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
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
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                    };
                    rating: string;
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
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    stops: {
                        type: string;
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            days: string;
                            schedule: {
                                holidays: string[];
                            };
                        };
                        location: {
                            gps: string;
                            address: string;
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                            area_code: string;
                        };
                    }[];
                    customer: {
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                            dob: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    agent: {
                        person: {
                            id: string;
                            name: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
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
                    email: string;
                    phone: string;
                };
                payments: {
                    type: string;
                    url: string;
                    collected_by: string;
                    status: string;
                    params: {
                        transaction_id: string;
                        amount: string;
                        currency: string;
                    };
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
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                    };
                    rating: string;
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
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    stops: {
                        type: string;
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            days: string;
                            schedule: {
                                holidays: string[];
                            };
                        };
                        location: {
                            gps: string;
                            address: string;
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                            area_code: string;
                        };
                    }[];
                    customer: {
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                            dob: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    agent: {
                        person: {
                            id: string;
                            name: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
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
                    email: string;
                    phone: string;
                };
                payments: {
                    type: string;
                    url: string;
                    collected_by: string;
                    status: string;
                    params: {
                        transaction_id: string;
                        amount: string;
                        currency: string;
                    };
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
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                    };
                    rating: string;
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
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    stops: {
                        type: string;
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            days: string;
                            schedule: {
                                holidays: string[];
                            };
                        };
                        location: {
                            gps: string;
                            address: string;
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                            area_code: string;
                        };
                    }[];
                    customer: {
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                            dob: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    agent: {
                        person: {
                            id: string;
                            name: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
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
                    email: string;
                    phone: string;
                };
                payments: {
                    type: string;
                    url: string;
                    collected_by: string;
                    status: string;
                    params: {
                        transaction_id: string;
                        amount: string;
                        currency: string;
                    };
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
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                    };
                    rating: string;
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
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    stops: {
                        type: string;
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            days: string;
                            schedule: {
                                holidays: string[];
                            };
                        };
                        location: {
                            gps: string;
                            address: string;
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                            area_code: string;
                        };
                    }[];
                    customer: {
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                            dob: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    agent: {
                        person: {
                            id: string;
                            name: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
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
                    email: string;
                    phone: string;
                };
                payments: {
                    type: string;
                    url: string;
                    collected_by: string;
                    status: string;
                    params: {
                        transaction_id: string;
                        amount: string;
                        currency: string;
                    };
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
