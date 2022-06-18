// handlers for routes

import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
            // .find (finding something inside a module) takes time, so it's an async action and have to add an await
        res.status(200).json(postMessages); // return array of all messages
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const body = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}