"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class VersionNotFoundException extends common_1.HttpException {
    constructor() {
        super("Version not found", common_1.HttpStatus.NOT_FOUND);
    }
}
exports.VersionNotFoundException = VersionNotFoundException;
//# sourceMappingURL=version-notfound.exception.js.map