"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class DomainNotFoundException extends common_1.HttpException {
    constructor() {
        super("Domain not found", common_1.HttpStatus.NOT_FOUND);
    }
}
exports.DomainNotFoundException = DomainNotFoundException;
//# sourceMappingURL=domain-notfound.exception.js.map