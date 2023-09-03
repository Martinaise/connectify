import mongoose from "mongoose";
const UserPostSchema = new mongoose.Schema({
    posterId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        trim: true,
        maxlength: 1000,
    },
    picture: {
        type: String,
    },
    video: {
        type: String,

    },
    likers: {
        type: [String],
        required: true
    },
    comments: {
        type: [
            {
                commenterId: String,
                commenterLastname: String,
                commenterFirstname: String,
                text: String,
                timestamp: Number

            }
        ]
    }
},
{
    timestamps:true
}
)

export const UserPostModel = mongoose.model('posts', UserPostSchema)