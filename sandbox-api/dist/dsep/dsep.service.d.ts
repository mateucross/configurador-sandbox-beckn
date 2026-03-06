import { DSEPModulesEnum } from "./dsep-modules.enum";
import { DSEPApiInterface } from "./dsep-api.interface";
export declare class DsepService {
    get(domain: DSEPModulesEnum): DSEPApiInterface;
}
