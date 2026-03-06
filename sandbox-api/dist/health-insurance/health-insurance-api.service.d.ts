import { FinancialServicesApiInterface } from "src/financial-services/financial-services-api.interface";
export declare class HealthInsuranceApiService implements FinancialServicesApiInterface {
    search: () => {
        context: {
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            message_id: string;
            timestamp: string;
            transaction_id: string;
            ttl: string;
            core_version: string;
        };
        message: {
            catalog: {
                descriptor: {
                    name: string;
                };
                providers: {
                    categories: {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        id: string;
                    }[];
                    descriptor: {
                        long_desc: string;
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                    id: string;
                    items: {
                        category_ids: string[];
                        descriptor: {
                            code: string;
                            name: string;
                            short_desc: string;
                        };
                        id: string;
                        tags: {
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
                        }[];
                        time: {
                            duration: string;
                            label: string;
                        };
                        xinput: {
                            form: {
                                mime_type: string;
                                url: string;
                            };
                            required: boolean;
                        };
                        add_ons: {
                            id: string;
                            descriptor: {
                                name: string;
                                code: string;
                            };
                        }[];
                    }[];
                }[];
            };
        };
    };
    select: () => {
        context: {
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            message_id: string;
            timestamp: string;
            transaction_id: string;
            ttl: string;
            core_version: string;
        };
        message: {
            order: {
                items: {
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                    fulfillment_ids: string[];
                    id: string;
                    price: {
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
                    add_ons: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        quantity: {
                            selected: {
                                count: number;
                            };
                        };
                    }[];
                    time: {
                        duration: string;
                        label: string;
                    };
                    xinput: {
                        form: {
                            url: string;
                        };
                        required: boolean;
                    };
                }[];
                provider: {
                    descriptor: {
                        long_desc: string;
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                    id: string;
                };
                quote: {
                    breakup: {
                        price: {
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
    init: () => {
        context: {
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            message_id: string;
            timestamp: string;
            transaction_id: string;
            ttl: string;
            core_version: string;
        };
        message: {
            order: {
                fulfillments: {
                    customer: {
                        contact: {
                            email: string;
                            phone: string;
                        };
                        person: {
                            dob: string;
                            gender: string;
                            name: string;
                            tags: {
                                descriptor: {
                                    code: string;
                                };
                                list: {
                                    descriptor: {
                                        name: string;
                                    };
                                    value: string;
                                }[];
                            }[];
                        };
                    };
                    id: string;
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
                items: {
                    add_ons: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        quantity: {
                            selected: {
                                count: number;
                            };
                        };
                    }[];
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                    id: string;
                    price: {
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
                    time: {
                        duration: string;
                        label: string;
                    };
                    xinput: {
                        form: {
                            url: string;
                        };
                        required: boolean;
                    };
                }[];
                payments: {
                    collected_by: string;
                    params: {
                        amount: string;
                        bank_account_number: string;
                        bank_code: string;
                        currency: string;
                    };
                    status: string;
                    type: string;
                }[];
                provider: {
                    descriptor: {
                        long_desc: string;
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                    id: string;
                };
                quote: {
                    breakup: {
                        price: {
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
    confirm: () => {
        context: {
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            message_id: string;
            timestamp: string;
            transaction_id: string;
            ttl: string;
            core_version: string;
        };
        message: {
            order: {
                fulfillments: {
                    customer: {
                        id: string;
                        contact: {
                            email: string;
                            phone: string;
                        };
                        person: {
                            dob: string;
                            gender: string;
                            name: string;
                        };
                    };
                    id: string;
                }[];
                items: {
                    add_ons: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        quantity: {
                            selected: {
                                count: number;
                            };
                        };
                    }[];
                    descriptor: {
                        name: string;
                        short_desc: string;
                    };
                    fulfillment_ids: string[];
                    id: string;
                    price: {
                        value: string;
                    };
                    tags: {
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
                    }[];
                    time: {
                        duration: string;
                        label: string;
                    };
                }[];
                id: string;
                payments: {
                    collected_by: string;
                    params: {
                        amount: string;
                        bank_account_number: string;
                        bank_code: string;
                        currency: string;
                    };
                    status: string;
                    type: string;
                    transaction_id: string;
                }[];
                provider: {
                    descriptor: {
                        long_desc: string;
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                    id: string;
                };
                quote: {
                    breakup: {
                        price: {
                            value: string;
                        };
                        title: string;
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                };
                docs: {
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    mime_type: string;
                    url: string;
                }[];
            };
        };
    };
    status: () => {
        context: {
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            message_id: string;
            timestamp: string;
            transaction_id: string;
            ttl: string;
            version: string;
        };
        message: {
            order: {
                fulfillments: {
                    customer: {
                        id: string;
                        contact: {
                            email: string;
                            phone: string;
                        };
                        person: {
                            dob: string;
                            gender: string;
                            name: string;
                        };
                    };
                    id: string;
                    state: {
                        descriptor: {
                            name: string;
                        };
                    };
                }[];
                items: {
                    add_ons: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        quantity: {
                            selected: {
                                count: number;
                            };
                        };
                    }[];
                    descriptor: {
                        name: string;
                        short_desc: string;
                    };
                    fulfillment_ids: string[];
                    id: string;
                    price: {
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
                    time: {
                        duration: string;
                        label: string;
                    };
                }[];
                id: string;
                payments: {
                    collected_by: string;
                    params: {
                        amount: string;
                        bank_account_number: string;
                        bank_code: string;
                        currency: string;
                    };
                    status: string;
                    type: string;
                    transaction_id: string;
                }[];
                provider: {
                    descriptor: {
                        long_desc: string;
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                    id: string;
                };
                quote: {
                    breakup: {
                        price: {
                            value: string;
                        };
                        title: string;
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                };
                docs: {
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    mime_type: string;
                    url: string;
                }[];
            };
        };
    };
    track: () => string;
    cancel: () => {
        context: {
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            message_id: string;
            timestamp: string;
            transaction_id: string;
            ttl: string;
            core_version: string;
        };
        message: {
            order: {
                fulfillments: {
                    customer: {
                        contact: {
                            email: string;
                            phone: string;
                        };
                        person: {
                            dob: string;
                            gender: string;
                            name: string;
                            tags: {
                                descriptor: {
                                    code: string;
                                };
                                list: {
                                    descriptor: {
                                        name: string;
                                    };
                                    value: string;
                                }[];
                            }[];
                        };
                    };
                    id: string;
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
                items: {
                    add_ons: {
                        id: string;
                    }[];
                    category_ids: string[];
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                    fulfillment_ids: string[];
                    id: string;
                    price: {
                        value: string;
                    };
                    tags: ({
                        descriptor: {
                            code: string;
                            name?: undefined;
                        };
                        list: {
                            value: string;
                        }[];
                    } | {
                        descriptor: {
                            name: string;
                            code?: undefined;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                    })[];
                    time: {
                        duration: string;
                        label: string;
                    };
                }[];
                id: string;
                payments: {
                    collected_by: string;
                    params: {
                        amount: string;
                        bank_account_number: string;
                        bank_code: string;
                        currency: string;
                    };
                    status: string;
                    type: string;
                    transaction_id: string;
                }[];
                provider: {
                    descriptor: {
                        long_desc: string;
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                    id: string;
                };
                quote: {
                    breakup: {
                        price: {
                            value: string;
                        };
                        title: string;
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                    status: string;
                };
            };
        };
    };
    update: () => {
        context: {
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            message_id: string;
            timestamp: string;
            transaction_id: string;
            ttl: string;
            core_version: string;
        };
        message: {
            order: {
                fulfillments: {
                    customer: {
                        contact: {
                            email: string;
                            phone: string;
                        };
                        person: {
                            dob: string;
                            gender: string;
                            name: string;
                        };
                    };
                    state: {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                    };
                    id: string;
                }[];
                items: {
                    add_ons: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        quantity: {
                            selected: {
                                count: number;
                            };
                        };
                    }[];
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                    fulfillment_ids: string[];
                    id: string;
                    price: {
                        value: string;
                    };
                    tags: {
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
                    }[];
                    time: {
                        duration: string;
                        label: string;
                    };
                }[];
                id: string;
                payments: {
                    collected_by: string;
                    params: {
                        amount: string;
                        bank_account_number: string;
                        bank_code: string;
                        currency: string;
                    };
                    status: string;
                    type: string;
                    transaction_id: string;
                }[];
                provider: {
                    descriptor: {
                        long_desc: string;
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                        }[];
                    };
                    id: string;
                };
                quote: {
                    breakup: {
                        price: {
                            value: string;
                        };
                        title: string;
                    }[];
                    price: {
                        currency: string;
                        value: string;
                    };
                };
                docs: {
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    mime_type: string;
                    url: string;
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
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            domain: string;
            location: {
                country: {
                    code: string;
                };
            };
            message_id: string;
            timestamp: string;
            transaction_id: string;
            ttl: string;
            core_version: string;
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
