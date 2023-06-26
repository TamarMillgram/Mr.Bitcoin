import { utilService } from "./util.service"

export const userService = {
    signup,
    getLoggedInUser,
    getEmptyUser,
    logout,
    transferFunds,
    getTransactions,
}


function getEmptyUser() {
    return {
        name: '',
        balance: 100,
        transactions: []
    }
}

function signup(name) {
    let user = utilService.loadFromStorage('user')
    if (user && user.name === name) return
    else {
        user = getEmptyUser()
        user._id = utilService.makeId()
        user.name = name
        utilService.saveToStorage('user', user)
    }
    return user
}

function logout() {
    utilService.clearStorage('user')
}

function getLoggedInUser() {
    return utilService.loadFromStorage('user')
}

function transferFunds(amount, contactId, contactName) {
    const user = utilService.loadFromStorage('user')
    if (user.balance < amount) return
    const transaction = {
        toId: contactId,
        to: contactName,
        at: utilService.formatDate(new Date(), "en-GB"),
        amount
    }
    user.transactions.push(transaction)
    user.balance -= amount
    utilService.saveToStorage('user', user)
    console.log('user', user)
}

function getTransactions() {
    const user = utilService.loadFromStorage('user')
    return user.transactions
}