
const { Schema, model, default: mongoose } = require('mongoose');

const UserSchema = Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    online: {
        type: Boolean,
        default: false
    },
});

model.exports = model('User', UserSchema);
