"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
    
  const { title, slug, description, userId } = Object.fromEntries(formData);

  try {

    connectToDb();
    const newPost = new Post({
      title,
      slug,
      description,
      userId,
    });
    await newPost.save();

    console.log("Post created successfully");
    revalidatePath("/blog");

  } catch (error) {

    console.log(error);

  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {

    connectToDb();
    await Post.findByIdAndDelete(id);

    console.log("Post deleted successfully");
    revalidatePath("/blog");

  } catch (error) {

    console.log(error);

  }
};
