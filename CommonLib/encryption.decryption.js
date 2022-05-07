const bcrypt = require('bcrypt');

function encryptPassword(plainPassword){
    const encptPassword = bcrypt.hashSync(plainPassword , 10)
    console.log(encptPassword)
    return encptPassword
}

function decryptPassword(plainPassword , encryptPassword){
    const decptPassword = bcrypt.compareSync(plainPassword,encryptPassword)
    console.log(decptPassword)
    return decptPassword
}

module.exports = {
    encryptPassword,
    decryptPassword
}