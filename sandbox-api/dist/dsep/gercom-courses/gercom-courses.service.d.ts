import { DSEPApiInterface } from "../dsep-api.interface";
import { DSEPRequestDto } from "../dto/request.dto";
export declare class GercomCoursesService implements DSEPApiInterface {
    search: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            version: string;
            action: string;
            bap_id: string;
            bap_uri: string;
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
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                            size_type: string;
                        }[];
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
                        quantity: {
                            maximum: {
                                count: number;
                            };
                        };
                        descriptor: {
                            name: string;
                            short_desc: string;
                            long_desc: string;
                            images: {
                                url: string;
                            }[];
                            media: {
                                url: string;
                            }[];
                        };
                        creator: {
                            descriptor: {
                                name: string;
                                short_desc: string;
                                long_desc: string;
                                images: {
                                    url: string;
                                }[];
                            };
                        };
                        price: {
                            currency: string;
                            value: string;
                        };
                        category_ids: string[];
                        rating: string;
                        rateable: boolean;
                        tags: {
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
                            display: boolean;
                        }[];
                    }[];
                    fulfillments: {
                        agent: {
                            person: {
                                name: string;
                            };
                            contact: {
                                email: string;
                            };
                        };
                    }[];
                }[];
            };
        };
    };
    select: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            version: string;
            action: string;
            bap_id: string;
            bap_uri: string;
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
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                            size_type: string;
                        }[];
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
                    quantity: {
                        maximum: {
                            count: number;
                        };
                    };
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            url: string;
                        }[];
                    };
                    creator: {
                        descriptor: {
                            name: string;
                            short_desc: string;
                            long_desc: string;
                            images: {
                                url: string;
                            }[];
                        };
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    category_ids: string[];
                    rating: string;
                    rateable: boolean;
                    tags: {
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
                        display: boolean;
                    }[];
                }[];
                fulfillments: {
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
                };
            };
        };
    };
    init: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            version: string;
            action: string;
            bap_id: string;
            bap_uri: string;
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
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                            size_type: string;
                        }[];
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
                    quantity: {
                        maximum: {
                            count: number;
                        };
                    };
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            url: string;
                        }[];
                    };
                    creator: {
                        descriptor: {
                            name: string;
                            short_desc: string;
                            long_desc: string;
                            images: {
                                url: string;
                            }[];
                        };
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    category_ids: string[];
                    rating: string;
                    rateable: boolean;
                    tags: {
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
                        display: boolean;
                    }[];
                }[];
                fulfillments: {
                    agent: {
                        person: {
                            name: string;
                        };
                        contact: {
                            email: string;
                        };
                    };
                    customer: {
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                            tags: {
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
                                display: boolean;
                            }[];
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                }[];
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                };
                billing: {
                    name: string;
                    phone: string;
                    email: string;
                    address: string;
                };
                payments: {
                    params: {
                        amount: string;
                        currency: string;
                    };
                    url: string;
                    type: string;
                    status: string;
                    collected_by: string;
                }[];
            };
        };
    };
    confirm: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            version: string;
            action: string;
            bap_id: string;
            bap_uri: string;
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
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                            size_type: string;
                        }[];
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
                    quantity: {
                        maximum: {
                            count: number;
                        };
                    };
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            url: string;
                        }[];
                    };
                    creator: {
                        descriptor: {
                            name: string;
                            short_desc: string;
                            long_desc: string;
                            images: {
                                url: string;
                            }[];
                        };
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    category_ids: string[];
                    rating: string;
                    rateable: boolean;
                    "add-ons": {
                        id: string;
                        descriptor: {
                            name: string;
                            long_desc: string;
                            media: {
                                mimetype: string;
                                url: string;
                            }[];
                        };
                    }[];
                    tags: {
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
                        display: boolean;
                    }[];
                }[];
                fulfillments: {
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        updated_at: string;
                    };
                    agent: {
                        person: {
                            name: string;
                        };
                        contact: {
                            email: string;
                        };
                    };
                    customer: {
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
                    stops: {
                        id: string;
                        instructions: {
                            name: string;
                            long_desc: string;
                            media: {
                                mimetype: string;
                                url: string;
                            }[];
                        };
                    }[];
                    tags: {
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
                        display: boolean;
                    }[];
                }[];
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                };
                billing: {
                    name: string;
                    phone: string;
                    email: string;
                    address: string;
                };
                payments: {
                    params: {
                        amount: string;
                        currency: string;
                    };
                    type: string;
                    status: string;
                    collected_by: string;
                }[];
            };
        };
    };
    status: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            version: string;
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
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                            size_type: string;
                        }[];
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
                    quantity: {
                        maximum: {
                            count: number;
                        };
                    };
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            url: string;
                        }[];
                    };
                    creator: {
                        descriptor: {
                            name: string;
                            short_desc: string;
                            long_desc: string;
                            images: {
                                url: string;
                            }[];
                        };
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    category_ids: string[];
                    rating: string;
                    rateable: boolean;
                    "add-ons": {
                        id: string;
                        descriptor: {
                            name: string;
                            long_desc: string;
                            media: {
                                mimetype: string;
                                url: string;
                            }[];
                        };
                    }[];
                    tags: {
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
                        display: boolean;
                    }[];
                }[];
                fulfillments: {
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        updated_at: string;
                    };
                    agent: {
                        person: {
                            name: string;
                        };
                        contact: {
                            email: string;
                        };
                    };
                    customer: {
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                            tags: {
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
                                display: boolean;
                            }[];
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    stops: {
                        id: string;
                        instructions: {
                            name: string;
                            long_desc: string;
                            media: {
                                mimetype: string;
                                url: string;
                            }[];
                        };
                    }[];
                    tags: {
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
                        display: boolean;
                    }[];
                }[];
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                };
                billing: {
                    name: string;
                    phone: string;
                    email: string;
                    address: string;
                };
                payments: {
                    params: {
                        amount: string;
                        currency: string;
                    };
                    type: string;
                    status: string;
                    collected_by: string;
                }[];
            };
        };
    };
    cancel: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            version: string;
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
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                            size_type: string;
                        }[];
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
                    quantity: {
                        maximum: {
                            count: number;
                        };
                    };
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            url: string;
                        }[];
                    };
                    creator: {
                        descriptor: {
                            name: string;
                            short_desc: string;
                            long_desc: string;
                            images: {
                                url: string;
                            }[];
                        };
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    category_ids: string[];
                    rating: string;
                    rateable: boolean;
                    "add-ons": {
                        id: string;
                        descriptor: {
                            name: string;
                            long_desc: string;
                            media: {
                                mimetype: string;
                                url: string;
                            }[];
                        };
                    }[];
                    tags: {
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
                        display: boolean;
                    }[];
                }[];
                fulfillments: {
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        updated_at: string;
                    };
                    agent: {
                        person: {
                            name: string;
                        };
                        contact: {
                            email: string;
                        };
                    };
                    customer: {
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
                    stops: {
                        id: string;
                        instructions: {
                            name: string;
                            long_desc: string;
                            media: {
                                mimetype: string;
                                url: string;
                            }[];
                        };
                    }[];
                    tags: {
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
                        display: boolean;
                    }[];
                }[];
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                };
                billing: {
                    name: string;
                    phone: string;
                    email: string;
                    address: string;
                };
                payments: {
                    params: {
                        amount: string;
                        currency: string;
                    };
                    type: string;
                    status: string;
                    collected_by: string;
                }[];
            };
        };
    };
    update: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            version: string;
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
                        name: string;
                        short_desc: string;
                        images: {
                            url: string;
                            size_type: string;
                        }[];
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
                    quantity: {
                        maximum: {
                            count: number;
                        };
                    };
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        images: {
                            url: string;
                        }[];
                        media: {
                            url: string;
                        }[];
                    };
                    creator: {
                        descriptor: {
                            name: string;
                            short_desc: string;
                            long_desc: string;
                            images: {
                                url: string;
                            }[];
                        };
                    };
                    price: {
                        currency: string;
                        value: string;
                    };
                    category_ids: string[];
                    rating: string;
                    rateable: boolean;
                    "add-ons": {
                        id: string;
                        descriptor: {
                            name: string;
                            long_desc: string;
                            media: {
                                mimetype: string;
                                url: string;
                            }[];
                        };
                    }[];
                    tags: {
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
                        display: boolean;
                    }[];
                }[];
                fulfillments: {
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        updated_at: string;
                    };
                    agent: {
                        person: {
                            name: string;
                        };
                        contact: {
                            email: string;
                        };
                    };
                    customer: {
                        person: {
                            name: string;
                            age: string;
                            gender: string;
                            tags: {
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
                                display: boolean;
                            }[];
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    stops: {
                        id: string;
                        instructions: {
                            name: string;
                            long_desc: string;
                            media: {
                                mimetype: string;
                                url: string;
                            }[];
                        };
                    }[];
                    tags: {
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
                        display: boolean;
                    }[];
                }[];
                quote: {
                    price: {
                        currency: string;
                        value: string;
                    };
                };
                billing: {
                    name: string;
                    phone: string;
                    email: string;
                    address: string;
                };
                payments: {
                    params: {
                        amount: string;
                        currency: string;
                    };
                    type: string;
                    status: string;
                    collected_by: string;
                }[];
            };
        };
    };
    support: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            version: string;
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
            action: string;
            version: string;
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
            feedback_form: {
                form: {
                    url: string;
                    mime_type: string;
                };
                required: string;
            };
        };
    };
    track: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            version: string;
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
            tracking: {
                id: string;
                url: string;
                status: string;
            };
        };
    };
}
