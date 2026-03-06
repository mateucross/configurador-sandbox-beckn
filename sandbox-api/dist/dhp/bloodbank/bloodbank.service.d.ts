import { DHPApiInterface } from "src/dhp/dhp-api.interface";
import { DHPRequestDto } from "../dto/request.dto";
import * as cancelResponse from "./response/response.cancel.json";
import * as confirmResponse from "./response/response.confirm.json";
import * as initResponse from "./response/response.init.json";
import * as searchResponse from "./response/response.search.json";
import * as selectResponse from "./response/response.select.json";
import * as statusResonse from "./response/response.status.json";
import * as supportResponse from "./response/response.support.json";
import * as updateResponse from "./response/response.update.json";
import * as trackResponse from "./response/response.track.json";
import * as ratingResponse from "./response/response.rating.json";
export declare class BloodbankService implements DHPApiInterface {
    search: (request: DHPRequestDto) => {
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
                    locations: {
                        id: string;
                        gps: string;
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
                    }[];
                    items: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        quantity: {
                            available: {
                                measure: {
                                    value: string;
                                    unit: string;
                                };
                            };
                        };
                        category_ids: string[];
                        location_ids: string[];
                        fulfillment_ids: string[];
                    }[];
                }[];
            };
        };
    };
    select: (request: DHPRequestDto) => {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
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
    init: (request: DHPRequestDto) => {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            id: string;
                            name: string;
                            creds: {
                                url: string;
                            }[];
                        };
                    };
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
                billing: {
                    name: string;
                    address: string;
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
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                }[];
            };
        };
    };
    confirm: (request: DHPRequestDto) => {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            id: string;
                            name: string;
                            creds: {
                                url: string;
                            }[];
                        };
                    };
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
                billing: {
                    name: string;
                    address: string;
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
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                }[];
            };
        };
    };
    status: (request: DHPRequestDto) => {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            id: string;
                            name: string;
                            creds: {
                                url: string;
                            }[];
                        };
                    };
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
                billing: {
                    name: string;
                    address: string;
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
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                }[];
            };
        };
    };
    track: (request: DHPRequestDto) => {
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
    cancel: (request: DHPRequestDto) => {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            id: string;
                            name: string;
                            creds: {
                                url: string;
                            }[];
                        };
                    };
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
                billing: {
                    name: string;
                    address: string;
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
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                }[];
            };
        };
    };
    update: (request: DHPRequestDto) => {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            id: string;
                            name: string;
                            creds: {
                                url: string;
                            }[];
                        };
                    };
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
                billing: {
                    name: string;
                    address: string;
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
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                }[];
            };
        };
    };
    rating: (request: DHPRequestDto) => {
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
                    mime_type: string;
                };
                required: boolean;
            };
        };
    };
    support: (request: DHPRequestDto) => {
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
    processResponse(response: typeof searchResponse | typeof selectResponse | typeof initResponse | typeof confirmResponse | typeof statusResonse | typeof updateResponse | typeof supportResponse | typeof cancelResponse, request: DHPRequestDto): {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            id: string;
                            name: string;
                            creds: {
                                url: string;
                            }[];
                        };
                    };
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
                billing: {
                    name: string;
                    address: string;
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
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                }[];
            };
        };
    } | {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            id: string;
                            name: string;
                            creds: {
                                url: string;
                            }[];
                        };
                    };
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
                billing: {
                    name: string;
                    address: string;
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
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                }[];
            };
        };
    } | {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            id: string;
                            name: string;
                            creds: {
                                url: string;
                            }[];
                        };
                    };
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
                billing: {
                    name: string;
                    address: string;
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
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                }[];
            };
        };
    } | {
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
                    locations: {
                        id: string;
                        gps: string;
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
                    }[];
                    items: {
                        id: string;
                        descriptor: {
                            code: string;
                            name: string;
                        };
                        quantity: {
                            available: {
                                measure: {
                                    value: string;
                                    unit: string;
                                };
                            };
                        };
                        category_ids: string[];
                        location_ids: string[];
                        fulfillment_ids: string[];
                    }[];
                }[];
            };
        };
    } | {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
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
    } | {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            id: string;
                            name: string;
                            creds: {
                                url: string;
                            }[];
                        };
                    };
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
                billing: {
                    name: string;
                    address: string;
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
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                }[];
            };
        };
    } | {
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
    } | {
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
                    };
                    quantity: {
                        selected: {
                            measure: {
                                value: string;
                                unit: string;
                            };
                        };
                    };
                }[];
                fulfillment: {
                    id: string;
                    type: string;
                    customer: {
                        person: {
                            id: string;
                            name: string;
                            creds: {
                                url: string;
                            }[];
                        };
                    };
                    stops: {
                        type: string;
                        time: {
                            timestamp: string;
                        };
                    }[];
                    state: {
                        descriptor: {
                            code: string;
                            name: string;
                        };
                    };
                }[];
                billing: {
                    name: string;
                    address: string;
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
                    type: string;
                    status: string;
                    params: {
                        amount: string;
                        currency: string;
                    };
                }[];
            };
        };
    };
}
