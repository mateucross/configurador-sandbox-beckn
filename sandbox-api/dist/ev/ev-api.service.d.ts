import { DentApiInterface } from "src/dent/dent-api.interface";
export declare class EVApiService implements DentApiInterface {
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
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            catalog: {
                providers: ({
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
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
                        stops: {
                            type: string;
                            time: {
                                timestamp: string;
                            };
                        }[];
                        tags: {
                            descriptor: {
                                name: string;
                            };
                            list: ({
                                descriptor: {
                                    name: string;
                                    code: string;
                                };
                                value: string;
                            } | {
                                descriptor: {
                                    name: string;
                                    code?: undefined;
                                };
                                value: string;
                            })[];
                            display: boolean;
                        }[];
                    }[];
                    items: {
                        id: string;
                        descriptor: {
                            code: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                        quantity: {
                            available: {
                                measure: {
                                    unit: string;
                                    value: string;
                                };
                            };
                        };
                        category_ids: string[];
                        location_ids: string[];
                        fulfillment_ids: string[];
                        add_ons: {
                            id: string;
                            descriptor: {
                                name: string;
                            };
                            price: {
                                value: string;
                                currency: string;
                            };
                        }[];
                    }[];
                } | {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc?: undefined;
                        images?: undefined;
                    };
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    fulfillments: ({
                        id: string;
                        type: string;
                        stops: {
                            location: {
                                gps: string;
                            };
                        }[];
                    } | {
                        id: string;
                        type: string;
                        stops: {
                            location: {
                                url: string;
                            };
                        }[];
                    })[];
                    items: {
                        id: string;
                        descriptor: {
                            code: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                        quantity: {
                            available: {
                                measure: {
                                    unit: string;
                                    value: string;
                                };
                            };
                        };
                        category_ids: string[];
                        fulfillment_ids: string[];
                        add_ons: {
                            id: string;
                            descriptor: {
                                name: string;
                            };
                            price: {
                                value: string;
                                currency: string;
                            };
                        }[];
                    }[];
                    locations?: undefined;
                })[];
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
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                providers: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                };
                items: ({
                    id: string;
                    descriptor: {
                        code: string;
                        name?: undefined;
                    };
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
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                } | {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    quantity?: undefined;
                })[];
                fulfillments: {
                    id: string;
                    type: string;
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                    tags: {
                        descriptor: {
                            name: string;
                        };
                        list: ({
                            descriptor: {
                                name: string;
                                code: string;
                            };
                            value: string;
                        } | {
                            descriptor: {
                                name: string;
                                code?: undefined;
                            };
                            value: string;
                        })[];
                        display: boolean;
                    }[];
                }[];
                quote: {
                    price: {
                        value: string;
                        currency: string;
                    };
                    breakup: ({
                        item: {
                            id: string;
                            descriptor: {
                                name: string;
                            };
                            quantity: {
                                selected: {
                                    measure: {
                                        value: string;
                                        unit: string;
                                    };
                                };
                            };
                            "add-ons"?: undefined;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    } | {
                        item: {
                            "add-ons": {
                                id: string;
                            }[];
                            descriptor: {
                                name: string;
                            };
                            id?: undefined;
                            quantity?: undefined;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    })[];
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
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                providers: {
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
                    };
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
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                    add_ons: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                }[];
                fulfillments: {
                    id: string;
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
                    };
                    type: string;
                    state: {
                        descriptor: {
                            code: string;
                        };
                    };
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
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
                        display: boolean;
                    }[];
                }[];
                billing: {
                    email: string;
                    number: string;
                };
                quote: {
                    price: {
                        value: string;
                        currency: string;
                    };
                    breakup: {
                        item: {
                            descriptor: {
                                name: string;
                            };
                            quantity: {
                                selected: {
                                    measure: {
                                        value: string;
                                        unit: string;
                                    };
                                };
                            };
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
                payments: {
                    url: string;
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
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
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                providers: {
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
                    };
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
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                    add_ons: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                }[];
                fulfillments: {
                    id: string;
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
                    };
                    type: string;
                    state: {
                        descriptor: {
                            code: string;
                        };
                    };
                    stops: ({
                        type: string;
                        location: {
                            gps: string;
                        };
                        time: {
                            timestamp: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        instructions: {
                            name: string;
                            short_desc: string;
                        };
                    } | {
                        type: string;
                        time: {
                            timestamp: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        location?: undefined;
                        instructions?: undefined;
                    })[];
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
                        display: boolean;
                    }[];
                }[];
                billing: {
                    email: string;
                    number: string;
                };
                quote: {
                    price: {
                        value: string;
                        currency: string;
                    };
                    breakup: {
                        item: {
                            descriptor: {
                                name: string;
                            };
                            quantity: {
                                selected: {
                                    measure: {
                                        value: string;
                                        unit: string;
                                    };
                                };
                            };
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
                payments: {
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                    };
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
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                providers: {
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
                    };
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
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                    add_ons: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                }[];
                fulfillments: {
                    id: string;
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
                    };
                    type: string;
                    state: {
                        descriptor: {
                            name: string;
                        };
                    };
                    stops: ({
                        type: string;
                        location: {
                            gps: string;
                        };
                        time: {
                            timestamp: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                    } | {
                        type: string;
                        time: {
                            timestamp: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        location?: undefined;
                    })[];
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
                        display: boolean;
                    }[];
                }[];
                billing: {
                    email: string;
                    number: string;
                };
                quote: {
                    price: {
                        value: string;
                        currency: string;
                    };
                    breakup: {
                        item: {
                            descriptor: {
                                name: string;
                            };
                            quantity: {
                                selected: {
                                    measure: {
                                        value: string;
                                        unit: string;
                                    };
                                };
                            };
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
                payments: {
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                    };
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
    track: () => string;
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
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                status: string;
                providers: {
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
                    };
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
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                    add_ons: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                }[];
                fulfillments: {
                    id: string;
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
                    };
                    type: string;
                    state: {
                        descriptor: {
                            code: string;
                        };
                    };
                    stops: {
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                    }[];
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
                        display: boolean;
                    }[];
                }[];
                billing: {
                    email: string;
                    number: string;
                };
                quote: {
                    price: {
                        value: string;
                        currency: string;
                    };
                    breakup: {
                        item: {
                            descriptor: {
                                name: string;
                            };
                            quantity: {
                                selected: {
                                    measure: {
                                        value: string;
                                        unit: string;
                                    };
                                };
                            };
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
                payments: {
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                    };
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
    update: (updateDto: any) => {
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
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                providers: {
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
                    };
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
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                    add_ons: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                }[];
                fulfillments: {
                    id: string;
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
                    };
                    type: string;
                    state: {
                        descriptor: {
                            code: string;
                        };
                    };
                    stops: ({
                        type: string;
                        location: {
                            gps: string;
                        };
                        time: {
                            timestamp: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                    } | {
                        type: string;
                        time: {
                            timestamp: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        location?: undefined;
                    })[];
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
                        display: boolean;
                    }[];
                }[];
                billing: {
                    email: string;
                    number: string;
                };
                quote: {
                    price: {
                        value: string;
                        currency: string;
                    };
                    breakup: {
                        item: {
                            descriptor: {
                                name: string;
                            };
                            quantity: {
                                selected: {
                                    measure: {
                                        value: string;
                                        unit: string;
                                    };
                                };
                            };
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
                payments: {
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                    };
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
            bap_uri: string;
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
                };
                required: string;
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
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            support: {
                ref_id: string;
                phone: string;
                email: string;
                url: string;
            };
        };
    };
    cancellationReasons: () => {
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
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
            timestamp: string;
        };
        message: {
            order: {
                id: string;
                status: string;
                providers: {
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
                    };
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
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                    add_ons: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                }[];
                fulfillments: {
                    id: string;
                    customer: {
                        person: {
                            name: string;
                        };
                        contact: {
                            phone: string;
                        };
                    };
                    type: string;
                    state: {
                        descriptor: {
                            code: string;
                        };
                    };
                    stops: {
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                    }[];
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
                        display: boolean;
                    }[];
                }[];
                billing: {
                    email: string;
                    number: string;
                };
                quote: {
                    price: {
                        value: string;
                        currency: string;
                    };
                    breakup: {
                        item: {
                            descriptor: {
                                name: string;
                            };
                            quantity: {
                                selected: {
                                    measure: {
                                        value: string;
                                        unit: string;
                                    };
                                };
                            };
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                    }[];
                };
                payments: {
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                    };
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
    ratingCategories: () => {
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
            bap_uri: string;
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
                };
                required: string;
            };
        };
    };
}
