import { Router } from "express";
import LoginController from "./app/controllers/LoginController.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express"

const router = Router()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
router.use(express.static(__dirname + "/../public"));

// TELA DE LOGIN
router.get("/", function (req, resp) {
    resp.sendFile(__dirname + "/../public/index.html");
});

//VER TODOS OS LOGINS CADASTRADOS
router.get("/logins", LoginController.index)

//VER LOGIN CADASTRADO ESPECIFICO
router.get("/logins/:id", LoginController.show)

// CRIANDO LOGIN
router.post("/login", LoginController.store)

//ALTERANDO UM LOGIN ESPECIFICO
router.put("/logins/:id", LoginController.update)

//DELETANDO LOGIN
router.delete("/logins/:id", LoginController.delete)

export default router