"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var ApiController_1 = require("./controller/ApiController");
var TypesPokemonController_1 = require("./controller/TypesPokemonController");
var router = express_1.Router();
exports.router = router;
var apiController = new ApiController_1.ApiController();
var typesPokemonController = new TypesPokemonController_1.TypesPokemonController();
router.get("/pokemon/:name", apiController.start);
router.get("/type", typesPokemonController.search);
