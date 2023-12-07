import LoginRepository from "../repositories/LoginRepository.js"

let nextId = 3;

class LoginController {


    index(req, res) {
        res.status(200).send(LoginRepository.findAll())
    }

    show(req, res) {
        res.status(200).json(LoginRepository.findById(req.params.id))
    }

    store(req, res) {
        const { user, password } = req.body;
        const newLogin = {
            id: nextId++,
            user,
            password,
        };
        res.status(201).json(LoginRepository.create(newLogin));
    }

    update(req, res) {
        res.status(200).json(LoginRepository.update(req.params.id, req.body))
    }

    delete(req, res) {
        LoginRepository.delete(req.params.id)
        res.status(200).send(`login excluído com sucesso!`)
    }
}

export default new LoginController