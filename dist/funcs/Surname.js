"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surname = void 0;
const Surnames_json_1 = __importDefault(require("../data/Surnames.json"));
const Surname = () => {
    const randomSurname = Surnames_json_1.default[Math.floor(Math.random() * Surnames_json_1.default.length)];
    return randomSurname;
};
exports.Surname = Surname;
exports.default = exports.Surname;
//# sourceMappingURL=Surname.js.map