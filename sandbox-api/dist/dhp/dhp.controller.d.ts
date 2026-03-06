import { DHPRequestDto } from "./dto/request.dto";
import { DHPService } from "./dhp.service";
export declare class DHPController {
    private readonly service;
    constructor(service: DHPService);
    search(dHPRequestDto: DHPRequestDto): any;
    select(dHPRequestDto: DHPRequestDto): any;
    init(dHPRequestDto: DHPRequestDto): any;
    confirm(dHPRequestDto: DHPRequestDto): any;
    status(dHPRequestDto: DHPRequestDto): any;
    track(dHPRequestDto: DHPRequestDto): any;
    cancel(dHPRequestDto: DHPRequestDto): any;
    support(dHPRequestDto: DHPRequestDto): any;
    update(dHPRequestDto: DHPRequestDto): any;
    rating(dHPRequestDto: DHPRequestDto): any;
}
