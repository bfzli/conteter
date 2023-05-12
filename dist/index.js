"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Username = exports.Website = exports.Title = exports.Email = exports.Surname = exports.Name = void 0;
const Contenter_1 = __importDefault(require("./funcs/Contenter"));
const Name_1 = __importDefault(require("./funcs/Name"));
exports.Name = Name_1.default;
const Surname_1 = __importDefault(require("./funcs/Surname"));
exports.Surname = Surname_1.default;
const Email_1 = __importDefault(require("./funcs/Email"));
exports.Email = Email_1.default;
const Title_1 = __importDefault(require("./funcs/Title"));
exports.Title = Title_1.default;
const Website_1 = __importDefault(require("./funcs/Website"));
exports.Website = Website_1.default;
const Username_1 = __importDefault(require("./funcs/Username"));
exports.Username = Username_1.default;
console.log((0, Contenter_1.default)("name"));
console.log((0, Contenter_1.default)("surname"));
console.log((0, Contenter_1.default)("email"));
console.log((0, Contenter_1.default)("title"));
console.log((0, Contenter_1.default)("website"));
console.log((0, Contenter_1.default)("username"));
exports.default = Contenter_1.default;
//# sourceMappingURL=index.js.map