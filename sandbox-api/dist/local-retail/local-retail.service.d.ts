import { LocalRetailENUM } from "./local-retail-modules.enum";
import { LocalRetail094ApiInterface } from "./local-retail-api.interface";
import { LocalRetail110ApiInterface } from "./local-retail-api.interface";
export declare class LocalRetailService {
    get094(domain: LocalRetailENUM): LocalRetail094ApiInterface;
    get110(domain: LocalRetailENUM): LocalRetail110ApiInterface;
}
