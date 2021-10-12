const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please enter your username'],
        //therefore no one can sign up twice with the same username
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'please enter your password'],
        minlength: [6, 'minimum password length is 6 characters']
    }
})
//before save to db, trigger a pre function to hash the password
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    //"this" means the instance of the user object we craeted
    this.password = await bcrypt.hash(this.password, salt)
    next()
})
userSchema.statics.login = async function (username, password) {
    const lookUpUser = await this.findOne({username})
    if (lookUpUser) {
        const result = await bcrypt.compare(password, lookUpUser.password)
        if (result) {
            return lookUpUser
        }
        throw Error('password incorrect')
    }
    throw Error('username incorrect')
}
const User = mongoose.model('users', userSchema)
module.exports = User
