import { AppService } from "./app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    webhook(body: any, req: any): {
        message: {
            ack: {
                status: string;
            };
        };
    };
}
