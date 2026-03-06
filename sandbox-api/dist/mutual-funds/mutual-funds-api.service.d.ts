import { FinancialServicesApiInterface } from "src/financial-services/financial-services-api.interface";
export declare class MutualFundsApiService implements FinancialServicesApiInterface {
    search: () => {
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
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
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
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                        short_desc: string;
                    };
                    categories: {
                        id: string;
                        descriptor: {
                            name: string;
                            long_desc: string;
                        };
                    }[];
                    items: ({
                        id: string;
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                        quantity: {
                            minimum: {
                                count: number;
                            };
                        };
                        category_ids: string[];
                        fulfillment_ids: string[];
                        matched: boolean;
                        xinput: {
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
                                id: string;
                                mime_type: string;
                                url: string;
                                resubmit: boolean;
                                multiple_sumbissions: boolean;
                            };
                            required: boolean;
                        };
                    } | {
                        id: string;
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                        category_ids: string[];
                        fulfillment_ids: string[];
                        matched: boolean;
                        xinput: {
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
                                id: string;
                                mime_type: string;
                                url: string;
                                resubmit: boolean;
                                multiple_sumbissions: boolean;
                            };
                            required: boolean;
                        };
                        quantity?: undefined;
                    })[];
                    fulfillments: {
                        id: string;
                        type: string;
                        agent: {
                            person: {
                                name: string;
                            };
                        };
                    }[];
                    tags: ({
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                        display: boolean;
                    } | {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                        display?: undefined;
                    })[];
                }[];
            };
        };
    };
    select: () => {
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
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
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
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    quantity: {
                        selected: {
                            count: number;
                        };
                    };
                    xinput: {
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
                            id: string;
                            resubmit: boolean;
                            multiple_sumbissions: boolean;
                        };
                        required: boolean;
                    };
                }[];
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                };
            };
        };
    };
    init: () => {
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
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
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
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                    };
                    xinput: {
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
                            id: string;
                            resubmit: boolean;
                            multiple_sumbissions: boolean;
                        };
                        required: boolean;
                    };
                }[];
                fulfillments: {
                    customer: {
                        id: string;
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    state: {
                        descriptor: {
                            name: string;
                        };
                    };
                    stops: {
                        authorization: {
                            type: string;
                        };
                    }[];
                }[];
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                    breakup: {
                        descriptor: {
                            name: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                        quantity: {
                            allocated: {
                                measure: {
                                    value: string;
                                    unit: string;
                                };
                            };
                        };
                    }[];
                };
                billing: {
                    name: string;
                    email: string;
                };
                payments: {
                    type: string;
                    url: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                    status: string;
                    time: {
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            name: string;
                        };
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
            location: {
                country: {
                    code: string;
                };
            };
            version: string;
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                        short_desc: string;
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    quantity: {
                        minimum: {
                            count: number;
                        };
                        selected: {
                            count: number;
                        };
                    };
                }[];
                fulfillments: {
                    customer: {
                        id: string;
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    state: {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                    };
                    agent: {
                        person: {
                            name: string;
                        };
                        organization: {
                            descriptor: {
                                name: string;
                            };
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
                        descriptor: {
                            name: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                        quantity: {
                            allocated: {
                                measure: {
                                    value: string;
                                    unit: string;
                                };
                            };
                        };
                    }[];
                };
                billing: {
                    name: string;
                    email: string;
                    phone: string;
                };
                payments: {
                    collected_by: string;
                    method: string;
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                        source_virtual_payment_address: string;
                        timestamp: string;
                    };
                    status: string;
                }[];
                docs: {
                    mime_type: string;
                    descriptor: {
                        name: string;
                    };
                    url: string;
                }[];
                cancellation_terms: {
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
            location: {
                country: {
                    code: string;
                };
            };
            version: string;
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                status: string;
                provider: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                        short_desc: string;
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                    };
                }[];
                fulfillments: {
                    customer: {
                        id: string;
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    state: {
                        descriptor: {
                            name: string;
                        };
                    };
                }[];
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
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
                };
                billing: {
                    name: string;
                    email: string;
                };
                payments: {
                    type: string;
                    url: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                    status: string;
                    time: {
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            name: string;
                        };
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
            location: {
                country: {
                    code: string;
                };
            };
            transaction_id: string;
            message_id: string;
            action: string;
            timestamp: string;
            version: string;
            ttl: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
        };
        message: {
            tracking: {
                id: string;
                url: string;
                status: string;
            };
        };
    };
    cancel: () => {
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
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                status: string;
                provider: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                        short_desc: string;
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                    };
                }[];
                fulfillments: {
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    state: {
                        descriptor: {
                            name: string;
                        };
                    };
                }[];
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
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
                };
                payments: {
                    type: string;
                    url: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                    status: string;
                    time: {
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            name: string;
                        };
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
            location: {
                country: {
                    code: string;
                };
            };
            version: string;
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            ttl: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    id: string;
                    descriptor: {
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                        short_desc: string;
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                    };
                }[];
                fulfillments: {
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    state: {
                        descriptor: {
                            name: string;
                        };
                    };
                }[];
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
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
                };
                payments: {
                    type: string;
                    url: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                    status: string;
                    time: {
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            name: string;
                        };
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
                    name: string;
                    code: string;
                };
            };
            city: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            feedback_form: {
                xinput: {
                    form: {
                        url: string;
                    };
                    required: string;
                };
            };
        };
    };
    support: () => {
        context: {
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            transaction_id: string;
            message_id: string;
            action: string;
            timestamp: string;
            version: string;
            ttl: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
        };
        message: {
            support: {
                order_id: string;
                phone: string;
                email: string;
                url: string;
            };
        };
    };
    cancellationReasons: () => {
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
            bpp_id: string;
            bpp_uri: string;
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
            location: {
                country: {
                    code: string;
                };
            };
            version: string;
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
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
