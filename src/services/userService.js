const USER_DB = 'USER_DB'

export const userService = {
    getUser,
    signup
}
const user = {
    name: "Puki Ben David",
    balance: 100,
    transactions: []
}

function getUser() {
    return user
}

function signup() {

}