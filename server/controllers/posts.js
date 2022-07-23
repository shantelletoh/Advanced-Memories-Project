// handlers for routes

import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
            // .find (finding something inside a module) takes time, so it's an async action and have to add an await
        res.status(200).json(postMessages); // return array of all messages
    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({message: error});
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'Post deleted successfully'});
}

export const likePost = async (req, res) => {

    if (!req.userId) return res.json({message: "Unauthenticated"});
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId)) // check if user id already liked the post (is already in the like section)

    if (index === -1) { // like the post
        post.likes.push(req.userId);
    }
    else { // dislike the post
        post.likes = post.likes.filter((id) => id !== String(req.UserId)); // array of all the likes except for current user
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true}); // update entire post

    res.json(updatedPost);
}

export default router;