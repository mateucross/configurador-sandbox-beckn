import { MobilityRequestDto } from "src/mobility/dto/request.dto";
export declare class CancelRequestDto extends MobilityRequestDto {
    message: {
        order_id: string;
        cancellation_reason_id: string;
    };
}
