const mongoose = require('mongoose')


const Schema = mongoose.Schema
const PostSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    // content:{
    //     type: String
    // }
    postTime: {
        type: Date,
        default: Date.now
    }
})

// PostSchema.virtual('timestamp_ms').get(function() {
//     return this.postTime.getTime();
// });

const PostModel = mongoose.model('posts', PostSchema)
module.exports = PostModel