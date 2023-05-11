"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const Emails_json_1 = __importDefault(require("../data/Emails.json"));
const Email = () => {
    const randomEmail = Emails_json_1.default[Math.floor(Math.random() * Emails_json_1.default.length)];
    return randomEmail;
};
exports.Email = Email;
exports.default = exports.Email;
//# sourceMappingURL=Email.js.map