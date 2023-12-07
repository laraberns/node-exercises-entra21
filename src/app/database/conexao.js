const loginsCadastrados = [
    {id: 1, user: "lara", password: "123"},
    {id: 2, user: "joao", password: "senha123"},
] 

function buscarLoginPorId(id) {
    return loginsCadastrados.filter(login => login.id == id)[0]
}

function buscarIndexLoginPorId(id) {
    return loginsCadastrados.findIndex(login => login.id == id)
}

function getLogins(){
    return loginsCadastrados
}

export {buscarIndexLoginPorId,buscarLoginPorId, getLogins}