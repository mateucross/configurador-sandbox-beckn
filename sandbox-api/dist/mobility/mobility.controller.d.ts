import { MobilityRequestDto } from "./dto/request.dto";
import { MobilityService } from "./mobility.service";
export declare class MobilityController {
    private readonly service;
    constructor(service: MobilityService);
    search(mobilityRequest: MobilityRequestDto): any;
    select(mobilityRequest: MobilityRequestDto): any;
    init(mobilityRequest: MobilityRequestDto): any;
    confirm(mobilityRequest: MobilityRequestDto): any;
    status(mobilityRequest: MobilityRequestDto): any;
    track(mobilityRequest: MobilityRequestDto): any;
    cancel(mobilityRequest: MobilityRequestDto): any;
    update(mobilityRequest: MobilityRequestDto): any;
    support(mobilityRequest: MobilityRequestDto): any;
    rating(mobilityRequest: MobilityRequestDto): any;
    cancellationReasons(mobilityRequest: MobilityRequestDto): any;
    ratingCategories(mobilityRequest: MobilityRequestDto): any;
}
