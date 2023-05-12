"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const data_1 = require("../data");
const utils_1 = require("../utils");
const Email = () => (0, utils_1.RandomItemSelector)(data_1.Emails);
exports.Email = Email;
exports.default = exports.Email;
//# sourceMappingURL=Email.js.map