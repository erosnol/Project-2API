const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    private: {
        type: Boolean,
        required: true
    },

    blog_title: {
        type: String,
        required: true
    },

    blog_content: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now()
    },

    created_by: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Blog', blogSchema)