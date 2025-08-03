import Posts from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
export const getAllPosts = async (req, res, next) => {
  try {
    const { search } = req.query;
    let query = {};
    
    // If search parameter is provided, create a search query
    if (search && search.trim()) {
      query = {
        $or: [
          { prompt: { $regex: search, $options: 'i' } }, // Case-insensitive search in prompt
          { name: { $regex: search, $options: 'i' } }     // Case-insensitive search in name
        ]
      };
    }
    
    const posts = await Posts.find(query);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};
export const createPost = async (req, res, next) => {
  try {
    const { name, prompt } = req.body;
    const photo = req.file.path;
    const result = await cloudinary.uploader.upload(photo);
    const newPost = new Posts({ name, prompt, photo: result.secure_url });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};
