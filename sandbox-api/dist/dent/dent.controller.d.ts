import { DentRequestDto } from "./dto/request.dto";
import { DentService } from "./dent.service";
export declare class DentController {
    private readonly service;
    constructor(service: DentService);
    search(dentRequestDto: DentRequestDto): any;
    select(dentRequestDto: DentRequestDto): any;
    init(dentRequestDto: DentRequestDto): any;
    confirm(dentRequestDto: DentRequestDto): any;
    status(dentRequestDto: DentRequestDto): any;
    track(dentRequestDto: DentRequestDto): any;
    cancel(dentRequestDto: DentRequestDto): any;
    support(dentRequestDto: DentRequestDto): any;
    update(dentRequestDto: DentRequestDto): any;
    rating(dentRequestDto: DentRequestDto): any;
}
