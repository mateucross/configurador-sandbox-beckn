import { DHPApiInterface } from "src/dhp/dhp-api.interface";
export declare class ConsultationApiService implements DHPApiInterface {
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
                    fulfillments: {
                        id: string;
                        type: string;
                        agent: {
                            person: {
                                id: string;
                                name: string;
                                gender: string;
                                creds: {
                                    id: string;
                                    type: string;
                                    url: string;
                                }[];
                                languages: {
                                    code: string;
                                    name: string;
                                }[];
                                skills: {
                                    code: string;
                                    name: string;
                                }[];
                                tags: {
                                    display: boolean;
                                    descriptor: {
                                        code: string;
                                        name: string;
                                    };
                                    list: {
                                        value: string;
                                    }[];
                                }[];
                            };
                            rating: string;
                        };
                        stops: {
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
                    items: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                            short_desc: string;
                            long_desc: string;
                        };
                        price: {
                            value: string;
                            currency: string;
                        };
                        category_ids: string[];
                        fulfillment_ids: string[];
                        time: {
                            duration: string;
                        };
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
                        short_desc: string;
                        long_desc: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                    time: {
                        duration: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    agent: {
                        person: {
                            id: string;
                            name: string;
                            gender: string;
                            creds: {
                                id: string;
                                type: string;
                                url: string;
                            }[];
                            languages: {
                                code: string;
                                name: string;
                            }[];
                            skills: {
                                code: string;
                                name: string;
                            }[];
                            tags: {
                                display: boolean;
                                descriptor: {
                                    code: string;
                                    name: string;
                                };
                                list: {
                                    value: string;
                                }[];
                            }[];
                        };
                        rating: string;
                    };
                    stops: {
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
                        time: {
                            label: string;
                            duration: string;
                            range: {
                                start: string;
                                end: string;
                            };
                            days: string;
                            schedule: {
                                holidays: string[];
                            };
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
                        short_desc: string;
                        long_desc: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                    time: {
                        duration: string;
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
                }[];
                fulfillments: {
                    id: string;
                    type: string;
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
                            creds: {
                                id: string;
                                type: string;
                                url: string;
                            }[];
                            languages: {
                                code: string;
                                name: string;
                            }[];
                            skills: {
                                code: string;
                                name: string;
                            }[];
                            tags: {
                                display: boolean;
                                descriptor: {
                                    code: string;
                                    name: string;
                                };
                                list: {
                                    value: string;
                                }[];
                            }[];
                        };
                        rating: string;
                    };
                    stops: {
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
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
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
                    reason_required: boolean;
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
                        short_desc: string;
                        long_desc: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                    time: {
                        duration: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
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
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                    agent: {
                        person: {
                            id: string;
                            name: string;
                            gender: string;
                        };
                    };
                    stops: {
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
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
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
                    reason_required: boolean;
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
                        short_desc: string;
                        long_desc: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                    time: {
                        duration: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
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
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                    agent: {
                        person: {
                            id: string;
                            name: string;
                            gender: string;
                        };
                    };
                    stops: {
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
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
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
                    reason_required: boolean;
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
                        short_desc: string;
                        long_desc: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                    time: {
                        duration: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
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
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                    agent: {
                        person: {
                            id: string;
                            name: string;
                            gender: string;
                        };
                    };
                    stops: {
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
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
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
                    reason_required: boolean;
                    cancellation_fee: {
                        amount: {
                            currency: string;
                            value: string;
                        };
                    };
                }[];
                cancellation: {
                    time: string;
                    cancelled_by: string;
                };
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
                        short_desc: string;
                        long_desc: string;
                    };
                    price: {
                        value: string;
                        currency: string;
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                    time: {
                        duration: string;
                    };
                }[];
                fulfillments: {
                    id: string;
                    type: string;
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
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                    agent: {
                        person: {
                            id: string;
                            name: string;
                            gender: string;
                        };
                    };
                    stops: {
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
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
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
                    reason_required: boolean;
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
