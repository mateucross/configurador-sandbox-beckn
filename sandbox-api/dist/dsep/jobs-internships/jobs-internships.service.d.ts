import { DSEPApiInterface } from "../dsep-api.interface";
import { DSEPRequestDto } from "../dto/request.dto";
export declare class JobsInternshipsService implements DSEPApiInterface {
    search: (dsepRequestDto: DSEPRequestDto) => {
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
                    fulfillments: {
                        id: string;
                        type: string;
                    }[];
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
                    items: {
                        id: string;
                        descriptor: {
                            name: string;
                            long_desc: string;
                        };
                        location_ids: string[];
                        fulfillment_ids: string[];
                    }[];
                }[];
            };
        };
    } | {
        context: {
            domain: string;
            location: {
                country: {
                    name: string;
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
            catalog: {
                descriptor: {
                    name: string;
                };
                payments: any[];
                providers: {
                    id: string;
                    descriptor: {
                        name: string;
                    };
                    locations: {
                        id: string;
                        city: {
                            name: string;
                        };
                        state: {
                            name: string;
                        };
                        country: {
                            name: string;
                        };
                    }[];
                    items: {
                        id: string;
                        descriptor: {
                            name: string;
                            long_desc: string;
                        };
                        location_ids: string[];
                    }[];
                }[];
            };
        };
    };
    select: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                country: {
                    name: string;
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
                    descriptor: {
                        name: string;
                    };
                    fulfillments: {
                        id: string;
                        type: string;
                    }[];
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
                    location_ids: string[];
                    time: {
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                    tags: ({
                        descriptor: {
                            name: string;
                            code?: undefined;
                        };
                        list: ({
                            descriptor: {
                                name: string;
                                code: string;
                            };
                            value: string;
                        } | {
                            value: string;
                            descriptor?: undefined;
                        })[];
                        display: boolean;
                    } | {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                                code: string;
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
                        display: boolean;
                    })[];
                }[];
                type: string;
            };
        };
    };
    init: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                country: {
                    name: string;
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
                    descriptor: {
                        name: string;
                    };
                    fulfillments: {
                        id: string;
                        type: string;
                    }[];
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
                    location_ids: string[];
                    time: {
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                    tags: ({
                        descriptor: {
                            name: string;
                            code?: undefined;
                        };
                        list: ({
                            descriptor: {
                                name: string;
                                code: string;
                            };
                            value: string;
                        } | {
                            value: string;
                            descriptor?: undefined;
                        })[];
                        display: boolean;
                    } | {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                                code: string;
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
                        display: boolean;
                    })[];
                }[];
                fulfillments: {
                    id: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
                            age: string;
                            skills: {
                                name: string;
                            }[];
                            languages: {
                                code: string;
                                name: string;
                            }[];
                            tags: {
                                code: string;
                                list: {
                                    descriptor: {
                                        code: string;
                                        name: string;
                                    };
                                    value: string;
                                }[];
                            }[];
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                }[];
                type: string;
            };
        };
    };
    confirm: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                country: {
                    name: string;
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
                id: string;
                provider: {
                    descriptor: {
                        name: string;
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
                    location_ids: string[];
                    time: {
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                    tags: ({
                        descriptor: {
                            name: string;
                            code?: undefined;
                        };
                        list: ({
                            descriptor: {
                                name: string;
                                code: string;
                            };
                            value: string;
                        } | {
                            value: string;
                            descriptor?: undefined;
                        })[];
                        display: boolean;
                    } | {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                                code: string;
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
                        display: boolean;
                    })[];
                }[];
                fulfillments: {
                    id: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
                            age: string;
                            skills: {
                                name: string;
                            }[];
                            languages: {
                                code: string;
                                name: string;
                            }[];
                            tags: {
                                code: string;
                                list: {
                                    descriptor: {
                                        code: string;
                                        name: string;
                                    };
                                    value: string;
                                }[];
                            }[];
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
    status: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                country: {
                    name: string;
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
                id: string;
                provider: {
                    descriptor: {
                        name: string;
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
                    location_ids: string[];
                    time: {
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                    tags: ({
                        descriptor: {
                            name: string;
                            code?: undefined;
                        };
                        list: ({
                            descriptor: {
                                name: string;
                                code: string;
                            };
                            value: string;
                        } | {
                            value: string;
                            descriptor?: undefined;
                        })[];
                        display: boolean;
                    } | {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                                code: string;
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
                        display: boolean;
                    })[];
                }[];
                fulfillments: {
                    id: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
                            age: string;
                            skills: {
                                name: string;
                            }[];
                            languages: {
                                code: string;
                                name: string;
                            }[];
                            tags: {
                                code: string;
                                list: {
                                    descriptor: {
                                        code: string;
                                        name: string;
                                    };
                                    value: string;
                                }[];
                            }[];
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
    cancel: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                country: {
                    name: string;
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
                id: string;
                provider: {
                    descriptor: {
                        name: string;
                    };
                    fulfillments: {
                        id: string;
                        type: string;
                        tracking: boolean;
                    }[];
                    locations: {
                        id: string;
                        city: {
                            name: string;
                        };
                    }[];
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
                    location_ids: string[];
                    time: {
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                    tags: ({
                        descriptor: {
                            name: string;
                            code?: undefined;
                        };
                        list: ({
                            descriptor: {
                                name: string;
                                code: string;
                            };
                            value: string;
                        } | {
                            value: string;
                            descriptor?: undefined;
                        })[];
                        display: boolean;
                    } | {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                                code: string;
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
                        display: boolean;
                    })[];
                }[];
                fulfillments: {
                    id: string;
                    state: {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                    };
                    customer: {
                        person: {
                            name: string;
                            gender: string;
                            creds: {
                                id: string;
                                type: string;
                                url: string;
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
            location: {
                country: {
                    name: string;
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
                id: string;
                provider: {
                    descriptor: {
                        name: string;
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        long_desc: string;
                    };
                    fulfillment_ids: string[];
                    location_ids: string[];
                    time: {
                        range: {
                            start: string;
                            end: string;
                        };
                    };
                    tags: ({
                        descriptor: {
                            name: string;
                            code?: undefined;
                        };
                        list: ({
                            descriptor: {
                                name: string;
                                code: string;
                            };
                            value: string;
                        } | {
                            value: string;
                            descriptor?: undefined;
                        })[];
                        display: boolean;
                    } | {
                        descriptor: {
                            name: string;
                            code: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                                code: string;
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
                        display: boolean;
                    })[];
                }[];
                fulfillments: {
                    id: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
                            age: string;
                            skills: {
                                name: string;
                            }[];
                            languages: {
                                code: string;
                                name: string;
                            }[];
                            tags: {
                                code: string;
                                list: {
                                    descriptor: {
                                        code: string;
                                        name: string;
                                    };
                                    value: string;
                                }[];
                            }[];
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
    support: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            action: string;
            location: {
                country: {
                    name: string;
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
            location: {
                country: {
                    name: string;
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
            ttl: string;
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
    track: (dsepRequestDto: DSEPRequestDto) => {
        context: {
            domain: string;
            location: {
                country: {
                    name: string;
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
            tracking: {
                id: string;
                url: string;
                status: string;
            };
        };
    };
}
