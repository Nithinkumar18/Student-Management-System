
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    studentName:{
        type: String,
        required: true
    },

    student_age:{
        type: Number,
        required: true
    },

    student_email:{
        type: String,
        required: true
    },

    student_address:{
        type: String,
        required: true
    },

})

module.exports = mongoose.model("student",studentSchema);