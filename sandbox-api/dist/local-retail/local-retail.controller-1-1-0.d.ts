import { LocalRetailService } from "./local-retail.service";
import { Local_Retail110_Request_DTO } from "./dto/1-1-0/local-retail-1-1-0-request.dto";
export declare class LocalRetailController110 {
    private readonly localRetailService;
    constructor(localRetailService: LocalRetailService);
    search(request: Local_Retail110_Request_DTO): any;
    init(request: Local_Retail110_Request_DTO): any;
    cancel(request: Local_Retail110_Request_DTO): any;
    confirm(request: Local_Retail110_Request_DTO): any;
    rating(request: Local_Retail110_Request_DTO): any;
    select(request: Local_Retail110_Request_DTO): any;
    status(request: Local_Retail110_Request_DTO): any;
    support(request: Local_Retail110_Request_DTO): any;
    track(request: Local_Retail110_Request_DTO): any;
    update(request: Local_Retail110_Request_DTO): any;
}
