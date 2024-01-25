import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ICBNhRsMFeCiB3yV8rH09w.jpeg',
        },
        category: {
            type: String,
            default: 'Uncategorized',
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    }, {timestamps: true}
)

const Post = mongoose.model('Post', postSchema);

export default Post;