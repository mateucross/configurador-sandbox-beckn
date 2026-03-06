import { Industry40Service } from "./industry-4.0.service";
import { Industry_4_0_Request_DTO } from "./dto/request.dto";
export declare class Industry40Controller {
    private readonly industry40Service;
    constructor(industry40Service: Industry40Service);
    search(industry40Request: Industry_4_0_Request_DTO): any;
    init(industry40Request: Industry_4_0_Request_DTO): any;
    cancel(industry40Request: Industry_4_0_Request_DTO): any;
    confirm(industry40Request: Industry_4_0_Request_DTO): any;
    rating(industry40Request: Industry_4_0_Request_DTO): any;
    select(industry40Request: Industry_4_0_Request_DTO): any;
    status(industry40Request: Industry_4_0_Request_DTO): any;
    support(industry40Request: Industry_4_0_Request_DTO): any;
    track(industry40Request: Industry_4_0_Request_DTO): any;
    update(industry40Request: Industry_4_0_Request_DTO): any;
    getForm(industry40FormQuery: any): any;
    submitForm(xinputFormBody: any): any;
}
