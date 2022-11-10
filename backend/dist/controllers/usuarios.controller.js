"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_js_1 = __importDefault(require("../models/mysql/users.model.js"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    constructor() {
        this.auth = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const ber_token = req.get('Authorization');
                if (ber_token === undefined || ber_token.split(' ')[0].toLowerCase() !== 'bearer') {
                    return res.json({ 'error': 2, 'msg': 'Invalid token' });
                }
                const token = ber_token.split(' ')[1];
                ;
                var decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET);
                const user = yield users_model_js_1.default.findByPk(decoded.id_user, {
                    attributes: { exclude: ['password'] }
                });
                res.status(200).json({ user });
            }
            catch (error) {
                return res.json({ 'error': 1, 'msg': error.message });
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { correo, password } = req.body;
                const _user = yield users_model_js_1.default.findOne({ where: { correo } });
                if (_user === null)
                    return res.json({ 'error': 2, 'msg': 'Credenciales invalidas' });
                const _password = yield bcrypt_1.default.compare(password, _user.password);
                if (!_password)
                    return res.json({ 'error': 2, 'msg': 'Credenciales invalidas' });
                else {
                    var token = jsonwebtoken_1.default.sign({ id_user: _user.id }, process.env.SECRET);
                    return res.json({ 'error': 0, user: _user, token });
                }
            }
            catch (error) {
                return res.json({ 'error': 1, 'msg': error.message });
            }
        });
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.password = yield bcrypt_1.default.hash(req.body.password, 10);
                const _user = yield users_model_js_1.default.findOne({ where: { correo: req.body.correo } });
                if (_user !== null)
                    return res.json({ 'error': 2, 'msg': 'Correo electronico ya registrado' });
                else {
                    const user = yield users_model_js_1.default.create(req.body);
                    var token = jsonwebtoken_1.default.sign({ id_user: user.id }, process.env.SECRET);
                    return res.json({ 'error': 0, user, token });
                }
            }
            catch (error) {
                return res.json({ 'error': 1, 'msg': error.message });
            }
        });
    }
}
exports.default = UserController;
