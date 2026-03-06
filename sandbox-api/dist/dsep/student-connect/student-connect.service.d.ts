import { DSEPApiInterface } from '../dsep-api.interface';
import { DSEPRequestDto } from '../dto/request.dto';
import * as cancelResponse from "./response/response.cancel.json";
import * as confirmResponse from "./response/response.confirm.json";
import * as initResponse from "./response/response.init.json";
import * as searchResponse from "./response/response.search.json";
import * as selectResponsePhsical from "./response/response.select-physical.json";
import * as selectResponseVirtual from "./response/response.select-virtual.json";
import * as statusResonse from "./response/response.status.json";
import * as updateResponseSlot from "./response/response.update-booking-slot.json";
import * as updateResponsePersonal from "./response/response.update-person-details.json";
export declare class StudentConnectService implements DSEPApiInterface {
    search: (request: DSEPRequestDto) => {
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
                    fulfillments: {
                        id: string;
                        type: string;
                    }[];
                    items: {
                        id: string;
                        descriptor: {
                            name: string;
                            short_desc: string;
                            long_desc: string;
                            media: {
                                mimetype: string;
                                url: string;
                            }[];
                            images: {
                                url: string;
                            }[];
                        };
                        fulfillment_ids: string[];
                    }[];
                }[];
            };
        };
    };
    select: (request: DSEPRequestDto) => any;
    init: (request: DSEPRequestDto) => {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    stops: {
                        location: {
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                        };
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        instructions: {
                            short_desc: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
            };
        };
    };
    confirm: (request: DSEPRequestDto) => {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
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
                    stops: {
                        location: {
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                        };
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
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
    status: (request: DSEPRequestDto) => {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
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
                    stops: {
                        location: {
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                        };
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
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
    track: (request: DSEPRequestDto) => any;
    cancel: (request: DSEPRequestDto) => {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
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
                    stops: {
                        location: {
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                        };
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
                docs: {
                    descriptor: {
                        name: string;
                        short_desc: string;
                    };
                    url: string;
                    mime_type: string;
                }[];
                cancellation: {
                    time: string;
                    cancelled_by: string;
                    reason: {
                        descriptor: {
                            short_desc: string;
                        };
                    };
                };
            };
        };
    };
    update: (request: DSEPRequestDto) => any;
    rating: (request: DSEPRequestDto) => any;
    support: (request: DSEPRequestDto) => any;
    processResponse(response: typeof searchResponse | typeof selectResponsePhsical | typeof selectResponseVirtual | typeof initResponse | typeof confirmResponse | typeof statusResonse | typeof updateResponsePersonal | typeof updateResponseSlot | typeof cancelResponse, request: DSEPRequestDto): {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
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
                    stops: {
                        location: {
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                        };
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
                docs: {
                    descriptor: {
                        name: string;
                        short_desc: string;
                    };
                    url: string;
                    mime_type: string;
                }[];
                cancellation: {
                    time: string;
                    cancelled_by: string;
                    reason: {
                        descriptor: {
                            short_desc: string;
                        };
                    };
                };
            };
        };
    } | {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
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
                    stops: {
                        location: {
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                        };
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
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
    } | {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    };
                    stops: {
                        location: {
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                        };
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        instructions: {
                            short_desc: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
            };
        };
    } | {
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
                    fulfillments: {
                        id: string;
                        type: string;
                    }[];
                    items: {
                        id: string;
                        descriptor: {
                            name: string;
                            short_desc: string;
                            long_desc: string;
                            media: {
                                mimetype: string;
                                url: string;
                            }[];
                            images: {
                                url: string;
                            }[];
                        };
                        fulfillment_ids: string[];
                    }[];
                }[];
            };
        };
    } | {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    fulfillment_ids: string[];
                    tags: ({
                        display: boolean;
                        descriptor: {
                            name: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                    } | {
                        display: boolean;
                        descriptor: {
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                    })[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
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
                        instructions: {
                            short_desc: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
            };
        };
    } | {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    fulfillment_ids: string[];
                    tags: ({
                        display: boolean;
                        descriptor: {
                            name: string;
                        };
                        list: {
                            descriptor: {
                                name: string;
                            };
                            value: string;
                        }[];
                    } | {
                        display: boolean;
                        descriptor: {
                            name: string;
                        };
                        list: {
                            value: string;
                        }[];
                    })[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    stops: {
                        location: {
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
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
                        instructions: {
                            short_desc: string;
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
            };
        };
    } | {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
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
                    stops: {
                        location: {
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                        };
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
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
    } | {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
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
                    stops: {
                        location: {
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                        };
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
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
    } | {
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
                };
                items: {
                    id: string;
                    descriptor: {
                        name: string;
                        short_desc: string;
                        long_desc: string;
                        media: {
                            mimetype: string;
                            url: string;
                        }[];
                        images: {
                            url: string;
                        }[];
                    };
                    category_ids: string[];
                    fulfillment_ids: string[];
                }[];
                fulfillments: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            name: string;
                            gender: string;
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
                    stops: {
                        location: {
                            state: {
                                name: string;
                            };
                            city: {
                                name: string;
                            };
                        };
                        time: {
                            label: string;
                            range: {
                                start: string;
                                end: string;
                            };
                        };
                        contact: {
                            phone: string;
                            email: string;
                        };
                    }[];
                }[];
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
