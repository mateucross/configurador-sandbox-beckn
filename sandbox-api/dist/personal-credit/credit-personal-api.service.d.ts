import { FinancialServicesApiInterface } from "src/financial-services/financial-services-api.interface";
export declare class CreditPersonalApiService implements FinancialServicesApiInterface {
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
                        long_desc: string;
                    };
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    items: ({
                        id: string;
                        descriptor: {
                            code: string;
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
                                    short_desc: string;
                                };
                            }[];
                            display: boolean;
                        }[];
                        matched: boolean;
                        recommended: boolean;
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
                            code: string;
                            name: string;
                        };
                        category_ids: string[];
                        tags: {
                            descriptor: {
                                name: string;
                            };
                            list: {
                                descriptor: {
                                    name: string;
                                    short_desc: string;
                                };
                            }[];
                            display: boolean;
                        }[];
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
                        recommended?: undefined;
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
            action: string;
            version: string;
            bap_id: string;
            bap_uri: string;
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
                        code: string;
                        name: string;
                    };
                    tags: {
                        descriptor: {
                            name: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                                short_desc: string;
                            };
                            value: string;
                        }[];
                        display: boolean;
                    }[];
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
                            resubmit: boolean;
                            multiple_sumbissions: boolean;
                        };
                        required: boolean;
                    };
                }[];
                quote: {
                    id: string;
                    price: {
                        currency: string;
                        value: string;
                    };
                    breakup: {
                        title: string;
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
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
                        long_desc: string;
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
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
                                short_desc: string;
                            };
                            value: string;
                        }[];
                        display: boolean;
                    }[];
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
                            resubmit: boolean;
                            multiple_sumbissions: boolean;
                        };
                        required: boolean;
                    };
                }[];
                quote: {
                    id: string;
                    price: {
                        currency: string;
                        value: string;
                    };
                    breakup: {
                        title: string;
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
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
                    stops: {
                        authorization: {
                            type: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            name: string;
                        };
                    };
                }[];
                payments: ({
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
                } | {
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
                    type?: undefined;
                    url?: undefined;
                })[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            name: string;
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
                        long_desc: string;
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
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
                                short_desc: string;
                            };
                            value: string;
                        }[];
                        display: boolean;
                    }[];
                }[];
                quote: {
                    id: string;
                    price: {
                        currency: string;
                        value: string;
                    };
                    breakup: {
                        title: string;
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
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
                payments: ({
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
                } | {
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
                    type?: undefined;
                    url?: undefined;
                })[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            name: string;
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
                        long_desc: string;
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
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
                                short_desc: string;
                            };
                            value: string;
                        }[];
                        display: boolean;
                    }[];
                }[];
                quote: {
                    id: string;
                    price: {
                        currency: string;
                        value: string;
                    };
                    breakup: {
                        title: string;
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
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
                payments: {
                    url: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                    status: string;
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            name: string;
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
    track: () => string;
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
                        code: string;
                        name: string;
                    };
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
                                short_desc: string;
                            };
                            value: string;
                        }[];
                        display: boolean;
                    }[];
                }[];
                quote: {
                    id: string;
                    price: {
                        currency: string;
                        value: string;
                    };
                    breakup: {
                        title: string;
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
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
                payments: {
                    url: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                    status: string;
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            name: string;
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
                        long_desc: string;
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
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
                                short_desc: string;
                            };
                            value: string;
                        }[];
                        display: boolean;
                    }[];
                }[];
                quote: {
                    id: string;
                    price: {
                        currency: string;
                        value: string;
                    };
                    breakup: {
                        title: string;
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
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
                payments: {
                    url: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                    status: string;
                }[];
                cancellation_terms: {
                    fulfillment_state: {
                        descriptor: {
                            name: string;
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
                    name: string;
                    code: string;
                };
            };
            city: string;
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
