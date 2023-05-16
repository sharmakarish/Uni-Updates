import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    picture: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: true
    },
    createdDate: {
        type: Date,
        }
});

const post = mongoose.model('post', PostSchema);


export default post;