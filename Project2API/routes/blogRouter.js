const express = require("express");
const { route } = require("express/lib/application");
const authMiddleware = require("../middleware/authMiddleware");
const { find } = require("../models/blogSchema");
const BlogModel = require('../models/blogSchema')


//* ======== Create Router ========
const router = express.Router()


//* ======== GET =======
router.get('/', authMiddleware, async (req, res) => {
    try {
        const blogs = await BlogModel.find()
        res.status(200).json(blogs)
    } catch (error) {
        console.log(error);
    }
})

//* ======= CREATE =======
router.post('/', authMiddleware, async (req, res) => {
    const blogData = req.body

    try {
        const blog = await BlogModel.create(blogData) // creates the blog in DB
        //send back the response 
        res.status(201).json(blog)
    } catch (error) {
        console.log(error);
        res.status(400).json('Bad request!')
    }
})

//* ======= GET BY ID ========
router.get('/:id', authMiddleware, async (req,res) => {
    const id = req.params.id

    try {
        const findBlog = await BlogModel.findById(id)
        res.status(200).json(findBlog)
    } catch (error) {
        console.log(error);
    }
})


//* ======== UPDATE BY ID ========
router.put('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id
    const newBlogData = req.body
    try {
        // find the blog by id 
        const findBlog = await BlogModel.findByIdAndUpdate(id, newBlogData, {new:true})
        res.status(202).json(findBlog)
    } catch (error) {
        console.log(error);
    }
})

//! ======== DELETE ==========
router.delete('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id

    try {
       await BlogModel.findByIdAndDelete(id)

        res.status(200).json('deleted')
    } catch (error) {
        console.log(error);
    }
})

module.exports = router 