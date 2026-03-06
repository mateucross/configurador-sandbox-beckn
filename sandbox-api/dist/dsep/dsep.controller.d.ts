import { DSEPRequestDto } from "./dto/request.dto";
import { DsepService } from "./dsep.service";
export declare class DsepController {
    private readonly dsepService;
    constructor(dsepService: DsepService);
    search(dsepRequest: DSEPRequestDto): any;
    select(dsepRequest: DSEPRequestDto): any;
    init(dsepRequest: DSEPRequestDto): any;
    confirm(dsepRequest: DSEPRequestDto): any;
    support(dsepRequest: DSEPRequestDto): any;
    cancel(dsepRequest: DSEPRequestDto): any;
    rating(dsepRequest: DSEPRequestDto): any;
    update(dsepRequest: DSEPRequestDto): any;
    status(dsepRequest: DSEPRequestDto): any;
    track(dsepRequest: DSEPRequestDto): any;
}
