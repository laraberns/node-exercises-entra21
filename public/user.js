const buttonCreate = document.getElementById('buttonCreate')
const buttonShowAll = document.getElementById('buttonShowAll')
const buttonShowOne = document.getElementById('buttonShowOne')
const buttonDelete = document.getElementById('buttonDelete')
const buttonChange = document.getElementById('buttonChange')

buttonCreate.addEventListener('click', createLogin)
buttonShowAll.addEventListener('click', seeAllLogins)
buttonShowOne.addEventListener('click', seeOneLogin)
buttonDelete.addEventListener('click', deleteLogin)
buttonChange.addEventListener('click', changeLogin)

//CREATE LOGIN BUTTON - create
async function createLogin() {
    let user = document.getElementById("idUser").value
    let senha = document.getElementById("idPass").value

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "user": user,
            "password": senha
        })
    };

    let res = await fetch('http://localhost:3001/login', options)

    if (res.status === 201) {
        console.log('User created successfully');
    } else {
        console.log('Error creating');
    }
}

//READ ALL LOGINS BUTTON - read
async function seeAllLogins() {
    let resposta = await fetch(`http://localhost:3001/logins`)
    console.log(await resposta.json()) 
}

//READ ONE LOGIN BUTTON - read
async function seeOneLogin() {

    let id = document.getElementById("idId").value

    let resposta = await fetch(`http://localhost:3001/logins/${id}`)
    console.log(await resposta.json()) 

}

// DELETE LOGIN BUTTON - delete
async function deleteLogin() {
    let id = document.getElementById("idId").value;

    const options = {
        method: 'DELETE',
    };

    let resposta = await fetch(`http://localhost:3001/logins/${id}`, options);
    let message = await resposta.text();

    console.log(message);
}

//CHANGE LOGIN BUTTON - update
async function changeLogin() {
    let user = document.getElementById("idUser").value
    let senha = document.getElementById("idPass").value
    let id = document.getElementById("idId").value;

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "user": user,
            "password": senha
        })
    };

    let resposta = await fetch(`http://localhost:3001/logins/${id}`, options);
    let message = await resposta.text();

    console.log(message);
}
