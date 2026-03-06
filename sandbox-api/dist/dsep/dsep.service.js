"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DsepService = void 0;
const common_1 = require("@nestjs/common");
const dsep_modules_enum_1 = require("./dsep-modules.enum");
const scholarships_grants_service_1 = require("./scholarships-grants/scholarships-grants.service");
const domain_notfound_exception_1 = require("../common/exception/domain-notfound.exception");
const jobs_internships_service_1 = require("./jobs-internships/jobs-internships.service");
const tutoring_mentorship_service_1 = require("./tutoring-mentorship/tutoring-mentorship.service");
const gercom_courses_service_1 = require("./gercom-courses/gercom-courses.service");
const courses_training_service_1 = require("./courses-training/courses-training.service");
const student_connect_service_1 = require("./student-connect/student-connect.service");
let DsepService = class DsepService {
    get(domain) {
        switch (domain) {
            case dsep_modules_enum_1.DSEPModulesEnum.SCHOLARSHIPS_GRANTS:
                return new scholarships_grants_service_1.ScholarshipsGrantsService();
            case dsep_modules_enum_1.DSEPModulesEnum.JOBS_INTERNSHIPS:
                return new jobs_internships_service_1.JobsInternshipsService();
            case dsep_modules_enum_1.DSEPModulesEnum.COURSES_TRAINING:
                return new courses_training_service_1.CoursesTrainingService();
            case dsep_modules_enum_1.DSEPModulesEnum.TUTORING_MENTORSHIPS:
                return new tutoring_mentorship_service_1.TutoringMentorshipService();
            case dsep_modules_enum_1.DSEPModulesEnum.GERCOM_COURSES:
                return new gercom_courses_service_1.GercomCoursesService();
            case dsep_modules_enum_1.DSEPModulesEnum.STUDENT_CONNECT:
                return new student_connect_service_1.StudentConnectService();
            case dsep_modules_enum_1.DSEPModulesEnum.ONEST_WORK_OPPORTUNITIES:
                return new jobs_internships_service_1.JobsInternshipsService();
            case dsep_modules_enum_1.DSEPModulesEnum.ONEST_LEARNING_EXPERIENCES:
                return new courses_training_service_1.CoursesTrainingService();
            case dsep_modules_enum_1.DSEPModulesEnum.ONEST_FINANCIAL_SUPPORT:
                return new scholarships_grants_service_1.ScholarshipsGrantsService();
            case dsep_modules_enum_1.DSEPModulesEnum.ONEST_EXPERT_CONNECT:
                return new tutoring_mentorship_service_1.TutoringMentorshipService();
            default:
                throw new domain_notfound_exception_1.DomainNotFoundException();
        }
    }
};
DsepService = __decorate([
    (0, common_1.Injectable)()
], DsepService);
exports.DsepService = DsepService;
//# sourceMappingURL=dsep.service.js.map
