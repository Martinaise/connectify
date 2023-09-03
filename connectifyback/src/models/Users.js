import mongoose from "mongoose";
import pkg from 'validator';
const { isEmail } = pkg;
import bcrypt from 'bcrypt'


const UserSchema = new mongoose.Schema(
    {
        lastname: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            minlength: 3
        },
        firstname: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            minlength: 3

        },
        email: {
            type: String,
            required: true,
            validate: [isEmail, "votre email est incorrect"],
            lowercase: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 8
        },
        gender: {
            type: String,
            required: true,
            maxLength: 5
        },
        picture: {
            type: String,
            default: "./uploads/profil/random-user.png"

        },
        bio: {
            type: String,
            required: false
        }

    },
    {
        timestamps: true
    }
)
//crypter le mot de pass avant de l'enregister
UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
UserSchema.statics.login = async function (email,password){
    const user = await this.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password,user.password)

        if(auth){
            return user;
        }
        throw Error ('mot de passe incorrect')
    }
    throw Error('Email incorrect')
}
export const userModel = mongoose.model("users", UserSchema)