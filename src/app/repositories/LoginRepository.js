import { buscarIndexLoginPorId, buscarLoginPorId, getLogins } from "../database/conexao.js"



class LoginRepository {
    findAll() {
        return getLogins()
    }

    findById(id) {
        return buscarLoginPorId(id)
    }

    create(login) {
        getLogins().push(login);
    }

    update(id, login) {
        let indexLogin = buscarIndexLoginPorId(id)
        let logins = getLogins()
        logins[indexLogin].user = login.user
        logins[indexLogin].password = login.password

        return logins[indexLogin]
    }

    delete(id){
        let indexLogin = buscarIndexLoginPorId(id)
        getLogins().splice(indexLogin, 1)
    }
}

export default new LoginRepository