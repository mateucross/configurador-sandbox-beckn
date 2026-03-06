import { DSEPApiInterface } from "../dsep-api.interface";
import { DSEPRequestDto } from "../dto/request.dto";
export declare class ScholarshipsGrantsService implements DSEPApiInterface {
    select: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                city: {
                    name: string;
                    code: string;
                };
                country: {
                    name: string;
                    code: string;
                };
            };
            action: string;
            timestamp: string;
            ttl: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
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
                    locations: {
                        id: string;
                        city: string;
                        state: string;
                    }[];
                    rateable: boolean;
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    time: {
                        label: string;
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                    rateable: boolean;
                    tags: ({
                        display: boolean;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                    } | {
                        display: boolean;
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
                    })[];
                    location_ids: string[];
                    category_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    tracking: boolean;
                    agent: {
                        person: {
                            name: string;
                        };
                        contact: {
                            email: string;
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
            };
        };
    };
    init: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                city: {
                    name: string;
                    code: string;
                };
                country: {
                    name: string;
                    code: string;
                };
            };
            action: string;
            timestamp: string;
            ttl: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
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
                    rateable: boolean;
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        long_desc: string;
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    time: {
                        label: string;
                        range: {
                            start: string;
                            end: string;
                        };
                    };
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
                    rateable: boolean;
                    tags: ({
                        display: boolean;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                    } | {
                        display: boolean;
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
                    })[];
                    location_ids: string[];
                    fulfillment_ids: string[];
                }[];
                billing: {
                    name: string;
                    organization: {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    address: string;
                    phone: string;
                };
                fulfillments: {
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        updated_at: string;
                    };
                    id: string;
                    type: string;
                    tracking: boolean;
                    agent: {
                        person: {
                            name: string;
                        };
                        contact: {
                            email: string;
                        };
                    };
                    customer: {
                        id: string;
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                }[];
                payments: {
                    params: {
                        bank_code: string;
                        bank_account_number: string;
                        bank_account_name: string;
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
    confirm: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                city: {
                    name: string;
                    code: string;
                };
                country: {
                    name: string;
                    code: string;
                };
            };
            action: string;
            timestamp: string;
            ttl: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
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
                    rateable: boolean;
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        long_desc: string;
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    time: {
                        label: string;
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                    rateable: boolean;
                    tags: ({
                        display: boolean;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                    } | {
                        display: boolean;
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
                    })[];
                    location_ids: string[];
                    fulfillment_ids: string[];
                }[];
                billing: {
                    name: string;
                    organization: {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    address: string;
                    phone: string;
                };
                fulfillments: {
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        updated_at: string;
                    };
                    id: string;
                    type: string;
                    tracking: boolean;
                    agent: {
                        person: {
                            name: string;
                        };
                        contact: {
                            email: string;
                        };
                    };
                    customer: {
                        id: string;
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
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
                docs: {
                    descriptor: {
                        name: string;
                        short_desc: string;
                    };
                    url: string;
                    mime_type: string;
                }[];
                payments: {
                    params: {
                        bank_code: string;
                        bank_account_number: string;
                        bank_account_name: string;
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
    status: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                city: {
                    name: string;
                    code: string;
                };
                country: {
                    name: string;
                    code: string;
                };
            };
            action: string;
            timestamp: string;
            ttl: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
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
                    rateable: boolean;
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        long_desc: string;
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    time: {
                        label: string;
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                    rateable: boolean;
                    tags: ({
                        display: boolean;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                    } | {
                        display: boolean;
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
                    })[];
                    location_ids: string[];
                    fulfillment_ids: string[];
                }[];
                billing: {
                    name: string;
                    organization: {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    address: string;
                    phone: string;
                };
                fulfillments: {
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        updated_at: string;
                    };
                    id: string;
                    type: string;
                    tracking: boolean;
                    agent: {
                        person: {
                            name: string;
                        };
                        contact: {
                            email: string;
                        };
                    };
                    customer: {
                        id: string;
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
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
                docs: {
                    descriptor: {
                        name: string;
                        short_desc: string;
                    };
                    url: string;
                    mime_type: string;
                }[];
                payments: {
                    params: {
                        bank_code: string;
                        bank_account_number: string;
                        bank_account_name: string;
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
    search: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                city: {
                    name: string;
                    code: string;
                };
                country: {
                    name: string;
                    code: string;
                };
            };
            action: string;
            timestamp: string;
            ttl: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
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
                    locations: {
                        id: string;
                        city: {
                            name: string;
                            code: string;
                        };
                        state: {
                            name: string;
                            code: string;
                        };
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
                        tracking: boolean;
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                    items: {
                        id: string;
                        descriptor: {
                            name: string;
                            long_desc: string;
                        };
                        price: {
                            currency: string;
                            value: string;
                        };
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        rateable: boolean;
                        tags: ({
                            display: boolean;
                            descriptor: {
                                code: string;
                                name: string;
                            };
                            list: {
                                value: string;
                            }[];
                        } | {
                            display: boolean;
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
                        })[];
                        category_ids: string[];
                        fulfillment_ids: string[];
                        location_ids: string[];
                    }[];
                    rateable: boolean;
                }[];
            };
        };
    };
    cancel: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                city: {
                    name: string;
                    code: string;
                };
                country: {
                    name: string;
                    code: string;
                };
            };
            action: string;
            timestamp: string;
            ttl: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
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
                    rateable: boolean;
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        long_desc: string;
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    time: {
                        label: string;
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                    rateable: boolean;
                    tags: ({
                        display: boolean;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                    } | {
                        display: boolean;
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
                    })[];
                    location_ids: string[];
                    fulfillment_ids: string[];
                }[];
                billing: {
                    name: string;
                    organization: {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    address: string;
                    phone: string;
                };
                fulfillments: {
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        updated_at: string;
                    };
                    id: string;
                    type: string;
                    tracking: boolean;
                    agent: {
                        person: {
                            name: string;
                        };
                        contact: {
                            email: string;
                        };
                    };
                    customer: {
                        id: string;
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
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
                docs: {
                    descriptor: {
                        name: string;
                        short_desc: string;
                    };
                    url: string;
                    mime_type: string;
                }[];
                payments: {
                    params: {
                        bank_code: string;
                        bank_account_number: string;
                        bank_account_name: string;
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
    track: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                city: {
                    name: string;
                    code: string;
                };
                country: {
                    name: string;
                    code: string;
                };
            };
            action: string;
            timestamp: string;
            ttl: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
        };
        message: {
            tracking: {
                url: string;
                status: string;
            };
        };
    };
    update: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                city: {
                    name: string;
                    code: string;
                };
                country: {
                    name: string;
                    code: string;
                };
            };
            action: string;
            timestamp: string;
            ttl: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
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
                    rateable: boolean;
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        long_desc: string;
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    time: {
                        label: string;
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                    rateable: boolean;
                    tags: ({
                        display: boolean;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                    } | {
                        display: boolean;
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
                    })[];
                    location_ids: string[];
                    fulfillment_ids: string[];
                }[];
                billing: {
                    name: string;
                    organization: {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    address: string;
                    phone: string;
                };
                fulfillments: {
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        updated_at: string;
                    };
                    id: string;
                    type: string;
                    tracking: boolean;
                    agent: {
                        person: {
                            name: string;
                        };
                        contact: {
                            email: string;
                        };
                    };
                    customer: {
                        id: string;
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
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
                docs: {
                    descriptor: {
                        name: string;
                        short_desc: string;
                    };
                    url: string;
                    mime_type: string;
                }[];
                payments: {
                    params: {
                        bank_code: string;
                        bank_account_number: string;
                        bank_account_name: string;
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
    support: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                city: {
                    name: string;
                    code: string;
                };
                country: {
                    name: string;
                    code: string;
                };
            };
            action: string;
            timestamp: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
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
    rating: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                city: {
                    name: string;
                    code: string;
                };
                country: {
                    name: string;
                    code: string;
                };
            };
            action: string;
            timestamp: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            transaction_id: string;
            message_id: string;
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
}
