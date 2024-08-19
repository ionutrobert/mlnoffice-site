import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// Temporary data

// const users = [
//     {id:1, username: 'J92', avatar: '/images/author/1.png'},
//     {id:2, username: 'Jane', avatar: '/images/author/2.png'},
//     {id:3, username: 'John', avatar: '/images/author/3.png'},
// ]

// const posts = [
//     {id:1, title: 'Post 1', userId: 1, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur'},
//     {id:2, title: 'Post 2', userId: 2, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur'},
//     {id:3, title: 'Post 3', userId: 3, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur'},
//     {id:4, title: 'Post 4', userId: 3, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur'},
// ]
export const getPosts = async () => {
    
    try {
        connectToDb()
        const posts = await Post.find()
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts.")
    }   
};

export const getPost = async (slug) => {
    try {
        connectToDb()
        const post = await Post.findOne({slug})
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post.")
    }  
};

export const getUser = async (id) => {
    try {
        connectToDb()
        const user = await User.findById(id)
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts.")
    }  
};

export const getUsers = async () => {
    try {
      connectToDb();
      const users = await User.find();
      return users;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
    }
  };