import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    about: String,
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    skills: [
        {
            skill: String
        }
    ],
    certificate: [
        {
            certificate: String
        }
    ],
    education: [
        {
            course: String,
            session: String,
            detail: String,
            university: String
        }
    ],
    experiance: [
        {
            company: String,
            role: String,
            type: {
                type: String
            },
            session: String,
            year: Number
        }

    ],

})

const User = mongoose.model("User", userSchema);
export default User;