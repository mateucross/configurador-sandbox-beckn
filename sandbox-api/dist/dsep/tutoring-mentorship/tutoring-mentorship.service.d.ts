import { DSEPApiInterface } from "../dsep-api.interface";
import { DSEPRequestDto } from "../dto/request.dto";
export declare class TutoringMentorshipService implements DSEPApiInterface {
    search: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            timestamp: string;
            ttl: string;
            version: string;
            message_id: string;
            transaction_id: string;
        };
        message: {
            catalog: {
                providers: {
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                    items: {
                        quantity: {
                            available: {
                                count: number;
                            };
                            allocated: {
                                count: number;
                            };
                        };
                        price: {
                            value: string;
                        };
                        id: string;
                        category_ids: string[];
                        descriptor: {
                            images: {
                                url: string;
                            }[];
                            code: string;
                            name: string;
                            short_desc: string;
                            long_desc: string;
                        };
                        fulfillment_ids: string[];
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
                    }[];
                    fulfillments: ({
                        id: string;
                        stops: {
                            time: {
                                range: {
                                    start: string;
                                    end: string;
                                };
                                label: string;
                            };
                        }[];
                        type: string;
                        tags: {
                            descriptor: {
                                code: string;
                            };
                            list: {
                                value: string;
                            }[];
                            display: boolean;
                        }[];
                        agent: {
                            person: {
                                name: string;
                                id: string;
                                languages: {
                                    name: string;
                                }[];
                            };
                        };
                        tracking: boolean;
                    } | {
                        id: string;
                        stops: {
                            time: {
                                range: {
                                    start: string;
                                    end: string;
                                };
                                label: string;
                            };
                        }[];
                        type: string;
                        tags: {
                            descriptor: {
                                code: string;
                                name: string;
                            };
                            list: {
                                value: string;
                            }[];
                            display: boolean;
                        }[];
                        agent: {
                            person: {
                                name: string;
                                id: string;
                                languages: {
                                    name: string;
                                }[];
                            };
                        };
                        tracking: boolean;
                    })[];
                }[];
                descriptor: {
                    name: string;
                    code: string;
                    short_desc: string;
                    long_desc: string;
                    images: {
                        url: string;
                        size_type: string;
                        width: string;
                        height: string;
                    }[];
                };
            };
        };
    };
    select: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            timestamp: string;
            ttl: string;
            version: string;
            message_id: string;
            transaction_id: string;
        };
        message: {
            order: {
                provider: {
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                };
                items: {
                    quantity: {
                        available: {
                            count: number;
                        };
                        allocated: {
                            count: number;
                        };
                    };
                    price: {
                        value: string;
                    };
                    id: string;
                    category_ids: string[];
                    descriptor: {
                        images: {
                            url: string;
                        }[];
                        code: string;
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
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
                }[];
                fulfillments: {
                    id: string;
                    stops: {
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            label: string;
                        };
                    }[];
                    type: string;
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                        display: boolean;
                    }[];
                    agent: {
                        person: {
                            name: string;
                            id: string;
                            languages: {
                                name: string;
                            }[];
                        };
                    };
                    tracking: boolean;
                }[];
                type: string;
            };
        };
    };
    init: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            timestamp: string;
            ttl: string;
            message_id: string;
            transaction_id: string;
        };
        message: {
            order: {
                provider: {
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                };
                items: {
                    quantity: {
                        available: {
                            count: number;
                        };
                        allocated: {
                            count: number;
                        };
                    };
                    price: {
                        value: string;
                    };
                    id: string;
                    category_ids: string[];
                    descriptor: {
                        images: {
                            url: string;
                        }[];
                        code: string;
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
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
                }[];
                fulfillments: {
                    id: string;
                    stops: {
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            label: string;
                        };
                    }[];
                    type: string;
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                        display: boolean;
                    }[];
                    agent: {
                        person: {
                            name: string;
                            id: string;
                            languages: {
                                name: string;
                            }[];
                        };
                    };
                    tracking: boolean;
                }[];
                type: string;
            };
        };
    };
    confirm: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            timestamp: string;
            ttl: string;
            version: string;
            message_id: string;
            transaction_id: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                };
                items: {
                    quantity: {
                        available: {
                            count: number;
                        };
                        allocated: {
                            count: number;
                        };
                    };
                    price: {
                        value: string;
                    };
                    id: string;
                    category_ids: string[];
                    descriptor: {
                        images: {
                            url: string;
                        }[];
                        code: string;
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
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
                }[];
                fulfillments: {
                    id: string;
                    stops: {
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            label: string;
                        };
                    }[];
                    type: string;
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                        display: boolean;
                    }[];
                    agent: {
                        person: {
                            name: string;
                            id: string;
                            languages: {
                                name: string;
                            }[];
                        };
                    };
                    tracking: boolean;
                }[];
                type: string;
            };
        };
    };
    status: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            timestamp: string;
            ttl: string;
            version: string;
            message_id: string;
            transaction_id: string;
        };
        message: {
            order: {
                id: string;
                state: string;
                provider: {
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                };
                items: {
                    quantity: {
                        available: {
                            count: number;
                        };
                        allocated: {
                            count: number;
                        };
                    };
                    price: {
                        value: string;
                    };
                    id: string;
                    category_ids: string[];
                    descriptor: {
                        images: {
                            url: string;
                        }[];
                        code: string;
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
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
                }[];
                fulfillments: {
                    id: string;
                    stops: {
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            label: string;
                        };
                    }[];
                    type: string;
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                        display: boolean;
                    }[];
                    agent: {
                        person: {
                            name: string;
                            id: string;
                            languages: {
                                name: string;
                            }[];
                        };
                    };
                    tracking: boolean;
                }[];
                type: string;
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
            timestamp: string;
            ttl: string;
            message_id: string;
            transaction_id: string;
        };
        message: {
            order: {
                id: string;
                provider: {
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                };
                items: {
                    quantity: {
                        available: {
                            count: number;
                        };
                        allocated: {
                            count: number;
                        };
                    };
                    price: {
                        value: string;
                    };
                    id: string;
                    category_ids: string[];
                    descriptor: {
                        images: {
                            url: string;
                        }[];
                        code: string;
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
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
                }[];
                fulfillments: {
                    id: string;
                    stops: {
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            label: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            code: string;
                        };
                    };
                    type: string;
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                        display: boolean;
                    }[];
                    agent: {
                        person: {
                            name: string;
                            id: string;
                            languages: {
                                name: string;
                            }[];
                        };
                    };
                    tracking: boolean;
                }[];
                type: string;
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
            timestamp: string;
            ttl: string;
            message_id: string;
            transaction_id: string;
        };
        message: {
            order: {
                id: string;
                state: string;
                provider: {
                    categories: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    }[];
                    id: string;
                    descriptor: {
                        code: string;
                        name: string;
                        short_desc: string;
                    };
                };
                items: {
                    quantity: {
                        available: {
                            count: number;
                        };
                        allocated: {
                            count: number;
                        };
                    };
                    price: {
                        value: string;
                    };
                    id: string;
                    category_ids: string[];
                    descriptor: {
                        images: {
                            url: string;
                        }[];
                        code: string;
                        name: string;
                        short_desc: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
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
                }[];
                fulfillments: {
                    id: string;
                    stops: {
                        time: {
                            range: {
                                start: string;
                                end: string;
                            };
                            label: string;
                        };
                    }[];
                    type: string;
                    tags: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                        display: boolean;
                    }[];
                    agent: {
                        person: {
                            name: string;
                            id: string;
                            languages: {
                                name: string;
                            }[];
                        };
                    };
                    tracking: boolean;
                }[];
                type: string;
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
            timestamp: string;
            message_id: string;
            ttl: string;
            transaction_id: string;
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
            timestamp: string;
            message_id: string;
            ttl: string;
            transaction_id: string;
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
    track: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            version: string;
            bap_id: string;
            bap_uri: string;
            bpp_id: string;
            bpp_uri: string;
            timestamp: string;
            ttl: string;
            message_id: string;
            transaction_id: string;
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
