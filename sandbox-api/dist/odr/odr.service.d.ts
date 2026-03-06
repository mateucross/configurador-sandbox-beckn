import { ODRClientDTO } from "./dto/odr.dto";
import { ODRApiInterface } from "./odr-api.interface";
export declare class ODRService implements ODRApiInterface {
    search: (odrRequest: ODRClientDTO) => {
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
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
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
                        images: {
                            url: string;
                            size_type: string;
                        }[];
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        additional_desc: {
                            url: string;
                        };
                    };
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    items: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                            short_desc: string;
                            long_desc: string;
                            images: {
                                url: string;
                            }[];
                        };
                        category_ids: string[];
                        add_ons: {
                            id: string;
                            descriptor: {
                                code: string;
                                name: string;
                            };
                        }[];
                    }[];
                    offers: {
                        descriptor: {
                            name: string;
                        };
                        category_ids: string[];
                        item_ids: string[];
                    }[];
                    tags: ({
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            descriptor: {
                                code: string;
                                name: string;
                            };
                            value: string;
                        }[];
                    } | {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                    })[];
                }[];
            };
        };
    };
    select: (odrRequest: ODRClientDTO) => {
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
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
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
                        additional_desc: {
                            url: string;
                        };
                    };
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                    category_ids: string[];
                }[];
                quote: {
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
    init: (odrRequest: ODRClientDTO) => {
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
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
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
                        additional_desc: {
                            url: string;
                        };
                    };
                };
                categories: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                }[];
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                    category_ids: string[];
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
                        };
                        required: boolean;
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
                            value: string;
                            currency: string;
                        };
                    }[];
                };
                billing: {
                    name: string;
                    email: string;
                    address: string;
                    city: {
                        name: string;
                    };
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
                }[];
            };
        };
    };
    confirm: (odrRequest: ODRClientDTO) => {
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
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            ttl: string;
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
                        additional_desc: {
                            url: string;
                        };
                    };
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                    category_ids: string[];
                }[];
                quote: {
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
                billing: {
                    name: string;
                    email: string;
                    address: string;
                    city: {
                        name: string;
                    };
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
                    agent: {
                        person: {
                            id: string;
                            name: string;
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
                        updated_at: string;
                    };
                    stops: {
                        instructions: {
                            name: string;
                            short_desc: string;
                            media: {
                                url: string;
                            }[];
                        };
                    }[];
                }[];
                payments: {
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                    };
                    status: string;
                    time: {
                        timestamp: string;
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
                docs: {
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                    mime_type: string;
                    url: string;
                }[];
                created_at: string;
            };
        };
    };
    status: (odrRequest: ODRClientDTO) => {
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
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            ttl: string;
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
                        additional_desc: {
                            url: string;
                        };
                    };
                };
                categories: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                }[];
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                    };
                    category_ids: string[];
                }[];
                quote: {
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
                billing: {
                    name: string;
                    email: string;
                    address: string;
                    city: {
                        name: string;
                    };
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
                    agent: {
                        person: {
                            id: string;
                            name: string;
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
                        updated_at: string;
                    };
                    stops: {
                        instructions: {
                            name: string;
                            short_desc: string;
                            media: {
                                url: string;
                            }[];
                        };
                    }[];
                }[];
                payments: {
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                    };
                    status: string;
                    time: {
                        timestamp: string;
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
                docs: {
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                    mime_type: string;
                    url: string;
                }[];
                created_at: string;
            };
        };
    };
    cancel: (odrRequest: ODRClientDTO) => {
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
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            ttl: string;
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
                        long_desc: string;
                        additional_desc: {
                            url: string;
                        };
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
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
                            value: string;
                            currency: string;
                        };
                    }[];
                };
                billing: {
                    name: string;
                    email: string;
                    address: string;
                    city: {
                        name: string;
                    };
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
                    agent: {
                        person: {
                            id: string;
                            name: string;
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
                        updated_at: string;
                    };
                }[];
                payments: {
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                    };
                    status: string;
                    time: {
                        timestamp: string;
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
                docs: {
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                    mime_type: string;
                    url: string;
                }[];
                created_at: string;
            };
        };
    };
    support: (odrRequest: ODRClientDTO) => {
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
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            ttl: string;
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
    rating: (odrRequest: ODRClientDTO) => {
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
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            ttl: string;
        };
        message: {
            feedback_form: {
                form: {
                    url: string;
                };
                required: boolean;
            };
        };
    };
    update: (odrRequest: ODRClientDTO) => {
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
            bap_uri: string;
            bap_id: string;
            bpp_id: string;
            bpp_uri: string;
            ttl: string;
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
                        additional_desc: {
                            url: string;
                        };
                    };
                };
                items: {
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
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
                            value: string;
                            currency: string;
                        };
                    }[];
                };
                billing: {
                    name: string;
                    email: string;
                    address: string;
                    city: {
                        name: string;
                    };
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
                    agent: {
                        person: {
                            id: string;
                            name: string;
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
                        updated_at: string;
                    };
                    stops: ({
                        instructions: {
                            name: string;
                            short_desc: string;
                            media: {
                                url: string;
                            }[];
                        };
                        time?: undefined;
                    } | {
                        time: {
                            label: string;
                            Range: {
                                start: string;
                                end: string;
                            };
                        };
                        instructions?: undefined;
                    })[];
                }[];
                payments: {
                    type: string;
                    params: {
                        amount: string;
                        currency: string;
                        transaction_id: string;
                    };
                    status: string;
                    time: {
                        timestamp: string;
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
                docs: {
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                    mime_type: string;
                    url: string;
                }[];
                created_at: string;
            };
        };
    };
    track: (odrRequest: ODRClientDTO) => {
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
