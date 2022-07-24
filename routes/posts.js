const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

// get post
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch (error) {
        console.log ("error", error)
    }

})

// submit a post
router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post(
        {
            title: req.body.title,
            description: req.body.description,
        }
    );
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        console.log({message: error});
    }
})
    // specific post
router.get('/:postId', async (req, res) => {
    try{
        // console.log(req.params.postId);
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(error) {
        console.log({message: error})
    }
})

router.delete('/:postId', async (req, res) => {
    try{
        const removePost = await Post.remove({_id: req.params.postId});
        res.json(removePost);
    } catch(error) {
        console.log({message: error})
    }
})

router.patch('/:postId', async (req, res) => {
    try{
        const post = await Post.updateOne({_id:req.params.postId},{$set:{title: req.body.title}});
        res.json(post);
    } catch(error) {
        console.log({message: error})
    }
})

module.exports = router;